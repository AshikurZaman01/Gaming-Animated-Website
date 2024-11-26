import AnimatedTitle from "../../../Utils/AnimatedTitle"

const StoryHeader = () => {
    return (
        <div>
            <p className="font-general text-center text-sm uppercase md:text-[15px]">
                the multiversal ip world
            </p>

            <div className="relative w-full ">
                <AnimatedTitle
                    sectionId="#story"
                    title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
                    containerClass="mt-20 pointer-events-none mix-blend-difference relative z-10 "
                />
            </div>
        </div>
    )
}

export default StoryHeader