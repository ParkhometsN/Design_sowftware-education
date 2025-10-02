function NavButtonWithoutIcon({textbutton,onClick}) {
    return(
        <>
        <button
        className='NavButton'
        onClick={onClick}
        >
        {textbutton}
        </button>
        </>
    )
}

export default NavButtonWithoutIcon;