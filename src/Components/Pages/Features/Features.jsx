import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import FTitle from "./FTitle";
import Bento from "./BentoCard/Bento";

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <FTitle />

                <Bento></Bento>

              
            </div>
        </section>
    );
};

export default Features;
