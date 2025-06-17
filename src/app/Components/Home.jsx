"use client";

import React, { useState } from "react";
import HomeSlider from "./HomeSlider";
import Register from "../User/Register";
import UserList from "../User/UserList";
import Link from "next/link";

export default function Home() {
  let [userData, setUserData] = useState([]);
  let userInfo = { userData, setUserData };

  return (
    <div className=" max-w-[1320px] mx-auto  bg-[#050816]">
      <section className=" lg:py-[80px] sm:py-[50px] py-[30px]">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex md:flex-row flex-col-reverse gap-4">
            <div className="basis-[50%] ps-20 ">
              <p className="text-[20px] text-white">Portfolio</p>
              <h1 className="font-bold font-serif text-[30px] lg:text-[40px] py-[30px] text-white">
                Hello, I am Frahim.
              </h1>
              <p className="text-[20px] text-white">MERN Stack Web Developer</p>
              <div className="flex gap-[30px] py-[30px] md:justify-start justify-center">
                <button className="bg-lime-300 p-[8px_10px] md:p-[15px_25px] text-[20px] rounded-[5px] hover:bg-white hover:shadow-lg duration-500">
                  Frontend
                </button>
                <button className="bg-red-400 p-[8px_10px] md:p-[15px_25px] text-[20px] rounded-[5px]  duration-500 hover:bg-white hover:shadow-lg">
                  Backend
                </button>
              </div>
            </div>
            <div className="basis-[50%] group ">
              <img
                className="group-hover:scale-90 px-44 py-20 rounded-full duration-500"
                src="../images/1.jpg"
              ></img>
            </div>
          </div>

          <div className="max-w-[1320px] mx-auto">
            <div className="flex gap-[50px] mt-2 md:flex-row flex-col p-10 rounded-[10px]">
              <div className="grow border-2 border-black border-solid group hover:translate-x-[20px] duration-500  items-center gap-[20px] shadow-[0px_0px_10px_2px_blue] w-250px ">
                <img
                  className="group-hover:rotate-[360deg] duration-500 p-20"
                  src="../images/web.png"
                ></img>

                <div>
                  <h1 className="text-white text-[20px] text-center">
                    Web Developer
                  </h1>
                </div>
              </div>
              <div className="grow border-2 border-black border-solid group hover:translate-x-[20px] duration-500  items-center gap-[20px] shadow-[0px_0px_10px_2px_green] w-250px ">
                <img
                  className="group-hover:rotate-[360deg] duration-500 p-20"
                  src="../images/frontend.png"
                ></img>
                <div>
                  <h1 className="text-white text-[20px] text-center">
                    Frontend Developer
                  </h1>
                </div>
              </div>
              <div className="grow border-2 border-black border-solid group hover:translate-x-[20px] duration-500  items-center gap-[20px] shadow-[0px_0px_10px_2px_red] w-250px ">
                <img
                  className="group-hover:rotate-[360deg] duration-500 p-20"
                  src="../images/backend.png"
                ></img>
                <div>
                  <h1 className="text-white text-[20px] text-center">
                    Backend Developer
                  </h1>
                </div>
              </div>
              <div className="grow border-2 border-black border-solid group hover:translate-x-[20px] duration-500  items-center gap-[20px] shadow-[0px_0px_10px_2px_yellow] w-250px ">
                <img
                  className="group-hover:rotate-[360deg] duration-500 p-20"
                  src="../images/fullStack.png"
                ></img>
                <div>
                  <h1 className="text-white text-[20px] text-center">
                    FullStack Developer
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-full bg-blue-950 text-white">
            <h5 className="p-6 text-[20px]">Introduction</h5>
            <h1 className="px-4 text-amber-300 font-bold text-[60px]">
              Overview.
            </h1>
            <p className="px-6 py-4">
              Full Stack Web Developer with hands-on experience in designing, developing, and maintaining dynamic web applications. Proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and Express. Experienced with relational and NoSQL databases such as MySQL and MongoDB. Strong understanding of RESTful APIs, version control (Git), and deployment processes. Committed to writing clean, efficient code and delivering robust, scalable solutions in collaborative team environments.
            </p>
          </div>
          <div className="max-w-[1320px] mx-auto ">
            <div className="text-center text-red-600">
              <h1 className="text-[40px] font-bold bg-slate-500">Skills</h1>
            </div>
            <div className="flex gap-[30px] mt-2 md:flex-row flex-col px-10">
              <div>
                <img src="../images/scss.png"></img>
                <p className="text-white text-center text-[20px]">scss</p>
              </div>
              <div className="w-[200px]">
                <img src="../images/Amazon-S3.png"></img>
                <p className="text-white text-center text-[20px] z-index">
                  AmazonS3
                </p>
              </div>
              <div className="w-200px pt-3">
                <img src="../images/ec2.png"></img>
                <p className="text-white text-center text-[20px] pt-3">ec2</p>
              </div>
              <div className="w-[200px] pt-3">
                <img src="../images/expressjs.png"></img>
                <p className="text-white text-center text-[20px] pt-1">
                  expressjs
                </p>
              </div>
              <div className="w-[200px] pt-3">
                <img src="../images/formik-icon.png"></img>
                <p className="text-white text-center text-[20px] pt-1">
                  formik-icon
                </p>
              </div>
              <div className="w-[200px] pt-3">
                <img src="../images/git.png"></img>
                <p className="text-white text-center text-[20px]">github</p>
              </div>
              <div className="w-[200px] pt-3">
                <img src="../images/material-ui.png"></img>
                <p className="text-white text-center text-[20px] pt-4">
                  material-ui
                </p>
              </div>
              <div className="w-[200px] pt-3">
                <img src="../images/mongodb.png"></img>
                <p className="text-white text-center text-[20px]">mongodb</p>
              </div>
              <div className="w-[200px] pt-3">
                <img src="../images/javascript.png"></img>
                <p className="text-white text-center text-[20px]">Javascript</p>
              </div>
            </div>
            <div className="flex gap-[30px] mt-2 md:flex-row flex-col px-20">
              <div className="w-[200px] p-10">
                <img src="../images/mongoose.png"></img>
                <p className="text-white text-center text-[20px] ">mongoose</p>
              </div>
              <div className="w-[200px] p-10">
                <img src="../images/nodejs.png"></img>
                <p className="text-white text-center text-[20px]">nodejs</p>
              </div>
              <div className="w-[200px] pt-9">
                <img src="../images/reactjs.png"></img>
                <p className="text-white text-center text-[20px] pe-28 ">
                  reactjs
                </p>
              </div>
              <div className="w-[200px] p-10">
                <img src="../images/redux.png"></img>
                <p className="text-white text-center text-[20px] ">redux</p>
              </div>
              <div className="w-[200px] p-10">
                <img src="../images/tailwind.png"></img>
                <p className="text-white text-center text-[20px] ">Tailwind</p>
              </div>
              <div className="w-[200px] p-10">
                <img src="../images/html.png"></img>
                <p className="text-white text-center text-[20px] ">html</p>
              </div>
            </div>
          </div>

          <section className="bg-[#000] py-[50px]">
            <div className="max-w-[1170px] mx-auto bg-slate-900">
              <div className="grid grid-cols-2">
                <div className="w-[50%] mx-auto md:py-10 px-[]">
                  <p className="text-white">GET IN TOUCH-</p>
                  <h1 className="text-white text-[50px] font-bold">Contect.</h1>

                  <div className="gap-5 flex pt-40 ">
                    <Link href={"https://github.com/frahim-arif/"}>
                      <button
                        type="button"
                        class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
                      >
                        <svg
                          class="w-4 h-4 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Github
                      </button>
                    </Link>
                    <Link href={"+919058596626"}>
                      <button
                        type="button"
                        class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                      >
                        <svg
                          class="w-4 h-4 me-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 19"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Phone
                      </button>
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/in/mr-frahim-41b720333/"}
                    >
                      <button
                        type="button"
                        class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                      >
                        <svg
                          class="w-5 h-5 me-2 -ms-1"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fab"
                          data-icon="apple"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path
                            fill="currentColor"
                            d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                          ></path>
                        </svg>
                        LinkedIn
                      </button>
                    </Link>
                  </div>
                </div>
                <figure className="relative">
                  <div className="w-50% mx-auto p-20 rounded-[5px] bg-[rgba(0,0,0,0.5)] group">
                    <img src="../images/sd.jpg" className="group-hover:scale-90  duration-500"></img>
                  </div>
                </figure>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-[1320px] mx-auto">
              <div className="text-center">
                <h1 className="text-white  text-[60px]">WORK EXPERIANCE</h1>
              </div>
              <div className="flex flex-wrap">
                <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group  hover:translate-y-[-10px] duration-300 shadow-white">
                  <img
                    src="../images/fi.webp"
                    className="w-[60px] mx-auto group-hover:scale-125  duration-700 rounded-full"
                  ></img>
                  <h2 className="text-[28px] font-bold py-[15px] text-[blue] ">
                    Frontend Development
                  </h2>
                  <h2 className="text-[20px] font-bold py-[15px] text-white ">
                    React.js, Redux, Formik with Yup
                  </h2>
                  <p className="text-white">
                    Advanced skills in React.js for building dynamic web
                    applications.<br></br> Expertise in Redux for efficient
                    state management.<br></br> Experience with Formik and Yup
                    for seamless form handling and validation.<br></br> Applied
                    Flux architecture to enhance data flow and maintainability.
                    <br></br> Implemented advanced architectural patterns for
                    scalable applications. <br></br>These are just a few of the
                    many libraries
                  </p>
                </div>
                <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group  hover:translate-y-[-10px] duration-300 shadow-white">
                  <img
                    src="../images/ui.webp"
                    className="w-[60px] mx-auto group-hover:scale-125  duration-700 rounded-full"
                  ></img>
                  <h2 className="text-[28px] font-bold py-[15px] text-[blue] ">
                    UI Designing
                  </h2>
                  <h2 className="text-[20px] font-bold py-[15px] text-white ">
                    Material UI, Bootstrap, Tailwind CSS, SCSS
                  </h2>
                  <p className="text-white">
                    Proficient in Material UI for creating modern and responsive
                    user interfaces. <br></br>Expertise in Framer Motion for
                    crafting smooth and interactive animations.<br></br>{" "}
                    Skillful use of Tailwind CSS to streamline and enhance UI
                    styling. Leveraged SCSS to seamlessly integrate Tailwind CSS
                    utility classes, optimizing code and enabling custom class
                    creation when required.<br></br> Ability to create
                    responsive layouts for diverse screen sizes and devices.
                    <br></br> Prioritizing user experience and usability in UI
                    design projects. Sep 2022 - Present Backend Development
                    Backend Development
                  </p>
                </div>
                <div className="basis-[30%] m-[1.5%] shadow-lg py-[20px] text-center group  hover:translate-y-[-10px] duration-300 shadow-white">
                  <img
                    src="../images/bi.webp"
                    className="w-[60px] mx-auto group-hover:scale-125  duration-700 rounded-full"
                  ></img>
                  <h2 className="text-[28px] font-bold py-[15px] text-[blue] ">
                    Backend Development
                  </h2>
                  <h2 className="text-[20px] font-bold py-[15px] text-white ">
                    Node js, Express js, Mongoose, S3
                  </h2>
                  <p className="text-white">
                    Proficient in Node.js for building robust and scalable
                    server-side applications.<br></br> Strong command of
                    Express.js for creating RESTful APIs and routing.<br></br>{" "}
                    Experience in using MongoDB and Mongoose, including the
                    strategic use of indexing, for efficient data modeling,
                    storage, and retrieval. Strategies for optimizing
                    application performance and scalability.<br></br>{" "}
                    Integration of AWS S3 for secure and scalable file storage
                    and retrieval Skillful use of Postman for API testing,
                    validation, and documentation Familiarity with the
                    Model-View-Controller (MVC) pattern for structured and
                    maintainable code Application of Clean Architecture
                    principles for modular and testable codebases Implementation
                    of security measures, including authorization, and
                    authentication mechanisms to protect data.
                  </p>
                </div>
                
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="max-w-1170px mx-auto">
        <div className="grid gap-6 grid-cols-[30%_auto]">
          <Register userInfo={userInfo} />
          <UserList userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
}
