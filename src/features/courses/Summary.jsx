import { useParams } from "react-router-dom";
import { courses } from "../../../data/FData";
import CourseDetail from "./CourseDetail";
import {
  Button,
  Card,
  CardBody,
  Typography,
  List,
  ListItem,
} from "@material-tailwind/react";
import { useLocalStorageState } from "../../utils/useLocalStorageState";
import { useEffect } from "react";
courses;
function Summary() {
  const [index, setIndex] = useLocalStorageState(
    {
      sectionIndex: 0,
      chapterIndex: 0,
      state: "standby",
    },
    "indexes"
  );
  useEffect(function () {
    setIndex({
      sectionIndex: 0,
      chapterIndex: 0,
      state: "standby",
    });
  }, []);
  const { id } = useParams();
  const course = courses.find((course) => course.id === Number(id));
  const sections = course.sections;
  return (
    <>
      {index.state === "standby" && (
        <div>
          <h2 className="text-3xl font-semibold my-4">{course.title}</h2>
          {sections.map((section, index) => {
            let sectionIndex = index;
            return (
              <Card key={section.id} className="mt-6 ">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {section.title}
                  </Typography>
                  <List>
                    {section.chapters.map((chapter, index) => (
                      <ListItem
                        key={chapter.id}
                        onClick={() => {
                          setIndex({
                            sectionIndex: sectionIndex,
                            chapterIndex: index,
                            state: "start",
                          });
                        }}
                      >
                        <h5 className="mx-5 my-2  text-gray-800">
                          {chapter.title}
                        </h5>
                      </ListItem>
                    ))}
                  </List>
                </CardBody>
              </Card>
             
            );
          })}
        
        </div>
      )}
      {index.state === "start" && (
        <>
          <CourseDetail index={index} course={course} setState={setIndex} />
        </>
      )}
    </>
  );
}

export default Summary;
