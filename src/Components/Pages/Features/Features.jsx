import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import FTitle from "./FTitle";
import BentoCard from "./BentoCard/BentoCard";
import video1 from "../../../assets/videos/feature-1.mp4"



const Features = () => {


    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">

                <FTitle />

                <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">

                    <BentoCard
                        src={video1}
                        title={<>radi<b>n</b>t</>}
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                        isCommingSoon
                    />
                </div>



            </div>
        </section>
    )
}

export default Features