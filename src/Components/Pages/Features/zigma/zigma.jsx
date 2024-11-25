import BentoCard from "../BentoCard/BentoCard"
import video2 from "../../../../assets/videos/feature-2.mp4"

const Zigma = () => {
    return (
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                <BentoCard
                    src={video2}
                    title={<> zig<b>m</b>a</>}
                    description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                    isCommingSoon />
            </div>
        </div>
    )
}

export default Zigma