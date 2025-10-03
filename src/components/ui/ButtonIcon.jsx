function NavButton({textbutton,onClick,url}) {
    return(
        <>
        <button
        className='NavButton qoperignri'
        onClick={onClick}
        >
        {url}
        <p>{textbutton}</p>

        </button>
        </>
    )
}

export default NavButton;