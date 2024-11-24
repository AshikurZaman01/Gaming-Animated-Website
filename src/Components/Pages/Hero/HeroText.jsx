import { TiLocationArrow } from "react-icons/ti"
import Button from "../../Utils/Button"

const HeroText = () => {
    return (
        <div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">G<b>a</b>ming</h1>

            <div className="absolute left-0 top-0 z-40 size-full">
                <div className="mt-24 px-5 sm:px-10">
                    <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>

                    <p className="mb-5 max-w-64 font-robertRegular  text-blue-100">Enter the Metagame Layer <br />

                        Unleash the Play Economy
                    </p>

                    <Button id="watch-trailer" title="Watch Trailer" leftIcon={<TiLocationArrow />} containerClass="bg-yellow-300 flex-center gap-1"></Button>

                </div>
            </div>

        </div>
    )
}

export default HeroText