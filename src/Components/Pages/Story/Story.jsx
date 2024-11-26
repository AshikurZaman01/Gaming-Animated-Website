import StoryHeader from "./StoryHeader/StoryHeader"
import image from "../../../assets/img/entrance.webp"
import { useRef } from "react";
import gsap from "gsap";


const Story = () => {

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

    const handleMouseLeave = () => {
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


    console.log(image)

    return (
        <section id="story" className="min-h-dvh bg-black text-blue-50">
            <div className="flex w-full flex-col items-center py-10 pb-24">

                <StoryHeader />


                <div className="story-img-container">
                    <div className="story-img-mask rounded-2xl">
                        <div className=""
                        >
                            <img src={image}
                                className="object-contain"
                                alt=""
                                ref={frameRef}
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                onMouseUp={handleMouseLeave}
                                onMouseEnter={handleMouseLeave} />
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Story