import { BiAddToQueue } from "react-icons/bi";
import { BsFillCollectionFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { GoReport } from "react-icons/go";
import { BsFillTerminalFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

const links = [
  {
    id: 1,
    text: "Find Other Courses",
    path: "/find-courses",
    icon: <BiSearchAlt />,
  },
  {
    id: 2,
    text: "Published Courses",
    path: "/instructor-courses",
    icon: <BsFillCollectionFill />,
  },
  {
    id: 3,
    text: "Add New Course",
    path: "/add-course",
    icon: <BiAddToQueue />,
  },
  {
    id: 4,
    text: "Profile",
    path: "/profile",
    icon: <ImProfile />,
  },
  {
    id: 5,
    text: "Report a problem",
    path: "/report-problem",
    icon: <GoReport />,
  },
  {
    id: 6,
    text: "View all reported",
    path: "/view-reported",
    icon: <BsFillTerminalFill />,
  },
];
export default links;
