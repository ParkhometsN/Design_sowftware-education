
import NavButton from "./ui/ButtonIcon";
import logoutIcon from "./icons/icon_log_out.svg";
import NavButtonWithoutIcon from "./ui/navButton";

function DashBoard ({onLogout}) {
    return(
        <>  
            <NavButtonWithoutIcon
            textbutton='Обзор'
            />
            <NavButtonWithoutIcon
            textbutton='Сотрудники'
            />
            <NavButtonWithoutIcon
            textbutton='Архив'
            />
            <NavButton
                textbutton='выход'
                onClick={onLogout}
                url={<img src={logoutIcon} alt="logout" />}
            />
        </>
    );
}

export default DashBoard;