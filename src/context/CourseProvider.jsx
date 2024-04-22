import { createContext, useContext, useEffect, useState } from "react";
import { getCourses } from "../services/apicourses";

const CourseContext = createContext();

function CourseProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [sections, setSections] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(function () {
    setIsloading(true);
    getCourses().then((data) => setCourses(data));
    setIsloading(false);
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        sections,
        isLoading,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

function useCourses() {
  const context = useContext(CourseContext);
  if (context === undefined) throw new Error("Used outside the Context");
  return context;
}

export { useCourses, CourseProvider };
