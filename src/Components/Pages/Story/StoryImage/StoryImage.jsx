import image from "../../../../assets/img/entrance.webp";
import { useRef } from "react";
import gsap from "gsap";

const StoryImage = () => {
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const resetRotation = () => {
        const element = frameRef.current;
        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <div className="story-img-container relative w-full max-w-full mx-auto">
            <div className="story-img-mask rounded-3xl overflow-hidden">
                <div className="story-img-mask">
                    <img
                        src={image}
                        className="object-cover w-full h-auto"
                        alt="Story Image"
                        ref={frameRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={resetRotation}
                        onMouseUp={resetRotation}
                        onMouseEnter={resetRotation}
                    />
                </div>
            </div>

            {/* For the rounded corner effect */}
            <svg className="invisible absolute size-0" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="flt_tag">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="flt_tag"
                        />
                        <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default StoryImage;
