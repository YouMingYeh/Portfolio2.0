import React from "react";

const MobileTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className=" py-20 h-full z-40">
      <div className="max-w-lg mx-auto h-full pb-16">
        <div className="rounded-lg  bg-white h-full">
          <div className="flex justify-center w-full font-bold text-4xl font-serif">
            My Works/>
          </div>
          <div className="p-4 h-full">
            <div className="flex flex-row justify-around items-center mb-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm z-40 font-medium ${
                    activeTab === index
                      ? "bg-neutral text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.name}
                </button>
              ))}
            </div>
            <div className="h-full overflow-scroll scrollbar-hide shadow-lg p-3 border rounded ">
              {tabs[activeTab].content.map((content, index) => (
                <div
                  key={index}
                  className="mb-4 border rounded-lg shadow-md bg-white p-4"
                >
                  <h3 className="text-md font-medium text-gray-800">
                    {content.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    {content.time}
                  </p>
                  {content.repo && (
                    <a
                      href={content.repo}
                      className="text-sm font-medium text-neutral mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo
                      <br></br>
                    </a>
                  )}

                  {content.deploy && (
                    <a
                      href={content.deploy}
                      className="text-sm font-medium text-neutral mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Deployed App
                    </a>
                  )}
                  <p className="text-sm font-medium text-gray-500 mb-2">
                    {content.description}
                  </p>
                  <div className="flex flex-wrap">
                    {content.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-200 rounded-lg text-sm font-medium text-gray-700 mr-2 mb-2"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTabs;

const tabs = [
  {
    name: "<Projects/>",
    content: [
      {
        title: "BUJIO",
        time: "2022",
        repo: "https://github.com/YouMingYeh/BUJIOAPP",
        deploy: "https://bujio.onrender.com/",
        description:
          "A MERN Full-Stack community software, providing a matching platform for group activities with friends and strangers",
        tools: [
          "React",
          "Redux",
          "Node.js",
          "Express",
          "jsonwebtoken",
          "bcrypt",
          "mongoose",
        ],
      },
      {
        title: "PDAO 2023",
        time: "2023",
        repo: "https://github.com/pdao-system/pdao-website",
        deploy: "https://pdaowebsite.gatsbyjs.io/",
        description:
          "PDAO 2023 promotional website and scoreboard, practicing parallax scrolling UI",
        tools: ["React", "Astro", "Node.js", "RESTful API"],
      },
      {
        title: "Tech Blog Platform",
        time: "2023 - present",
        description: "Working on...",
        tools: ["Flask", "SEO", "..."],
      },
    ],
  },
  {
    name: "<Apps & Tools/>",
    content: [
      {
        title: "Task Manager",
        time: "2023",
        repo: "https://github.com/YouMingYeh/TaskAPI",
        description:
          "This project uses Github Issue API and Github search API, as well as Github Authentication, to assist users and teams in managing repo issues.",
        tools: [
          "React",
          "GitHub Issues API",
          "GitHub Search API",
          "Express",
          "OAuth",
          "styled-components",
          "RESTful API",
        ],
      },
      {
        title: "Text Base Math Calculator",
        time: "2023",
        repo: "https://github.com/YouMingYeh/text-base-math-calculator",
        description:
          "This is a math calculator that supports evaluating math expression, developed using tools of Electron and electron-react-boilerplate.",
        tools: ["React", "Electron", "Math.js", "Tailwind.css", "Typescript"],
      },
      {
        title: "Linker",
        time: "2023",
        repo: "https://github.com/YouMingYeh/Linker",
        deploy: "https://linker-eight.vercel.app/",
        description:
          "This a page for linking to my often used page, created with vite-ssr-plugin which support server-side-rendering",
        tools: [
          "Vite",
          "vite-ssr-plugin",
          "Three.js",
          "Tailwind.css",
          "Typescript",
          "Server-Side-Rendering",
        ],
      },
      {
        title: "dynamic-css-import",
        time: "2023",
        repo: "https://github.com/YouMingYeh/dynamic-css-import",
        description:
          "A npm package that support dynamically importing css file by modifying the document head directly",
        tools: ["npm package", "css-loader"],
      },
      {
        title: "Personal Website 1.0",
        time: "2023",
        repo: "https://github.com/YouMingYeh/Portfolio",
        deploy: "https://yehyouming.web.app/",
        description: "My personal website 1.0",
        tools: ["React", "UI/UX"],
      },
    ],
  },
  {
    name: "<Course Works/>",
    content: [
      {
        title: "real time chat room",
        time: "2022",
        repo: "https://github.com/YouMingYeh/myChatRoom",
        description: "A real time chat room built with web-socket",
        tools: ["websocket", "mongoose"],
      },
      {
        title: "Wordle",
        time: "2022",
        repo: "https://github.com/YouMingYeh/Wordle",
        description: "Wordle game !",
        tools: ["game"],
      },
      {
        title: "Mine Sweeper",
        time: "2022",
        repo: "https://github.com/YouMingYeh/Mine-Sweeper",
        deploy: "closet-9d7aa.web.app/",
        description: "Mine Sweeper game !",
        tools: ["game"],
      },
      {
        title: "wp1111",
        time: "2022",
        repo: "https://github.com/YouMingYeh/wp1111",
        description: "All the other works are here!",
        tools: ["web programming course"],
      },
    ],
  },
];
