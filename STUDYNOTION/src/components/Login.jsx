import React, { useState } from 'react';

const Login = () => {

  let [data, setData] = useState({email: "", password: ""});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form data" + JSON.stringify(data));
  };

  return (
    <div className="border-2 border-gray-800 rounded-xl p-10 w-[40rem] h-auto ml-[10rem] mt-[5rem]">
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-start gap-y-8 mt-[2rem] mb-[5rem] p-10 placeholder-gray-400 placeholder:font-bold placeholder:text-xl"
      >
        <input
          type="text"
          className="bg-black text-white py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl placeholder-gray-400 placeholder:font-bold placeholder:text-xl"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          className="bg-black text-white py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl placeholder-gray-400 placeholder:font-bold placeholder:text-xl"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          name="password"
        />
        <button
          type="submit"
          className="bg-black text-gray-400 py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 font-bold text-xl"
        >
          Log-In
        </button>

        <button
          type="submit"
          className="flex bg-black text-gray-400 py-4 px-10 w-[30rem] border-2 border-gray-800 rounded-xl cursor-pointer hover:bg-white hover:text-black transition-all duration-300 font-bold text-xl"
        >
         <img src="google.png" alt='hello' className='w-[3rem] h-[3rem] ml-[3.5rem]'></img> <span className='ml-5 mt-2'>Log-In with Google</span>
        </button>



      </form>
    </div>
  );
};

export default Login;
