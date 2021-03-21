import React from "react";

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ course }) => {
  return course.parts.map((part) => (
    <p>
      {part.name} : {part.exercises}
    </p>
  ));
};

const Total = ({ course }) => (
  <>
    <p>
      <strong>
        Total of {course.parts.reduce((pre, cur) => pre + cur.exercises, 0)}{" "}
        exercises
      </strong>
    </p>
  </>
);

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Part course={course} />
      <Total course={course} />
    </>
  );
};

export default Course;
