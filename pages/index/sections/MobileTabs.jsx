import React from "react";

const MobileTabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="pt-20 pb-32 h-full z-40">
      <div className="max-w-lg mx-auto h-full pb-16">
        <div className="rounded-lg  bg-white h-full">
          <div className="flex justify-center w-full font-bold text-4xl font-serif">
            My Works
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
                  <div className="w-full flex-nowrap flex-row flex gap-1">
                    {content.repo && (
                      <a
                        href={content.repo}
                        className="border border-gray-500  rounded p-1 text-sm font-medium text-neutral mb-2"
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
                        className="border border-gray-500 rounded p-1 text-sm font-medium text-neutral mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Deployed App
                      </a>
                    )}
                  </div>
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
        title: "Event Master",
        time: "2023",
        repo: "https://github.com/Xin401/DBMS_project",
        description:
          "A Coursework done with Vite React+Fastapi+Postgres, providing a platform for event management, meeting scheduling, and group chat. Like a combined version of Google Calendar+When2meet+Slack. The project was focus on the backend and database design, providing a awesome postgres database schema design, using ER diagram, normalization, following general rules.",
        tools: ["React", "Fastapi", "Postgres", "Vite", "Docker"],
      },
      {
        title: "Jellycat Scrape App",
        time: "2023",
        repo: "https://github.com/YouMingYeh/jellycat-scrape-app",
        description:
          "A web scraping app that scrapes jellycat.com and related websites and provides a list of products with their name, price, and image. Compare and calculate the price and cost of the product in different real-time currencies. This app aims to help purchasing agents who purchase products for others. Also, it provides a awesome user interface for the user to scrape the real-time data and manage them.",
        tools: ["Nextjs", "Sellinium", "Flask"],
      },

      {
        title: "A Cat's Adventure",
        time: "2023",
        repo: "https://github.com/YouMingYeh/A-Cat-s-Adventure.git",
        deploy: "https://yehyouming.itch.io/the-cats-adventure",
        description: "A 2D platformer game, built with Unity, C#.",
        tools: ["Unity", "C#"],
      },

      {
        title: "NTU 2D Top-Down Game",
        time: "2023",
        repo: "Not provided",
        deploy: "https://112-1-game-programming.github.io/Game-Build/",
        description: "A 2D top-down game, built with Unity, C#.",
        tools: ["Unity", "C#", "Github Pages"],
      },

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
          "Express",
          "jsonwebtoken",
          "bcrypt",
          "MongoDB",
        ],
      },
      {
        title: "PDAO 2023",
        time: "2023",
        repo: "https://github.com/pdao-system/pdao-website",
        deploy: "https://pdaowebsite.gatsbyjs.io/",
        description:
          "PDAO 2023 promotional website and scoreboard, practicing parallax scrolling UI",
        tools: ["React", "Astro", "Node.js"],
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
      {
        title: "Clean Architecture good practice",
        time: "2023",
        repo: "https://github.com/YouMingYeh/Clean-Architecture---Birthday-Greeting-Kata.git",
        description:
          "A good practice of clean architecture, using the birthday greeting kata as an example",
        tools: ["Clean Architecture", "Fastapi"],
      },
    ],
  },
  {
    name: "<Course Works/>",
    content: [
      {
        title: "AI article detection",
        time: "2023",
        repo: "https://github.com/YouMingYeh/IRTM-Final-Project-AI-Article-Detection.git",
        description:
          "A project that uses machine learning to classify the article into different categories. Information Retrieval and Text Mining Final Project. Reach 0.99 accuracy on the best model.",
        tools: ["Machine Learning", "NLP", "Deep Learning"],
      },
      {
        title: "real time chat room",
        time: "2022",
        repo: "https://github.com/YouMingYeh/myChatRoom",
        description: "A real time chat room built with web-socket",
        tools: ["Websocket", "MongoDB"],
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
