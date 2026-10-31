
"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto bg-[#0A0F29] text-white">
      {/* HERO SECTION */}
      <section className="lg:py-[90px] sm:py-[60px] py-[40px]">
        <div className="flex md:flex-row flex-col-reverse items-center gap-10">

          {/* LEFT TEXT */}
          <div className="basis-1/2 px-8">
            <p className="text-[18px] text-[#00E5FF] tracking-wider">
              Welcome to <span className="text-[#6C63FF] font-bold">Web Core</span>
            </p>

            <p className="text-[20px] text-[#00E5FF] tracking-wider mt-2">
              PORTFOLIO
            </p>

            <h1 className="font-extrabold text-[45px] py-4 leading-[55px]">
              Hello, I'm <span className="text-[#6C63FF]">Frahim</span>
            </h1>

            <p className="text-[22px] opacity-80">
              MERN Stack Developer & Founder of Web Core
            </p>

            <div className="flex gap-6 py-8">
              <button className="px-6 py-3 bg-[#6C63FF] rounded-lg shadow-lg shadow-[#6C63FF]/40 hover:scale-105 duration-300">
                Frontend
              </button>

              <button className="px-6 py-3 border border-[#6C63FF] rounded-lg hover:bg-[#6C63FF] duration-300">
                Backend
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="basis-1/2 flex justify-center group">
            <Image
              src="/images/1.jpg"
              width={280}
              height={280}
              className="rounded-full shadow-[0_0_50px_#6C63FF] duration-500 group-hover:scale-95 cursor-pointer"
              alt="portfolio"
            />
          </div>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 px-6 mt-14">
          {[
            { img: "web.png", text: "Web Developer", color: "#6C63FF" },
            { img: "frontend.png", text: "Frontend Developer", color: "#00E5FF" },
            { img: "backend.png", text: "Backend Developer", color: "#FF4F6A" },
            { img: "fullStack.png", text: "FullStack Developer", color: "#FFC300" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#101530] p-6 rounded-xl hover:-translate-y-2 duration-300 shadow-xl"
              style={{ boxShadow: `0 0 20px ${item.color}` }}
            >
              <Image
                src={`/images/${item.img}`}
                width={100}
                height={100}
                alt={item.text}
                className="mx-auto p-3"
              />

              <h1 className="text-center text-[18px] mt-4 font-semibold">
                {item.text}
              </h1>
            </div>
          ))}
        </div>

        {/* INTRODUCTION */}
        <div className="bg-[#111A3A] text-white py-10 px-8 mt-12 rounded-xl shadow-lg shadow-blue-900/40">
          <h5 className="text-[22px] text-[#00E5FF]">
            Introduction
          </h5>

          <h1 className="text-[#FFC300] font-extrabold text-[50px]">
            Overview.
          </h1>

          <p className="py-4 leading-relaxed text-[18px] opacity-90">
            Full Stack Web Developer with hands-on experience in creating modern,
            scalable and responsive applications. I help businesses grow with
            high-quality code through my company Web Core.
          </p>
        </div>

        {/* SKILLS */}
        <div className="py-14">
          <h1 className="text-center text-[#6C63FF] text-[40px] font-extrabold">
            Skills
          </h1>

          <div className="grid md:grid-cols-5 grid-cols-2 gap-8 mt-10 px-10">
            {[
              "scss.png",
              "Amazon-S3.png",
              "ec2.png",
              "expressjs.png",
              "formik-icon.png",
              "material-ui.png",
              "mongodb.png",
              "javascript.png",
              "mongoose.png",
              "nodejs.png",
              "reactjs.png",
              "redux.png",
              "tailwind.png",
              "html.png",
            ].map((img, index) => (
              <div
                key={index}
                className="text-center hover:scale-105 duration-300"
              >
                <Image
                  src={`/images/${img}`}
                  width={90}
                  height={90}
                  alt={img}
                />

                <p className="text-[18px] mt-2 opacity-80">
                  {img.replace(".png", "")}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <section className="bg-[#050812] py-14 mt-6 rounded-xl shadow-inner shadow-blue-900">
          <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 px-8">

            <div>
              <p className="text-[#00E5FF] tracking-widest">
                GET IN TOUCH
              </p>

              <h1 className="text-white text-[50px] font-extrabold leading-[55px]">
                Contact.
              </h1>
            </div>

            <div></div>
          </div>
        </section>

      </section>
    </div>
  );
}
