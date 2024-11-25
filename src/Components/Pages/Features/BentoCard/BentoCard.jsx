
const BentoCard = ({ src, title, description, isCommingSoon }) => {
    return (
        <div className="relative w-full ">

            <video src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 w-full object-cover"
            ></video>

            <div className="relative z-10 w-full  flex-col justify-between p-5  text-blue-50">
                <div>

                    <h1 className="bento-title special-font ">{title}</h1>

                    {description && (
                        <p className="mt-3 text-xs md:text-base">{description}</p>
                    )}

                </div>
            </div>


        </div>
    )
}

export default BentoCard