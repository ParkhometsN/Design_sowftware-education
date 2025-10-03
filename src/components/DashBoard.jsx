
import NavButton from "./ui/ButtonIcon";
import logoutIcon from "./icons/icon_log_out.svg";
import NavButtonWithoutIcon from "./ui/navButton";
import Calendar01 from "./calendar-01";
import WhoisInApp from "./ui/whois_in_app";

function DashBoard ({onLogout}) {
    return( 
        <>  
            <div className="navigationbar_content">
                <div className="upcontentnavigation">
                    <div className="pb-[40px]">
                        <WhoisInApp
                        NameUser='Имя Фамилия'
                        PositionUser='Руководитель '
                        />
                    </div>
                    <Calendar01/> 
                    <div className="navigationbuttons">
                        <NavButtonWithoutIcon
                        textbutton='Обзор'
                        className='NavButton activestate_navigaton'
                        />
                        <NavButtonWithoutIcon
                        textbutton='Сотрудники'
                        className='NavButton'
                        />
                        <NavButtonWithoutIcon
                        className='NavButton'
                        textbutton='Архив'
                        />
                    </div>
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