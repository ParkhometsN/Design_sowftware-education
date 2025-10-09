import AddNewStuff from "../Alerts/add_new_stuff";
import ButtonDefault from "../ui/button2";
import ButtonDelete from "../ui/button_delete";
import StuffButton from "./litleconponents/stuff_button";
import { useState} from "react";

export default function Staff(){
        const [activeIndex, setActiveIndex] = useState(null);
        const [activeAlertStuff,setactiveAlertStuff] = useState(false);
        const [activebutton,setactivebutton] = useState(true)
        const [activebuttondelete,setactivebuttondelete] = useState(false)

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


    const data_staff_ = [
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
    function countstuff (){
        return data_staff_.length;
    }
    return(
        <>
        <div className="alerts_stuff">
            {activeAlertStuff && (
                <AddNewStuff
                closedAddtask={()=> setactiveAlertStuff(false) }
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
                            />
                            <ButtonDelete
                            textOF_button='Удалить'/>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
        </>
    )
}