import gsap from "gsap";
import { useEffect } from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousal from "./VideoCarousal";

const Highlights = () => {
  useEffect(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full flex items-end justify-between md:flex">
          <h1 id="title" className="section-heading opacity-0 transform translate-y-10">Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link opacity-0 transform translate-y-10">
              Watch the film
              <img src={watchImg} className="ml-2" alt="Watch the film" />
            </p>
            <p className="link opacity-0 transform translate-y-10">
              Watch the event
              <img src={rightImg} className="ml-2" alt="Watch the event" />
            </p>
          </div>
        </div>
        <VideoCarousal />
      </div>
    </section>
  );
};

export default Highlights;
