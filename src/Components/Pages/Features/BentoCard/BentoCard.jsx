
const BentoCard = ({ src, title, description, isCommingSoon }) => {
    return (
        <div className="relative w-full ">

            <video src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 w-full object-cover"
            ></video>

            {title}
        </div>
    )
}

export default BentoCard