import { CoursesContainer, SearchContainer } from "../../components";
import { useAppContext } from "../../context/appContext";

const FindCourses = () => {
  const { instructorSearchFlag, flipInstructorSearchFlag } = useAppContext();
  if (instructorSearchFlag === true) {
    console.log("find courses flipped");
    flipInstructorSearchFlag();
    console.log(instructorSearchFlag);
  }
  return (
    <>
      <SearchContainer />
      <CoursesContainer />
    </>
  );
};
export default FindCourses;
