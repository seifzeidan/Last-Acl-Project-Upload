import Course from "../models/Course.js";
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const AddCourse = async (req, res) => {
  const { title, subject, subtitles, price, summary, youtubeVideoLink } =
    req.body;
  if (
    !title ||
    !subject ||
    !subtitles ||
    !price ||
    !summary ||
    !youtubeVideoLink
  ) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;
  const instructor = await User.findOne({ _id: req.user.userId });
  const instructorName = instructor.name;
  req.body.instructorName = instructorName;
  const course = await Course.create(req.body);
  res.status(StatusCodes.CREATED).json({ course });
};

const GetInstructorCourses = async (req, res) => {
  const {
    search,
    searchSubject,
    free,
    searchInstructor,
    mostViewed,
    gt,
    lt,
    instructorSearchFlag,
  } = req.query;
  //console.log(free);
  const inst = await User.findOne({ _id: req.user.userId });
  var greater = gt * 1;
  var lower = lt * 1;
  console.log(instructorSearchFlag);
  const queryObject = {};
  if (inst.type === "instructor") {
    if (instructorSearchFlag === "false") {
      queryObject.createdBy = req.user.userId;
    }
  } else {
    if (instructorSearchFlag === "true") {
      queryObject.createdBy = req.user.userId;
    }
  }

  if (free && free == "true") {
    queryObject.price = 0;
  }

  if (searchSubject && searchSubject !== "any") {
    queryObject.subject = { $regex: searchSubject, $options: "i" };
  }

  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }
  if (lower && greater) {
    queryObject.price = { $lt: lower, $gt: greater };
  } else {
    if (lower) {
      queryObject.price = { $lt: lower };
    }
    if (greater) {
      queryObject.price = { $gt: greater };
    }
  }
  if (lower) {
    queryObject.price = { $lt: lower };
  }
  if (greater) {
    queryObject.price = { $gt: greater };
  }

  if (searchInstructor) {
    queryObject.instructorName = { $regex: searchInstructor, $options: "i" };
  }

  // if (lt == 0) {
  //   queryObject.price = 0;
  // } else {
  //   if (lt) {
  //     var b = parseInt(lt);
  //     queryObject.price = { price: { $lt: "30" } };
  //   }
  //   if (gt) {
  //     queryObject.price = { price: { $gt: gt } };
  //   }
  // }

  // NO AWAIT chain sort conditions
  //console.log(MAX_SAFE_INTEGER);
  let result = Course.find(queryObject);

  if (mostViewed && mostViewed === "true") {
    result = result.sort("-viewers");
  }

  const courses = await result;

  res
    .status(StatusCodes.OK)
    .json({ courses, totalCourses: courses.length, numOfPages: 1 });
};

export { AddCourse, GetInstructorCourses };
