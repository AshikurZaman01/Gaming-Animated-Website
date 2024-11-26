import Button from "../../../Utils/Button"

const StoreTextButton = () => {
    return (
        <>
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
        </>
    )
}

export default StoreTextButton