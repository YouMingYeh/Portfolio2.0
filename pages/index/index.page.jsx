import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin, TextPlugin } from "gsap/dist/all";
import Breadcrumbs from "./BreadCrumbs";
import Section1 from "./sections/About";
import Projects from "./sections/Projects";
import Info from "./sections/Info";
import Contact from "./sections/Contact";
import Avatar from "./Avatar";
import MobileTabs from "./sections/MobileTabs";import MobileInfo from "./sections/MobileInfo";
import MobileContact from "./sections/MobileContact";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

export { Page };
function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1080px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1080px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    const container = document.getElementsByClassName("scroll-container")[0];
    container.addEventListener("scroll", (event) => {
      // const position = container.scrollTop

      for (let i = sectionRefs.length - 1; i >= 0; i--) {
        if (!sectionRefs[i]) return;
        const rect = sectionRefs[i].current.getBoundingClientRect();
        if (!rect) return;

        if (rect.x == 0 && rect.y == 0) {
          // console.log(i)
          setCurrentIndex(i);
          return;
        }
      }
    });
  }, []);

  return (
    <div className="scroll-container">
      {matches ? (
        <>
          <Avatar />
          <Breadcrumbs
            currentIndex={currentIndex}
            sectionRefs={sectionRefs}
          ></Breadcrumbs>
          <section sectionRefs={sectionRefs[0]}>
            <Section1 sectionRefs={sectionRefs}></Section1>
          </section>
          <section className="section" ref={sectionRefs[1]}>
            <Projects currentIndex={currentIndex} />
          </section>
          <section className="section" ref={sectionRefs[2]}>
            <Info />
            {/* <Slide /> */}
          </section>
          <section className="section" ref={sectionRefs[3]}>
            <Contact />
          </section>
        </>
      ) : (
        <>
          <Avatar />
          <Breadcrumbs
            currentIndex={currentIndex}
            sectionRefs={sectionRefs}
          ></Breadcrumbs>
          <section className="section" sectionRefs={sectionRefs[0]}>
            <div className="flex justify-start px-6 py-32 flex-col">
              <h1 className="text-2xl font-bold">Hi there!</h1>
              <br></br>
              <h1 className="text-xl">
                I'm a student🎒 majoring in Information Management at NTU🇹‍🇼.
              </h1>
              <br></br>
              <h1 className="text-xl">
                Passionate about Full Stack Web and Software development,
              </h1>
              <h1 className="text-xl">
                so I never lose my enthusiasm 🔥🔥 for acquiring new
                tech-knowledge.
              </h1>
              <br></br>
              <h1 className="text-xl">
                I've created side projects 🚀, and continuously worked on
                improving and mantaining them 💻.
              </h1>
              <br></br>
              <h1 className="text-2xl font-bold">Check it out!!!👇</h1>
            </div>
          </section>
          <section className="section" ref={sectionRefs[1]}>
            <MobileTabs />
          </section>
          <section className="section" ref={sectionRefs[2]}>
            <MobileInfo />
          </section>
          <section className="section" ref={sectionRefs[3]}>
            <MobileContact />
          </section>
        </>
      )}
    </div>
  );
}
