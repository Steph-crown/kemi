import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useState } from "react";

const useBannerAnimation = () => {
  const bannerRef = useRef();
  const q = gsap.utils.selector(bannerRef);
  const timeline = useRef();
  const [lessThan900px, setLessThan900px] = useState(false);

  useEffect(() => {
    console.log("Yooo");
    const mql = window.matchMedia("(max-width: 900px)");

    console.log("mql.matches", mql.matches);
    mql.addEventListener("change", (event) => {
      if (event.matches) {
        console.log("Correct bro");
      } else {
        console.log("Incorrect bro");
      }
    });
  });

  useLayoutEffect(() => {
    timeline.current = gsap
      .timeline()
      .fromTo(
        q(".first__flex span"),
        {
          y: -40,
        },
        {
          y: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.25,
          ease: "power3.out",
        }
      )
      .fromTo(
        q([".second__flex span", ".pen-icon"]),
        {
          x: -40,
        },
        {
          x: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.2,
          ease: "power3.out",
        },
        "0"
      )
      .fromTo(
        q(".third__flex span"),
        {
          y: -40,
        },
        {
          y: 0,
          stagger: { each: 0.1, from: "start" },
          duration: 0.25,
          // duration: 2.5,
          ease: "power3.out",
        },
        "0"
      );
  });

  return { bannerRef };
};

export default useBannerAnimation;
