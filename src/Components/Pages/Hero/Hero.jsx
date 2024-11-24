import { useRef, useState, useEffect } from "react";
import HeroText from "./HeroText";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const nextVideoRef = useRef(null);


    const videoList = [
        "/src/assets/videos/hero-1.mp4",
        "/src/assets/videos/hero-2.mp4",
        "/src/assets/videos/hero-3.mp4",
        "/src/assets/videos/hero-4.mp4",
    ];

    const upCommingVideo = (currentIndex % videoList.length) + 1;

    const handleMiniVideoClip = () => {
        setCurrentIndex(upCommingVideo)
    };

    const handleVideoLoaded = () => {
        setLoadedVideos((prev) => prev + 1);
        if (loadedVideos + 1 === videoList.length) {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        console.log("Updated Index:", currentIndex);
    }, [currentIndex]);

    return (
        <div className="relative h-screen w-screen overflow-x-hidden bg-blue-50">
            <div
                id="video-frame"
                className="relative z-10 h-screen w-screen overflow-hidden bg-blue-75 rounded-lg"
            >
                <div className="absolute-center mask-clip-path z-50 cursor-pointer overflow-hidden rounded-lg  text-center">
                    <div onClick={handleMiniVideoClip} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                        <video
                            ref={nextVideoRef}
                            src={videoList[upCommingVideo]}
                            loop
                            muted
                            id="current-video"
                            className="size-64 origin-center scale-150 object-cover object-center"
                            onCanPlay={handleVideoLoaded}
                            aria-label="Hero video"
                        />
                    </div>
                </div>

                <video
                    ref={nextVideoRef}
                    src={videoList[currentIndex]}
                    loop
                    muted
                    id="next-video"
                    className="absolute-center invisible absolute z-20 size-64  object-cover object-center"
                    onLoadedData={handleVideoLoaded} />

                <video
                    src={videoList[currentIndex === videoList.length - 1 ? 0 : currentIndex]}
                    loop
                    autoPlay
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center video-fullscreen"
                />

            </div>


            <HeroText />

            <h1 className="special-font hero-heading absolute bottom-5 right-5  text-black">G<b>a</b>ming</h1>

        </div>
    );
};

export default Hero;
