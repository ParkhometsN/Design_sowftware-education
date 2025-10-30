"use client"

import { useState } from 'react';
import { DropdownMenuRadioGroupDemo } from "../ui/drmenu";
import MainInput from "../ui/input";
import { Row, Col} from 'antd';
import InProcess from "./litleconponents/progress/inprocess";
import Archived from "./litleconponents/progress/archived";
import Copmleted from "./litleconponents/progress/completed";
import ProjectButton from "./litleconponents/project_button";

export default function Archive(){
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('recent'); 
    
    const Data_Project_ = [
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '2.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '1.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
            
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '3.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '19.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '19.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '19.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '10.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        },
        {
            TitleOFTasks:'Сделать wireframe',
            DescriptionTask: 'Создать современный, удобный и визуально привлекательный дизайн для интернет-магазина, обеспечивающий комфортный пользовательский опыт, высокую конверсию...',
            TimeOFTask: '19.09.2025',
            activepin:'completed',
            orederhuman: "Виктор Игорович"
        }
    ];


    let readyproject = Data_Project_.filter(project => 
        project.activepin === 'completed' && 
        (
            project.TitleOFTasks.toLowerCase().includes(search.toLowerCase()) ||
            project.DescriptionTask.toLowerCase().includes(search.toLowerCase()) ||
            project.TimeOFTask.includes(search) ||
            project.orederhuman.toLowerCase().includes(search.toLowerCase())
        )
    );

    // Сортируем по времени
    readyproject = readyproject.sort((a, b) => {
        const dateA = new Date(a.TimeOFTask.split('.').reverse().join('-'));
        const dateB = new Date(b.TimeOFTask.split('.').reverse().join('-'));
        
        switch(sortBy) {
            case 'recent':
                return dateB - dateA; // Последние (новые сверху)
            case 'oldest':
                return dateA - dateB; // Недавние (старые сверху)
            case 'past':
                // Для прошлых можно добавить свою логику
                return dateB - dateA;
            default:
                return dateB - dateA;
        }
    });

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Ищем:', search);
        }
    };

    // Функция для обработки сортировки из DropdownMenu
    const handleSortChange = (value) => {
        setSortBy(value);
    };

    function countproject() {
        const countProjectData = readyproject.length;
        if (countProjectData >= 0 && countProjectData <= 1 ){
            return countProjectData + ' проект'
        } else if(countProjectData >= 2 && countProjectData <= 4){
            return countProjectData + ' проекта'
        }else{
            return countProjectData + ' проектов'
        }
    }
    
    function ChekActive(taskactivepin){
        if (taskactivepin === "active"){
            return <InProcess/>;
        } else if(taskactivepin === "archivedd"){
            return <Archived/>
        }else if(taskactivepin === "completed"){
            return <Copmleted/>
        }
    }  

    return(
        <>
        <div className="container_content_of_page">
            <div className="title_archive">
                <p className="titlepage">Архив</p>
                <p className='ccountproject'> {countproject()}</p>
            </div>
            <div className="input_search">
                <div className="filter flex gap-[2px]">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M10 22.5V6.25M10 22.5C10.663 22.5 11.2989 22.7634 11.7678 23.2322C12.2366 23.7011 12.5 24.337 12.5 25C12.5 25.663 12.2366 26.2989 11.7678 26.7678C11.2989 27.2366 10.663 27.5 10 27.5M10 22.5C9.33696 22.5 8.70107 22.7634 8.23223 23.2322C7.76339 23.7011 7.5 24.337 7.5 25C7.5 25.663 7.76339 26.2989 8.23223 26.7678C8.70107 27.2366 9.33696 27.5 10 27.5M10 27.5V33.75M30 22.5V6.25M30 22.5C30.663 22.5 31.2989 22.7634 31.7678 23.2322C32.2366 23.7011 32.5 24.337 32.5 25C32.5 25.663 32.2366 26.2989 31.7678 26.7678C31.2989 27.2366 30.663 27.5 30 27.5M30 22.5C29.337 22.5 28.7011 22.7634 28.2322 23.2322C27.7634 23.7011 27.5 24.337 27.5 25C27.5 25.663 27.7634 26.2989 28.2322 26.7678C28.7011 27.2366 29.337 27.5 30 27.5M30 27.5V33.75M20 12.5V6.25M20 12.5C20.663 12.5 21.2989 12.7634 21.7678 13.2322C22.2366 13.7011 22.5 14.337 22.5 15C22.5 15.663 22.2366 16.2989 21.7678 16.7678C21.2989 17.2366 20.663 17.5 20 17.5M20 12.5C19.337 12.5 18.7011 12.7634 18.2322 13.2322C17.7634 13.7011 17.5 14.337 17.5 15C17.5 15.663 17.7634 16.2989 18.2322 16.7678C18.7011 17.2366 19.337 17.5 20 17.5M20 17.5V33.75" stroke="#0051FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <DropdownMenuRadioGroupDemo onSortChange={handleSortChange} />
                </div>
                <MainInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Поиск проекта' 
                    newinput='newinput' 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_84_655)">
                            <path d="M14.3533 13.6467L11.9133 11.2067C12.8306 10.1246 13.3339 8.75191 13.3333 7.33333C13.3333 4.02184 10.6448 1.33333 7.33333 1.33333C4.02184 1.33333 1.33333 4.02184 1.33333 7.33333C1.33333 10.6448 4.02184 13.3333 7.33333 13.3333C8.81 13.3333 10.16 12.7973 11.2053 11.9133L13.6453 14.3533C13.7387 14.4476 13.8659 14.5007 13.9987 14.5007C14.1314 14.5007 14.2586 14.4476 14.352 14.3533C14.4463 14.26 14.4995 14.1329 14.4997 14.0003C14.5 13.8676 14.4473 13.7403 14.3533 13.6467ZM2.33333 7.33333C2.33333 4.57667 4.57667 2.33333 7.33333 2.33333C10.09 2.33333 12.3333 4.57667 12.3333 7.33333C12.3333 10.09 10.09 12.3333 7.33333 12.3333C4.57667 12.3333 2.33333 10.09 2.33333 7.33333Z" fill="#0051FF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_84_655">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>}
                />
            </div>
            <div className="data_base_of_priject_ready">
                <Row gutter={[16, 16]}>
                {readyproject.map((task,index) => (
                    <Col key={index} span={8}>
                        <ProjectButton
                            newmm={'newmm'}
                            key={index}
                            TitleProject={task.TitleOFTasks}
                            DescriptionProject={task.DescriptionTask}
                            TimeOFproject={task.TimeOFTask}
                            orederhuman={task.orederhuman}
                            activepin={ChekActive(task.activepin)}
                        />
                    </Col>
                    ))}
                </Row>
            </div>
        </div>
        </>
    )
}