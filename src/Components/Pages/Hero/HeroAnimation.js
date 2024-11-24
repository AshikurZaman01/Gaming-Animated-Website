import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initVideoAnimations = (videoRef, hasClicked, setHasClicked) => {
    if (videoRef.current) {
        // Hover effect
        gsap.fromTo(
            videoRef.current,
            { scale: 1, opacity: 1 },
            {
                scale: 1.1,
                opacity: 0.8,
                duration: 0.3,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true,
            }
        );
    }

    // Reset animation on click
    if (hasClicked) {
        gsap.to(videoRef.current, {
            scale: 0.8,
            opacity: 0.3,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                setHasClicked(false);
            },
        });
    }

    // Video frame animation
    gsap.set("#video-frame", {
        clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
        borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 0 0",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "#video-frame",
            start: "center center",
            end: "bottom center",
            scrub: true,
        },
    });
};
