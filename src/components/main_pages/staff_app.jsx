import AddNewStuff from "../Alerts/add_new_stuff";
import AreYoushore from "../Alerts/areyoushore";
import ChangeInformationStuff from "../Alerts/change_informationstuff";
import SuccessAlertGreen from "../Alerts/SuccessALertGreen";
import ButtonDefault from "../ui/button2";
import ButtonDelete from "../ui/button_delete";
import StuffButton from "./litleconponents/stuff_button";
import {useState} from "react";


export default function Staff(){
        const [activeIndex, setActiveIndex] = useState(null);
        const [activeAlertStuff,setactiveAlertStuff] = useState(false);
        const [activebutton,setactivebutton] = useState(true);
        const [activebuttondelete,setactivebuttondelete] = useState(false);
        const [activeAreYouShore, setactiveAreYouShore] = useState(false);
        const [activechangeInformationstuff, setactivechangeInformationstuff] = useState(false);
        const [areyouseredeletestuff,setareyouseredeletestuff] = useState(false)
        const [showsuccessalert,setshowsuccessalert] = useState(false)

    const checkclick = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
            if (activeIndex === null){
                setactivebutton(false)
                setactivebuttondelete(true)
            }else{
                setactivebutton(true)
                setactivebuttondelete(false)
            }
    }
    const [data_staff_, setDataStaff] = useState([
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
        
    ])
    const deleteStaff = () => {
        if (activeIndex === null) return;
        
        // Создаем новый массив без удаленного сотрудника
        const newStaff = data_staff_.filter((_, index) => index !== activeIndex);
        setDataStaff(newStaff);
        
        // Сбрасываем выбранный индекс
        setActiveIndex(null);
        setactivebutton(true);
        setactivebuttondelete(false);
    }
    const addStaff = (newEmployee) => {
        // Создаем объект нового сотрудника
        const employeeWithId = {
            id: Date.now(), // Простой способ получить уникальный ID
            ...newEmployee  // Разворачиваем данные из формы
        };
        
        // Добавляем в массив
        const updatedStaff = [...data_staff_, employeeWithId];
        setDataStaff(updatedStaff);
    }
    const succesdeletestuff = () => {
            deleteStaff();
            setshowsuccessalert(true)
            setareyouseredeletestuff(false)
              setTimeout(() => {
                    setshowsuccessalert(false);
                }, 2000);
    }
    const handleDangerClickalertserq = () => {
            setactiveAreYouShore(false);
            setactiveAlertStuff(false);
    };
    const safealertadd_stuff = () => {
            setactiveAreYouShore(false);
    }
    function countstuff (){
        return data_staff_.length;
    }
    return(
        <>
        <div className="alerts_stuff">
            {showsuccessalert && (
                <SuccessAlertGreen className='positionalerts' TextSuccessAlert='Вы успешно удалили сотрудника'/>
            )}
            {areyouseredeletestuff && (
                <AreYoushore
                    defaultbutton={() => setareyouseredeletestuff(false) }
                    dangerbutton={succesdeletestuff}
                    Defaultbuttontext='нет'
                    dangerbuttontext='да'
                    titleDangerAlert='Удаление сотрудника'
                    descriptiondangeralert='Вы точно хотите удалить сотрудника?'
                />
            )}
            {activechangeInformationstuff && (
                <ChangeInformationStuff
                closedAddtask={() => setactivechangeInformationstuff(false)}
                />
            )}
            {activeAreYouShore &&(
                <AreYoushore
                    dangerbuttontext='да'
                    Defaultbuttontext='продолжить'
                    titleDangerAlert='Отемить создание?'
                    descriptiondangeralert='Вы хотите отменить создание сотрудника?'
                    dangerbutton={() => handleDangerClickalertserq()}
                    defaultbutton =  {() => safealertadd_stuff()}
                />
            )}
            {activeAlertStuff && (
                <AddNewStuff
                    closedAddtask={() => setactiveAlertStuff(false)}
                    onAddEmployee={addStaff} // Передаем функцию добавления
                />
            )}
        </div>
        <div className="container_content_of_page">
            <div className="titile_stuff_page">
                <p className="titlepage">Сотрудники</p>
                <div className="count_stuff">{countstuff()} человек</div>
            </div>
            <div className="line"></div>
            <div className="grid_oftitles_for_stuff">
                <div className="jeft_tipe">
                    <p>Имя</p>
                    <p>Должность</p>
                    <p>Задачи</p>
                </div>
                <p className="wef">Дата приема</p>
            </div>
            <div className="stuff_list">
                {data_staff_.map((t,index) => (
                    <StuffButton
                        onClick={() => checkclick(index)}
                        isActive={activeIndex === index}
                        key={index}
                        name={t.namestuff}
                        Job={t.fobtitle}
                        taskscount={t.taskstuffcount}
                        timegetjob={t.dategetjob}
                    />
                ))}
            </div>
            <div className="buttons_for_stuff">
                <div></div>
                <div className="buttons">
                    {activebutton &&(
                        <ButtonDefault
                        onClick={() => setactiveAlertStuff(true)}
                        textOF_button='Добавить сотрудника'
                        />
                    )}
                    {activebuttondelete && (
                        <div className="get_buttons">
                            <ButtonDefault
                                textOF_button='Редактировать'
                                onClick={() => setactivechangeInformationstuff(true)}
                            />
                            <ButtonDelete
                            onClick={() => setareyouseredeletestuff(true)}
                            textOF_button='Удалить'/>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
        </>
    )
}