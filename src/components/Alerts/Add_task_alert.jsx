import ClosedButton from "../ui/closedButton";

export default function AddTaskAlert({closedAddtask}){
    return(
        <>
        <div className="addtask_container">
            <div className="Addtaskalert">
                <div className="title_closed">
                    <p>Добавить задачу</p>
                    <button onClick={closedAddtask}> <ClosedButton/></button>
                </div>
            </div>
        </div>
        </>
    )
}