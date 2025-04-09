import React, { useState } from 'react'

const Signup = () => {


  let [data,setData]=useState({name:"",email:"",password:"",confirmPassword:"", courses:[]})

  const handleChange = (e) => {
    const { name, value, checked, type, id } = e.target;
  
    if (type === 'checkbox' && name === 'courses') {
      setData((prevData) => {
        const updatedCourses = checked
          ? [...prevData.courses, id] // add selected course
          : prevData.courses.filter((course) => course !== id); // remove unselected course
        return {
          ...prevData,
          courses: updatedCourses
        };
      });
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  
/*In the handleChange function, when a checkbox with the name "courses" is interacted with (clicked), 
the function checks whether it is currently checked or unchecked using the checked property of the event target (e.target.checked). 
If the checkbox is checked, it means the user wants to select that course,
so the code adds the id of the checkbox (which represents the course name like "cpp", "python", etc.) to the courses array in the state.
This is done using the spread operator: ...prevData.courses, which keeps all previously selected courses, 
and then appending the new one using [...prevData.courses, id]. On the other hand, if the checkbox is unchecked, it means the user wants to deselect that course. 
In this case, the code filters out the course id from the courses array using filter(), effectively removing it from the list of selected courses. 
This logic ensures that the courses array in the state always accurately reflects the current selection of checkboxes — adding courses when they're selected and removing them when deselected. */ 
  
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form data" + JSON.stringify(data));
  };


  return (
    <div className="border-2 border-gray-800 rounded-xl p-10 w-[40rem] h-auto ml-[10rem] mt-[5rem]">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-start gap-y-8 mt-[2rem] mb-[5rem] p-10 placeholder-gray-400 placeholder:font-bold placeholder:text-xl font-bold text-xl"
      >
        <input
          type="text"
          className="bg-black text-white py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl placeholder-gray-400 placeholder:font-bold placeholder:text-xl font-bold text-xl"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          name="name"
        />

        <input
          type="text"
          className="bg-black text-white py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl placeholder-gray-400 placeholder:font-bold placeholder:text-xl font-bold text-xl"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          name="email"
        />


        <input
          type="password"
          className="bg-black text-white py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl placeholder-gray-400 placeholder:font-bold placeholder:text-xl font-bold text-xl"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          name="password"
        />

        <input
          type="password"
          className="bg-black text-white py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl placeholder-gray-400 placeholder:font-bold placeholder:text-xl font-bold text-xl"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />


<div className='flex flex-col gap-5'>
  <div className='text-gray-400 font-bold text-2xl ml-4'>Select the courses</div>
<div className="flex items-center gap-10 ml-5">
<input type="checkbox" id="all" name="courses" onChange={handleChange} className='w-6 h-6' checked={data.courses.includes("all")} />   {/* checked={data.courses.includes("python")} Checks the box if the course "web" is selected (i.e., present in the data.courses array).*/}
  <label htmlFor="all" className="text-gray-400 font-bold text-2xl">All</label>
  </div>
  <div className="flex items-center gap-10 ml-5">
  <input type="checkbox" id="cp" name="courses" onChange={handleChange} className='w-6 h-6' checked={data.courses.includes("cp")} />
  <label htmlFor="cp" className="text-gray-400 font-bold text-2xl">C++</label>
  </div>
  <div className="flex items-center gap-10 ml-5">
  <input type="checkbox" id="python" name="courses" onChange={handleChange} className='w-6 h-6' checked={data.courses.includes("python")} />   
  <label htmlFor="python" className="text-gray-400 font-bold text-2xl">Python</label>
  </div>
  <div className="flex items-center gap-10 ml-5">
  <input type="checkbox" id="web" name="courses" onChange={handleChange} className='w-6 h-6' checked={data.courses.includes("web")} />
  <label htmlFor="web" className="text-gray-400 font-bold text-2xl">Web</label>
  </div>
</div>

        <button
          type="submit"
          className="bg-black text-gray-400 py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 font-bold text-xl"
        >
          Sign-Up
        </button>

        <button
          type="submit"
          className="flex bg-black text-gray-400 py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 font-bold text-xl"
        >
         <img src="google.png" alt='hello' className='w-[3rem] h-[3rem] ml-[3.5rem]'></img> <span className='ml-5 mt-2'>Sign-Up with Google</span>
        </button>

      </form>
    </div>
  )
}

export default Signup