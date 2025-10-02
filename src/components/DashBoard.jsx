
import NavButton from "./ui/ButtonIcon";
import logoutIcon from "./icons/icon_log_out.svg";
import NavButtonWithoutIcon from "./ui/navButton";
import Calendar01 from "./calendar-01";

function DashBoard ({onLogout}) {
    return( 
        <>  <div className="navigationbar_content">
                <Calendar01/>
                <div className="navigationbuttons">
                    <NavButtonWithoutIcon
                    textbutton='Обзор'
                    />
                    <NavButtonWithoutIcon
                    textbutton='Сотрудники'
                    />
                    <NavButtonWithoutIcon
                    textbutton='Архив'
                    />
                </div>
                <div className="containetexit">
                    <NavButton
                        textbutton='выход'
                        onClick={onLogout}
                        url={<img src={logoutIcon} alt="logout" />}
                    />
                </div>
            </div>  
        </>
    );
}

export default DashBoard;