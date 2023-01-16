import { CoursesContainer, SearchContainer } from "../../components";
import { useAppContext } from "../../context/appContext";

const InstructorCourses = () => {
  const { instructorSearchFlag, flipInstructorSearchFlag } = useAppContext();
  if (instructorSearchFlag === false) {
    console.log("instructor flag flipped");
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
export default InstructorCourses;
