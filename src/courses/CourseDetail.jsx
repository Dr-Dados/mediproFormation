import { Button } from "@material-tailwind/react";

function CourseDetail({ index, course, setState }) {
  const { sectionIndex, chapterIndex } = index;
  return (
    <div>
      <h2 className="text-3xl font-semibold my-4">
        {course.title} - {course.sections[sectionIndex].title}
      </h2>
      <h2 className="text-xl font-semibold my-4">
        {course.title} -{" "}
        {course.sections[sectionIndex].chapters[chapterIndex].title}
      </h2>
      <div
        dangerouslySetInnerHTML={{
          __html: course.sections[sectionIndex].chapters[chapterIndex].content,
        }}
      />
      <Button
        className="my-5"
        color="blue"
        onClick={() => {
          setState({ sectionIndex: 0, chapterIndex: 0, state: "standby" });
        }}
      >
        Retour au sommaire
      </Button>
    </div>
  );
}

export default CourseDetail;
