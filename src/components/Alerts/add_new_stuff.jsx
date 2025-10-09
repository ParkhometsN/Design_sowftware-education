import ClosedButton from "../ui/closedButton";

export default function AddNewStuff({closedAddtask}){
    return(
        <>
        <div className="addStuff_container">
            <div className="AddStuffalert">
                <div className="title_closed_stuff">
                    <p>Добавить сотрудника</p>
                    <button onClick={closedAddtask}> <ClosedButton/></button>
                </div>
            </div>
        </div>
        </>
    )
}