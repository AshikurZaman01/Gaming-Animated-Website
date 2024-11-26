import Button from "../../Utils/Button"
import StoryHeader from "./StoryHeader/StoryHeader"
import StoryImage from "./StoryImage/StoryImage"

const Story = () => {
    return (
        <section id="story" className="min-h-screen bg-black text-blue-50">
            <div className="flex w-full flex-col items-center py-10 pb-24 px-5 md:px-10">
                <StoryHeader />

                <StoryImage />

                {/* Text and Button */}
                <div className="w-full md:mt-10 mt-5">
                    <div className="-mt-16 flex w-full justify-center md:justify-end">
                        <div className="flex h-full w-full max-w-md flex-col items-center md:items-start">
                            <p className="mt-3 text-center font-circular-web text-violet-50 md:text-start text-sm md:text-lg lg:text-xl">
                                Where realms converge, lies Zentry and the boundless pillar.
                                Discover its secrets and shape your fate amidst infinite
                                opportunities.
                            </p>

                            <Button
                                id="realm-btn"
                                title="discover prologue"
                                containerClass="mt-5 bg-blue-50 text-black hover:bg-blue-400"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story;
