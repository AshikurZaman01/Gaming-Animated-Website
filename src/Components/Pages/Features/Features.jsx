import FTitle from "./FTitle";
import Bento from "./BentoCard/Bento";
import Zigma from "./zigma/zigma";


const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <FTitle />
                <Bento />
                <Zigma />
            </div>
        </section>
    );
};



export default Features;
