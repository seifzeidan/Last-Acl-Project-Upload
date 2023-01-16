import { FormRow, FormRowSelect } from ".";
import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
const SearchContainer = () => {
  const {
    isLoading,
    search,
    mostViewed,
    searchSubject,
    free,
    searchInstructor,
    lt,
    gt,
    handleChange,
    clearFilters,
    GetInstructorCourses,
    flipInstructorSearchFlag,
    instructorSearchFlag,
  } = useAppContext();

  useEffect(() => {
    GetInstructorCourses();
  }, [search, mostViewed, searchSubject, free, searchInstructor, lt, gt]);

  const handleSearch = (e) => {
    //if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        {/* search position */}
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          ></FormRow>
          {!instructorSearchFlag && (
            <FormRow
              type="text"
              labelText="Instructor Name"
              name="searchInstructor"
              value={searchInstructor}
              handleChange={handleSearch}
            ></FormRow>
          )}
          <FormRow
            type="text"
            labelText="Subject"
            name="searchSubject"
            value={searchSubject}
            handleChange={handleSearch}
          ></FormRow>
          <FormRow
            type="number"
            labelText="Price Less Than"
            name="lt"
            value={lt}
            handleChange={handleSearch}
          ></FormRow>
          <FormRow
            type="number"
            labelText="Price more Than"
            name="gt"
            value={gt}
            handleChange={handleSearch}
          ></FormRow>

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
          <div>
            <input
              type="checkbox"
              id="Free"
              name="Free"
              unchecked
              onClick={() =>
                handleChange({
                  name: "free",
                  value: free === "false" ? "true" : "false",
                })
              }
            ></input>
            <label for="Free">Free Courses Only!</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="views"
              name="views"
              unchecked
              onClick={() =>
                handleChange({
                  name: "mostViewed",
                  value: mostViewed === "false" ? "true" : "false",
                })
              }
            ></input>
            <label for="views">Sort by most popular/Viewed!</label>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
