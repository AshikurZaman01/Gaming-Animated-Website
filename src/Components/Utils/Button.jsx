
const Button = ({ id, title, leftIcon, containerClass, rightIcon }) => {
    return (
        <button id={id} className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full  px-7 py-3 text-black`}>
            {leftIcon}

            <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                <div>
                    {title}
                </div>
                {rightIcon}
            </span>
        </button>
    )
}

export default Button