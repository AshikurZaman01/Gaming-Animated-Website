import BentoCard from "../BentoCard/BentoCard"
import video2 from "../../../../assets/videos/feature-2.mp4"
import video3 from "../../../../assets/videos/feature-3.mp4"
import video4 from "../../../../assets/videos/feature-4.mp4"

const Zigma = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-7 ">

            {/* First BentoCard Section */}
            <div className="h-[50vh] md:h-full">
                <div className="bento-tilt_1 h-full row-span-1 sm:col-span-1 sm:row-span-2">
                    <BentoCard
                        src={video2}
                        title={<> zig<b>m</b>a</>}
                        description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                        isCommingSoon />
                </div>
            </div>

            {/* Second BentoCard Section */}
            <div className="space-y-7">

                {/* First Card */}
                <div className="border-hsla relative mb-7 h-[65vh] w-full overflow-hidden rounded-md">
                    <BentoCard
                        src={video3}
                        title={<> n<b>e</b>xus</>}
                        description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        isCommingSoon />
                </div>

                {/* Second Card */}
                <div className="border-hsla relative mb-7 h-[65vh] w-full overflow-hidden rounded-md">
                    <BentoCard
                        src={video4}
                        title={<> az<b>u</b>l</>}
                        description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                        isCommingSoon />
                </div>
            </div>

        </div>
    )
}

export default Zigma
