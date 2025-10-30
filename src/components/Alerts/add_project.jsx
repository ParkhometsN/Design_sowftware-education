import ClosedButton from "../ui/closedButton";
import { Input } from 'antd';
const { TextArea } = Input;
import { Button,Space} from 'antd';
import Selectdeadline from "../ui/selectdedline";
import React, { useState } from "react";
import StepsOfProject from "../ui/getstepsproject";
import Choosestuffadporject from "../ui/cardofstuf";
import Addtaskprojectadlert from "../ui/task_addproject";
import Button_Dachbptar from "../ui/main-button";
import AddTaskAlert from "./Add_task_alert";

export default function AddProjectAlert({closedAddproject}){
    const [getalertaddtask,setgetalertaddtask] = useState(false)
    const [statechoosefiles,setstatechoosefiles] = useState(false)
    const [Addedfile,setAddedfile] = useState(['Файлы не выбранны'])
    const currentDate = new Date()
    const openFileDialog = () => {
    document.getElementById('fileInput').click();
    };
    
    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        if (files.length > 0) {
            const newFileNames = files.map(file => file.name);
            if (!statechoosefiles){
                setAddedfile(newFileNames);
                setstatechoosefiles(true);
            }else{
                setAddedfile(prevNames => [...prevNames, ...newFileNames]);
            }
        }
    };
    const [StepsProject, setStepsProject] = useState([
        { title: 'Сделать Wireframes',  current: "1" },
        { title: 'Сделать Wireframes',  current: "1" },
        { title: 'Сделать Wireframes',  current: "1" }
    ]);
    const [inputstep, setInputstep] = useState('');

    const addstepsbutton = () => {
        if (inputstep.trim()) {
            setStepsProject([...StepsProject, { title: inputstep }]);
            setInputstep('');
        }
    }
    const Data_task_= [
        {
            TitleOFTasks:'Разработка интернет магазина MAin-shop',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'active',
            orederhuman: "Виктор Игорович"
            
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'archivedd',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'active',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'active',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: 'Среда 29, 12:00 - 12:30',
            activepin:'active',
            orederhuman: "Виктор Игорович"
        }
    ]
    const data_staff = [
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
        ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
        ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
        ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
        ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
        ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
                ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
                ,
        {
        namestuff: 'Иван Иванушка',
        fobtitle: 'Графический дизайнер',
        taskstuffcount: '13 задач',
        dategetjob: '13.05.2003'
        }
        
    ]
    return(
        <>  {getalertaddtask && (
            <AddTaskAlert
                closedAddtask = {() => setgetalertaddtask(false)}
            />
            )}
            <div className="addtask_container projectadd">
                <div className="Addprojectalert">
                    <div className="title_closed">
                        <p>Добавить проект</p>
                        <button onClick={closedAddproject}> <ClosedButton/></button>
                    </div>
                    <div className="backgroundprojecvt_white background_shadowdd contentsett">
                        <div className="container_ofblockdd">
                            <div className="left_content border">
                                <div className="brothers">
                                    <input className="inputtitileoftask" type="text" placeholder="Название задачи"/>
                                    <div className="linetitle"></div>
                                </div>
                                <TextArea
                                    placeholder="Описание"
                                    autoSize={{ minRows: 4, maxRows: 5 }}
                                />
                                <div className="titleinpit">
                                    <p>Контактная информация</p>
                                    <Input placeholder="ФИО клиента" />
                                    <div className="contactsform">
                                        <Input type="email" placeholder="email" />
                                        <Input type="phone" placeholder="+7" />
                                    </div>
                                </div>
                                <div className="titleinpit">
                                    <p>Файлы проекта</p>
                                    <input 
                                        type="file" 
                                        id="fileInput" 
                                        style={{display: 'none'}}
                                        onChange={handleFileSelect}
                                    />
                                    <div className="filesdownload">
                                    
                                        <Button onClick={openFileDialog} className="button_downloadddddd">Загрузить файлы 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <path d="M7.74985 10.7493C7.74985 10.9483 7.82886 11.139 7.96952 11.2797C7.96952 11.2797 7.96952 11.2797 7.96952 11.2797C8.11017 11.4203 8.30093 11.4993 8.49985 11.4993C8.69876 11.4993 8.88952 11.4203 9.03018 11.2797C9.03018 11.2797 9.03018 11.2797 9.03018 11.2797C9.17083 11.139 9.24985 10.9483 9.24985 10.7493V5.05934L11.4698 7.27934C11.5385 7.35303 11.6213 7.41213 11.7133 7.45312C11.7133 7.45312 11.7133 7.45312 11.7133 7.45312C11.8053 7.49411 11.9046 7.51615 12.0053 7.51793C12.0053 7.51793 12.0053 7.51793 12.0053 7.51793C12.106 7.51971 12.2061 7.50118 12.2994 7.46346C12.2994 7.46346 12.2994 7.46346 12.2994 7.46346C12.3928 7.42574 12.4777 7.3696 12.5489 7.29838C12.5489 7.29838 12.5489 7.29838 12.5489 7.29838C12.6201 7.22716 12.6762 7.14233 12.714 7.04894C12.714 7.04894 12.714 7.04894 12.714 7.04894C12.7517 6.95555 12.7702 6.85552 12.7684 6.75482C12.7684 6.75482 12.7684 6.75482 12.7684 6.75482C12.7667 6.65411 12.7446 6.5548 12.7036 6.4628C12.7036 6.4628 12.7036 6.4628 12.7036 6.4628C12.6626 6.3708 12.6035 6.288 12.5298 6.21934L9.02985 2.71934C8.88922 2.57889 8.6986 2.5 8.49985 2.5C8.3011 2.5 8.11047 2.57889 7.96985 2.71934L4.46985 6.21934C4.33737 6.36151 4.26524 6.54956 4.26867 6.74386C4.26867 6.74386 4.26867 6.74386 4.26867 6.74386C4.2721 6.93816 4.35081 7.12355 4.48822 7.26096C4.48822 7.26096 4.48822 7.26096 4.48822 7.26096C4.62564 7.39838 4.81102 7.47709 5.00532 7.48052C5.00532 7.48052 5.00532 7.48052 5.00532 7.48052C5.19963 7.48394 5.38767 7.41182 5.52985 7.27934L7.74985 5.05934V10.7493Z" fill="#0051FF"/>
                                                    <path d="M4 10.25C4 10.0511 3.92098 9.86032 3.78033 9.71967C3.78033 9.71967 3.78033 9.71967 3.78033 9.71967C3.63968 9.57902 3.44891 9.5 3.25 9.5C3.05109 9.5 2.86032 9.57902 2.71967 9.71967C2.71967 9.71967 2.71967 9.71967 2.71967 9.71967C2.57902 9.86032 2.5 10.0511 2.5 10.25V11.75C2.5 12.4793 2.78973 13.1788 3.30546 13.6945C3.30546 13.6945 3.30546 13.6945 3.30546 13.6945C3.82118 14.2103 4.52065 14.5 5.25 14.5H11.75C12.4793 14.5 13.1788 14.2103 13.6945 13.6945C13.6945 13.6945 13.6945 13.6945 13.6945 13.6945C14.2103 13.1788 14.5 12.4793 14.5 11.75V10.25C14.5 10.0511 14.421 9.86032 14.2803 9.71967C14.2803 9.71967 14.2803 9.71967 14.2803 9.71967C14.1397 9.57902 13.9489 9.5 13.75 9.5C13.5511 9.5 13.3603 9.57902 13.2197 9.71967C13.2197 9.71967 13.2197 9.71967 13.2197 9.71967C13.079 9.86032 13 10.0511 13 10.25V11.75C13 12.44 12.44 13 11.75 13H5.25C4.56 13 4 12.44 4 11.75V10.25Z" fill="#0051FF"/>
                                                </svg>
                                            </span>
                                        </Button>
                                        <p className="disabled ">{Addedfile}</p>
                                    </div>
                                    <div className="sectime">
                                        <p>Временной интервал</p>
                                        <Selectdeadline/>
                                    </div>
                                    <div className="materialforproject">
                                        <Space.Compact className="qwefqwefqwefqwefq">
                                            <Input  placeholder="Ссылки на материалы" />
                                            <Button type="primary">Добавить</Button>
                                        </Space.Compact>
                                        <p className="disabled">Нет добавленных ссылок</p>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="right_content border">
                                <div className="settingshumantask">
                                    <div className="choosepeople bacgroundaddprojectrit">
                                        <div className="titleofhuman"><p>Сотрудники</p></div>
                                        <div className="containeroflist">
                                            {data_staff.map((staff,index) => (
                                                <Choosestuffadporject
                                                    key={index}
                                                    NameStuffAddProject={staff.namestuff}
                                                    PositionStuffAddProject={staff.fobtitle}
                                                />
                                            ))}
                                            
                                        </div>
                                    </div>
                                    <div className="addtaskproject bacgroundaddprojectrit">
                                        <div className="titleofhuman"><p>Задачи</p></div>
                                        <div className="containeroflist buttoncontainercc">
                                            {Data_task_.map((task,index) => (
                                                <Addtaskprojectadlert
                                                key={index}
                                                titletaskpriject={task.TitleOFTasks}
                                                descriptionaddtaskproject={task.DescriptionTask}
                                                timeaddtaskprojectalert={task.TimeOFTask}
                                                />
                                            ))}
                                        </div>
                                        <Button_Dachbptar
                                               onClick={() => setgetalertaddtask(true)}
                                            textbutton={'Добавить задачу'}
                                            className='add_task_mainButtin addprojectalert'
                                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="27" height="28" viewBox="0 0 27 28" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.0627 4.5498C4.43612 4.5498 3.83521 4.79871 3.39216 5.24177C2.9491 5.68482 2.7002 6.28573 2.7002 6.9123V21.0873C2.7002 22.3914 3.7586 23.4498 5.0627 23.4498H21.9377C22.5643 23.4498 23.1652 23.2009 23.6082 22.7578C24.0513 22.3148 24.3002 21.7139 24.3002 21.0873V9.6123C24.3002 8.98573 24.0513 8.38482 23.6082 7.94177C23.1652 7.49871 22.5643 7.2498 21.9377 7.2498H15.4091C15.3647 7.24988 15.3208 7.24122 15.2798 7.22431C15.2388 7.2074 15.2015 7.18258 15.1701 7.15125L13.2612 5.24235C12.8184 4.79923 12.2178 4.55012 11.5913 4.5498H5.0627ZM13.5002 11.2998C13.7687 11.2998 14.0263 11.4065 14.2161 11.5964C14.406 11.7862 14.5127 12.0438 14.5127 12.3123V14.3373H16.5377C16.8062 14.3373 17.0638 14.444 17.2536 14.6339C17.4435 14.8237 17.5502 15.0813 17.5502 15.3498C17.5502 15.6183 17.4435 15.8759 17.2536 16.0658C17.0638 16.2556 16.8062 16.3623 16.5377 16.3623H14.5127V18.3873C14.5127 18.6558 14.406 18.9134 14.2161 19.1033C14.0263 19.2931 13.7687 19.3998 13.5002 19.3998C13.2317 19.3998 12.9741 19.2931 12.7843 19.1033C12.5944 18.9134 12.4877 18.6558 12.4877 18.3873V16.3623H10.4627C10.1942 16.3623 9.93663 16.2556 9.74675 16.0658C9.55687 15.8759 9.4502 15.6183 9.4502 15.3498C9.4502 15.0813 9.55687 14.8237 9.74675 14.6339C9.93663 14.444 10.1942 14.3373 10.4627 14.3373H12.4877V12.3123C12.4877 12.0438 12.5944 11.7862 12.7843 11.5964C12.9741 11.4065 13.2317 11.2998 13.5002 11.2998Z" fill="white"/>
                                                </svg>}
                                        />
                                    </div>
                                </div>
                                <div className="setstepsss">
                                    <div className="addsteps">
                                        <StepsOfProject
                                        stepsproject={StepsProject}
                                        />
                                    </div>
                                    <div className="enterstep">
                                        <Input 
                                         value={inputstep}
                                         onChange={e => setInputstep(e.target.value)}
                                         placeholder="Добавить шаг" 
                                         />
                                        <Button
                                         onClick={addstepsbutton}
                                         type="primary">Добавить</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="use_form">
                            <p className="ijewf">{currentDate.toLocaleDateString('ru-RU')}</p>
                            <Button type="primary"> сохранить</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}