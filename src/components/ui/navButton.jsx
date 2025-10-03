function NavButtonWithoutIcon({textbutton,onClick,className}) {
    return(
        <>
        <button
        className={className}
        onClick={onClick}
        >
        {textbutton}
        </button>
        </>
    )
}

export default NavButtonWithoutIcon;