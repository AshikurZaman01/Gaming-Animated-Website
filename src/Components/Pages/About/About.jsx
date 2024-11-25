import imageAbout from "../../../assets/img/about.webp";

const About = () => {
    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[20px]">Welcome to Zentry</h2>
                <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
                    <p><b className="font-zentry">D</b>iscover the world's <b className="font-zentry">l</b>argest shared <b className="font-zentry">a</b>dventure</p>
                </div>

                <div className="h-[60vh] w-full" id="clip">
                    <div className="mask-clip-path about-image">
                        <img src={imageAbout} alt="About" />
                    </div>
                </div>

                <div className="about-subtext">
                    <p>The Game of Games begins-your life, now epic MMORPG</p>
                    <p>Zentry unites every player from countless games and platforms.</p>
                </div>
            </div>
        </div>

    )
}

export default About;
