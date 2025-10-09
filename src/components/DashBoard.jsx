import NavButton from "./ui/ButtonIcon";
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
                        <div className="pb-[1vw]">
                            <WhoisInApp
                                NameUser='Имя Фамилия'
                                PositionUser='Руководитель'
                            />
                        </div>
                        <div className="qkrengljkgnlwerl">
                            <Calendar01/> 
                        </div>
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
                        exitstyle='exitstyle'
                            textbutton='выход'
                            onClick={onLogout}
                            url={<span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M15.75 9V5.25C15.75 4.65326 15.5129 4.08097 15.091 3.65901C14.669 3.23705 14.0967 3 13.5 3H7.5C6.90326 3 6.33097 3.23705 5.90901 3.65901C5.48705 4.08097 5.25 4.65326 5.25 5.25V18.75C5.25 19.3467 5.48705 19.919 5.90901 20.341C6.33097 20.7629 6.90326 21 7.5 21H13.5C14.0967 21 14.669 20.7629 15.091 20.341C15.5129 19.919 15.75 19.3467 15.75 18.75V15M18.75 15L21.75 12M21.75 12L18.75 9M21.75 12H9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </span>}
                        />
                    </div>
                </div> 
                <div className="user_active_main">
                    {VisiblePage === 'page1' && <MainActive className='activestate_navigaton'/>}
                    {VisiblePage === 'page2' && <Staff className='activestate_navigaton'/>}
                    {VisiblePage === 'page3' && <Archive className='activestate_navigaton'/>}
                </div> 
            </div>
        </>
    );
}

export default DashBoard;