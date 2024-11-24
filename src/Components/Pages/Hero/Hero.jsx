import { useRef, useState, useEffect } from "react";
import HeroText from "./HeroText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasClicked, setHasClicked] = useState(false);
    const [loadedVideos, setLoadedVideos] = useState(0);

    const videoRef = useRef(null);
    const nextVideoRef = useRef(null);

    const videoList = [
        "/src/assets/videos/hero-1.mp4",
        "/src/assets/videos/hero-2.mp4",
        "/src/assets/videos/hero-3.mp4",
        "/src/assets/videos/hero-4.mp4",
    ];

    const upcomingVideoIndex = (currentIndex + 1) % videoList.length;

    const handleMiniVideoClip = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    };

    const handleVideoLoaded = () => {
        setLoadedVideos((prev) => prev + 1);
        if (loadedVideos + 1 === videoList.length) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        // GSAP animations for video and text

        // Polygon clip path animation for video container
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
        });

        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });

        // Black text clip-path animation
        gsap.set(".black-text", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Initially hidden
        });

        gsap.to(".black-text", {
            clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)", // Reveal the text as polygon animates
            scrollTrigger: {
                trigger: "#video-frame",
                start: "top top",
                end: "bottom center",
                scrub: true,
            },
        });

    }, [loadedVideos]); // Dependency to ensure the loadedVideos state updates

    return (
        <div className="relative h-screen w-screen overflow-x-hidden bg-blue-50">
            <div
                id="video-frame"
                className="relative z-10 h-screen w-screen overflow-hidden bg-blue-75 rounded-lg"
            >
                {/* Next video preview */}
                <div
                    className="absolute-center mask-clip-path z-50 cursor-pointer overflow-hidden rounded-lg text-center"
                    onClick={handleMiniVideoClip}
                >
                    <video
                        ref={nextVideoRef}
                        src={videoList[upcomingVideoIndex]}
                        loop
                        muted
                        onLoadedData={handleVideoLoaded}
                        className="w-72 origin-center scale-150 object-cover object-center opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                        aria-label="Hero video preview"
                    />
                </div>

                {/* Main video */}
                <video
                    ref={videoRef}
                    src={videoList[currentIndex]}
                    loop
                    autoPlay
                    muted
                    onLoadedData={handleVideoLoaded}
                    className="absolute left-0 top-0 w-full object-cover object-center video-fullscreen"
                />
            </div>

            {/* Hero text */}
            <HeroText />

            {/* Black text (initially hidden) */}
            <h1 className="special-font hero-heading absolute inline-block bottom-5 right-5 z-30 black-text text-black">
                G<b>a</b>ming
            </h1>
        </div>
    );
};

export default Hero;
