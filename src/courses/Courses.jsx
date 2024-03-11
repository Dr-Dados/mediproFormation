import { Link } from "react-router-dom";
import CourseItem from "./CourseItem";

function Courses({ courses }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Formations</h2>
      <div className="grid grid-cols-3 gap-2">
        {courses.map((course) => (
          <Link key={course.id} to={`${course.title}`}>
            <CourseItem color={course.color} >
              {course.title}
            </CourseItem>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Courses;
