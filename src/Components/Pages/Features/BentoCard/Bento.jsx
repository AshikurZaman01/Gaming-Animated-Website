import BentoCard from './BentoCard'
import video1 from "../../../../assets/videos/feature-1.mp4";

const Bento = () => {
    return (
        <div>
            <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    src={video1}
                    title={<><b>radi</b>n</>}
                    description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    isCommingSoon
                />
            </div>
        </div>
    )
}

export default Bento