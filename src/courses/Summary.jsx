import {  NavLink, useParams } from "react-router-dom";

function Summary({ courses }) {
  const { id } = useParams();
  const course = courses.find((course) => course.title === id);
  return (
    <div>
      <h2 className="text-3xl font-semibold my-4">{course.title}</h2>
      {course.sections.map((section) => (
        <div key={section.id} className="mb-5">
          <p className="text-lg font-semibold">{section.title}</p>
          <ul className="flex flex-col">
            {section.chapters.map((chapter) => (
              <NavLink to={`${chapter.id}`} key={chapter.id} className="ml-4 my-2">
                {chapter.title}
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Summary;
