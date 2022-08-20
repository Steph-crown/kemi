import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useBannerAnimation = () => {
  const bannerRef = useRef();
  const q = gsap.utils.selector(bannerRef);
  const timeline = gsap.timeline({});

  useEffect(() => {
    timeline
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
        q(".second__flex span"),
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
