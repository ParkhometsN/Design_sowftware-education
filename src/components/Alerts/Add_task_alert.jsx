import ClosedButton from "../ui/closedButton";
import {useState} from "react";
import { Input } from 'antd';
const { TextArea } = Input;
import { Button, Dropdown, Space} from 'antd';

export default function AddTaskAlert({closedAddtask}){
    const [value, setValue] = useState('');
    // const items = [
    //     {
    //         key: 'choosestuff_1',
    //         label: (
    //         <div className="object_drop_down">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    //             <path d="M12.5 13.125V11.875C12.5 11.212 12.2366 10.5761 11.7678 10.1072C11.2989 9.63839 10.663 9.375 10 9.375H5C4.33696 9.375 3.70107 9.63839 3.23223 10.1072C2.76339 10.5761 2.5 11.212 2.5 11.875V13.125M10 4.375C10 5.75571 8.88071 6.875 7.5 6.875C6.11929 6.875 5 5.75571 5 4.375C5 2.99429 6.11929 1.875 7.5 1.875C8.88071 1.875 10 2.99429 10 4.375Z" stroke="#0051FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    //             </svg>
    //             <p>Иван Иванушка</p>
    //         </div>
            
    //         ),
    //     },
    //     {
    //         key: 'choosestuff_2',
    //         label: (
    //         <div className="object_drop_down">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    //             <path d="M12.5 13.125V11.875C12.5 11.212 12.2366 10.5761 11.7678 10.1072C11.2989 9.63839 10.663 9.375 10 9.375H5C4.33696 9.375 3.70107 9.63839 3.23223 10.1072C2.76339 10.5761 2.5 11.212 2.5 11.875V13.125M10 4.375C10 5.75571 8.88071 6.875 7.5 6.875C6.11929 6.875 5 5.75571 5 4.375C5 2.99429 6.11929 1.875 7.5 1.875C8.88071 1.875 10 2.99429 10 4.375Z" stroke="#0051FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    //             </svg>
    //             <p>Иван Иванушка</p>
    //         </div>
    //         ),
    //     },
    //     {
    //         key: 'choosestuff_3',
    //         label: (
    //         <div className="object_drop_down">
    //             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    //             <path d="M12.5 13.125V11.875C12.5 11.212 12.2366 10.5761 11.7678 10.1072C11.2989 9.63839 10.663 9.375 10 9.375H5C4.33696 9.375 3.70107 9.63839 3.23223 10.1072C2.76339 10.5761 2.5 11.212 2.5 11.875V13.125M10 4.375C10 5.75571 8.88071 6.875 7.5 6.875C6.11929 6.875 5 5.75571 5 4.375C5 2.99429 6.11929 1.875 7.5 1.875C8.88071 1.875 10 2.99429 10 4.375Z" stroke="#0051FF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
    //             </svg>
    //             <p>Иван Иванушка</p>
    //         </div>
    //         ),
    //     },
    // ];
    // const projectsss = [
    //     {
    //         key: 'chooseproject_1',
    //         label: (
    //             <div className="object_drop_down">
    //                 <p>Сделать wireframe</p>
    //             </div>

    //         ),
    //     },
    //     {
    //         key: 'chooseproject_2',
    //         label: (
    //             <div className="object_drop_down">
    //                 <p>Сделать wireframe</p>
    //             </div>
    //         ),
    //     },
    //     {
    //         key: 'chooseproject_3',
    //         label: (
    //             <div className="object_drop_down">
    //                 <p>Сделать wireframe</p>
    //             </div>
    //         ),
    //     },
    // ];
    const items = [
        {
           key: 'choosestuff_1',
           label: 'иван'
       },
       {
           key: 'choosestuff_2',
           label: 'иван'
       },
       {
           key: 'choosestuff_3',
           label: 'иван'
       },
       {
           key: 'choosestuff_4',
           label: 'иван'
       },
       {
           key: 'choosestuff_5',
           label: 'иван'
       }
    ]
        const project_button = [
        {
           key: 'choos_1',
           label: 'иван'
       },
       {
           key: 'choos_2',
           label: 'иван'
       },
       {
           key: 'choos_3',
           label: 'иван'
       },
       {
           key: 'choos_4',
           label: 'иван'
       },
       {
           key: 'choos_5',
           label: 'иван'
       }
    ]
    return(
        <>
        <div className="addtask_container">
            <div className="Addtaskalert">
                <div className="title_closed">
                    <p>Добавить задачу</p>
                    <button onClick={closedAddtask}> <ClosedButton/></button>
                </div>
                <div className="backgroundtask_white">
                    <div className="brothers">
                        <input className="inputtitileoftask" type="text" placeholder="Название задачи"/>
                        <div className="linetitle"></div>
                    </div>
                    <div className="inputs_">
                        <TextArea
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Описание"
                            autoSize={{ minRows: 6, maxRows: 5 }}
                        />
                        <Button className="button_downloadddddd">Файл 
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M7.74985 10.7493C7.74985 10.9483 7.82886 11.139 7.96952 11.2797C8.11017 11.4203 8.30093 11.4993 8.49985 11.4993C8.69876 11.4993 8.88952 11.4203 9.03018 11.2797C9.17083 11.139 9.24985 10.9483 9.24985 10.7493V5.05934L11.4698 7.27934C11.5385 7.35303 11.6213 7.41213 11.7133 7.45312C11.8053 7.49411 11.9046 7.51615 12.0053 7.51793C12.106 7.51971 12.2061 7.50118 12.2994 7.46346C12.3928 7.42574 12.4777 7.3696 12.5489 7.29838C12.6201 7.22716 12.6762 7.14233 12.714 7.04894C12.7517 6.95555 12.7702 6.85552 12.7684 6.75482C12.7667 6.65411 12.7446 6.5548 12.7036 6.4628C12.6626 6.3708 12.6035 6.288 12.5298 6.21934L9.02985 2.71934C8.88922 2.57889 8.6986 2.5 8.49985 2.5C8.3011 2.5 8.11047 2.57889 7.96985 2.71934L4.46985 6.21934C4.33737 6.36151 4.26524 6.54956 4.26867 6.74386C4.2721 6.93816 4.35081 7.12355 4.48822 7.26096C4.62564 7.39838 4.81102 7.47709 5.00532 7.48052C5.19963 7.48394 5.38767 7.41182 5.52985 7.27934L7.74985 5.05934V10.7493Z" fill="#0051FF"/>
                                    <path d="M4 10.25C4 10.0511 3.92098 9.86032 3.78033 9.71967C3.63968 9.57902 3.44891 9.5 3.25 9.5C3.05109 9.5 2.86032 9.57902 2.71967 9.71967C2.57902 9.86032 2.5 10.0511 2.5 10.25V11.75C2.5 12.4793 2.78973 13.1788 3.30546 13.6945C3.82118 14.2103 4.52065 14.5 5.25 14.5H11.75C12.4793 14.5 13.1788 14.2103 13.6945 13.6945C14.2103 13.1788 14.5 12.4793 14.5 11.75V10.25C14.5 10.0511 14.421 9.86032 14.2803 9.71967C14.1397 9.57902 13.9489 9.5 13.75 9.5C13.5511 9.5 13.3603 9.57902 13.2197 9.71967C13.079 9.86032 13 10.0511 13 10.25V11.75C13 12.44 12.44 13 11.75 13H5.25C4.56 13 4 12.44 4 11.75V10.25Z" fill="#0051FF"/>
                                </svg>
                            </span>
                        </Button>
                        <div className="brothers_dropdown flex justify-between">
                            <Dropdown menu={{ items }} placement="bottomLeft">
                                <Button className="dropdownbuttonchoose">Выбрать сотрудника <svg className="svg_size" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.775151 0.774947C0.950933 0.599384 1.18921 0.500773 1.43765 0.500773C1.68609 0.500773 1.92437 0.599384 2.10015 0.774947L5.50015 4.17495L8.90015 0.774947C8.98598 0.682839 9.08948 0.608961 9.20448 0.557721C9.31948 0.506481 9.44362 0.478929 9.5695 0.476708C9.69538 0.474487 9.82041 0.497643 9.93715 0.544794C10.0539 0.591945 10.1599 0.662126 10.2489 0.75115C10.338 0.840173 10.4082 0.946215 10.4553 1.06295C10.5025 1.17969 10.5256 1.30472 10.5234 1.4306C10.5212 1.55648 10.4936 1.68062 10.4424 1.79562C10.3911 1.91062 10.3173 2.01412 10.2252 2.09995L6.16265 6.16245C5.98687 6.33801 5.74859 6.43662 5.50015 6.43662C5.25171 6.43662 5.01343 6.33801 4.83765 6.16245L0.775151 2.09995C0.599588 1.92417 0.500977 1.68589 0.500977 1.43745C0.500977 1.18901 0.599588 0.950729 0.775151 0.774947Z" fill="#0051FF"/>
                                </svg></Button>
                            </Dropdown>
                            <Dropdown menu={{ project_button }} placement="bottomRight">
                                <Button className="dropdownbuttonchoose">Выбрать проект <svg className="svg_size" xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.775151 0.774947C0.950933 0.599384 1.18921 0.500773 1.43765 0.500773C1.68609 0.500773 1.92437 0.599384 2.10015 0.774947L5.50015 4.17495L8.90015 0.774947C8.98598 0.682839 9.08948 0.608961 9.20448 0.557721C9.31948 0.506481 9.44362 0.478929 9.5695 0.476708C9.69538 0.474487 9.82041 0.497643 9.93715 0.544794C10.0539 0.591945 10.1599 0.662126 10.2489 0.75115C10.338 0.840173 10.4082 0.946215 10.4553 1.06295C10.5025 1.17969 10.5256 1.30472 10.5234 1.4306C10.5212 1.55648 10.4936 1.68062 10.4424 1.79562C10.3911 1.91062 10.3173 2.01412 10.2252 2.09995L6.16265 6.16245C5.98687 6.33801 5.74859 6.43662 5.50015 6.43662C5.25171 6.43662 5.01343 6.33801 4.83765 6.16245L0.775151 2.09995C0.599588 1.92417 0.500977 1.68589 0.500977 1.43745C0.500977 1.18901 0.599588 0.950729 0.775151 0.774947Z" fill="#0051FF"/>
                                </svg></Button>
                            </Dropdown>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        </>
    )
}