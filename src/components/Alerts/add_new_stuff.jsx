import ClosedButton from "../ui/closedButton";
import { Input } from 'antd';
import * as React from "react"
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import ButtonDefault from "../ui/button2";
const handleButtonClick = e => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const realtime = new Date();
const onlyDate = realtime.toLocaleDateString();
const handleMenuClick = e => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'Графический дизанер',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Web-дизайнер',
    key: '2',
    icon: <UserOutlined />,
  },
    {
    label: 'UX/UI дизайнер',
    key: '3',
    icon: <UserOutlined />,
  },
//   {
//     label: '3rd menu item',
//     key: '3',
//     icon: <UserOutlined />,
//     danger: true,
//   },
//   {
//     label: '4rd menu item',
//     key: '4',
//     icon: <UserOutlined />,
//     danger: true,
//     disabled: true,
//   },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function AddNewStuff({closedAddtask}){
    return(
        <>
        <div className="addStuff_container">
            <div className="AddStuffalert">
                <div className="title_closed_stuff">
                    <p>Добавить сотрудника</p>
                    <button onClick={closedAddtask}> <ClosedButton/></button>
                </div>
                <div className="change_container background_shadowdd">
                    <Input placeholder="ФИО сотрудника" className="newinputtt"/>
                    <div className="contacts">
                        <Input type="email" placeholder="email" className="newinput"/>
                        <Input type="phone" placeholder="+7" className="newinput"/>
                    </div>
                    <Dropdown menu={menuProps}>
                        <Button className="buttondropdown_custom">
                            <Space>
                            Выбор должности
                            <DownOutlined onClick={handleButtonClick} />
                            </Space>
                        </Button>
                    </Dropdown>
                    <div className="desckjk">
                        <p>Вход для сотрудника осуществляется только через рабочую почту</p>
                        
                    </div>
                    <div className="time_and_button">
                        <p>{onlyDate}</p>
                        <Button type="primary">сохранить</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}