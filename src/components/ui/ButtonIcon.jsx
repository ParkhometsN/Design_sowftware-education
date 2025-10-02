function NavButton({textbutton,onClick,url}) {
    return(
        <>
        <button
        className='NavButton'
        onClick={onClick}
        >
        {url}
        {textbutton}
        </button>
        </>
    )
}

export default NavButton;