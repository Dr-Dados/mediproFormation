import { Link } from "react-router-dom";
import CourseItem from "./CourseItem";

import { useCourses } from "../../context/CourseProvider";
import {
  Card,
  CardBody,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";

function Courses() {
  const { courses } = useCourses();
  return (
    <div>
      <div>
        <h2 className="text-3xl font-semibold my-4">Formations</h2>
        <Card>
          <CardBody>
            <List className="p-0">
              {courses.map((course) => (
                <Link key={course.id} to={`${course.id}`}>
                  <ListItem key={course.id}>
                    <Typography>
                      <h5 className="font-normal  text-gray-900">
                        {course.title}
                      </h5>
                    </Typography>
                  </ListItem>
                </Link>
              ))}
            </List>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Courses;
