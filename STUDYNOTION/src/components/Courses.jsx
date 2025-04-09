import React, { useState } from 'react';
import Cards from './components2/Cards';

const Courses = () => {
  const [category, setCategory] = useState('all');

  const handleClick = (event) => {
    //changing the color of the button when clicked
    setCategory(event.target.id);
  };

  const courses = [
    { text: 'C++', price: 'Rs.6999' },
    { text: 'C++', price: 'Rs.5999' },
    { text: 'C++', price: 'Rs.4999' },
    { text: 'C++', price: 'Rs.3999' },
    { text: 'C++', price: 'Rs.2999' },
    { text: 'Python', price: 'Rs.6999' },
    { text: 'Python', price: 'Rs.5999' },
    { text: 'Python', price: 'Rs.4999' },
    { text: 'Python', price: 'Rs.3999' },
    { text: 'Python', price: 'Rs.2999' },
    { text: 'Web Dev', price: 'Rs.6999' },
    { text: 'Web Dev', price: 'Rs.5999' },
    { text: 'Web Dev', price: 'Rs.4999' },
    { text: 'Web Dev', price: 'Rs.3999' },
    { text: 'Web Dev', price: 'Rs.2999' },
  ];

  // filter using category
  const filteredCourses = courses.filter((course) => {
    if (category === 'all') return true;
    if (category === 'cpp') return course.text === 'C++';
    if (category === 'python') return course.text === 'Python';
    if (category === 'webdev') return course.text === 'Web Dev';
    return true;
  });

  return (
    <div>
      <div className='flex gap-[10rem] text-white text-3xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent p-4 justify-center items-center'>
        <button id='all' className={`border-2 rounded-lg p-4 ${category === 'all' ? 'border-blue-500 text-blue-500' : 'border-gray-300'}`} onClick={handleClick}>All</button>
        <button id='cpp' className={`border-2 rounded-lg p-4 ${category === 'cpp' ? 'border-blue-500 text-blue-500' : 'border-gray-300'}`} onClick={handleClick}>C++</button>
        <button id='python' className={`border-2 rounded-lg p-4 ${category === 'python' ? 'border-blue-500 text-blue-500' : 'border-gray-300'}`} onClick={handleClick}>Python</button>
        <button id='webdev' className={`border-2 rounded-lg p-4 ${category === 'webdev' ? 'border-blue-500 text-blue-500' : 'border-gray-300'}`} onClick={handleClick}>Web Dev</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ml-[16rem]">
        {filteredCourses.map((course, index) => (
          <Cards key={index} text={course.text} price={course.price} />
        ))}
      </div>
    </div>
  );
};

export default Courses;


/*This React component defines a Courses page that allows users to filter displayed course cards based on category selection.
It starts by using the useState hook to initialize a category state variable with the value "all", which determines which courses are shown. 
The handleClick function updates this category state based on which filter button (All, C++, Python, Web Dev) the user clicks, 
using the button's id as the new category. A hardcoded array of courses holds all course data. 
The filteredCourses array is computed by filtering the courses array based on the currently selected category, showing only relevant items. 
Inside the return, there’s a button group where each button conditionally applies different styles based on whether its id matches the current category, 
giving the user a visual cue for the active filter. Finally, the component maps over filteredCourses and renders a Cards component for each, 
passing the course name and price as props. Every time a button is clicked, the category state changes, 
causing React to re-render the component and show the filtered list accordingly. */
