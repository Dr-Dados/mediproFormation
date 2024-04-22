import { Button } from "@material-tailwind/react";

function CourseDetail({ index, course, setState }) {
  const { sectionIndex, chapterIndex } = index;
  function nextHandler() {
    setState((state) => ({
      ...state,
      chapterIndex: Number(state.chapterIndex) + 1,
    }));
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold my-4">
          {course.title} - {course.sections[sectionIndex].title}
        </h2>
        <Button
          className="mt-5 my-10"
          color="blue"
          onClick={() => {
            setState({ sectionIndex: 0, chapterIndex: 0, state: "standby" });
          }}
        >
          Retour au sommaire
        </Button>
      </div>
      <h2 className="text-xl font-semibold my-4">
        {course.sections[sectionIndex].chapters[chapterIndex].title}
      </h2>

      <div
        className="prose max-w-none" // Ensure you have the necessary Tailwind CSS classes available
        dangerouslySetInnerHTML={{
          __html: course.sections[sectionIndex].chapters[chapterIndex].content,
        }}
      />

      <div className="flex justify-between items-center my-10">
        <Button
          className={`${chapterIndex === 0 ? "hidden" : ""}`}
          color="green"
        >
          Précedent
        </Button>
        <Button color="green" onClick={nextHandler}>
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default CourseDetail;
