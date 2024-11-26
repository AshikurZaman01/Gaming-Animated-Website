import Button from "../../Utils/Button"
import StoreTextButton from "./StoreText&Button/StoreText&Button"
import StoryHeader from "./StoryHeader/StoryHeader"
import StoryImage from "./StoryImage/StoryImage"

const Story = () => {
    return (
        <section id="story" className="min-h-screen bg-black text-blue-50">
            <div className="flex w-full flex-col items-center py-10 pb-24 px-5 md:px-10">
                <StoryHeader />

                <StoryImage />

                <StoreTextButton />

            </div>
        </section>
    )
}

export default Story;
