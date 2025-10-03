import NavButton from "./ui/ButtonIcon";
import logoutIcon from "./icons/icon_log_out.svg";
import NavButtonWithoutIcon from "./ui/navButton";
import Calendar01 from "./calendar-01";
import WhoisInApp from "./ui/whois_in_app";
import MainActive from "./main_pages/dashboard_active";
import Staff from "./main_pages/staff_app";
import Archive from "./main_pages/archive";
import { useState } from "react";

function DashBoard({ onLogout }) {
    const [VisiblePage, setVisiblePage] = useState('page1');

    const HandlePage = (pagename) => {
        setVisiblePage(pagename)
    }

    return ( 
        <>  
            <div className="main_container flex">
                <div className="navigationbar_content">
                    <div className="upcontentnavigation">
                        <div className="pb-[40px]">
                            <WhoisInApp
                                NameUser='Имя Фамилия'
                                PositionUser='Руководитель'
                            />
                        </div>
                        <Calendar01/> 
                        <div className="navigationbuttons">
                            <NavButtonWithoutIcon
                                textbutton='Обзор'
                                className='NavButton'
                                isActive={VisiblePage === 'page1'}
                                onClick={() => HandlePage('page1')}
                            />
                            <NavButtonWithoutIcon
                                textbutton='Сотрудники'
                                className='NavButton'
                                isActive={VisiblePage === 'page2'}
                                onClick={() => HandlePage('page2')}
                            />
                            <NavButtonWithoutIcon
                                className='NavButton'
                                textbutton='Архив'
                                isActive={VisiblePage === 'page3'}
                                onClick={() => HandlePage('page3')}
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
                <div className="user_active_main p-[2rem]">
                    {VisiblePage === 'page1' && <MainActive className='activestate_navigaton'/>}
                    {VisiblePage === 'page2' && <Staff className='activestate_navigaton'/>}
                    {VisiblePage === 'page3' && <Archive className='activestate_navigaton'/>}
                </div> 
            </div>
        </>
    );
}

export default DashBoard;