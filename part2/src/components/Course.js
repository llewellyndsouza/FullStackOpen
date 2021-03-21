import React from "react";

const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({course}) => {
  return(course.parts.map(part=>(
    <p>{part.name} : {part.exercises}</p>
  )))
};

const Total = ({course}) => (
  <>
    <p>Number of exercises : {course.parts.reduce((pre, cur) => pre + cur.exercises, 0)}</p>
  </>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Part course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
