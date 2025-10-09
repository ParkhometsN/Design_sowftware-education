import ClosedButton from "../ui/closedButton";

export default function AddProjectAlert({closedAddproject}){
    return(
        <>  
            <div className="addtask_container">
                <div className="Addprojectalert">
                    <div className="title_closed">
                        <p>Добавить проект</p>
                        <button onClick={closedAddproject}> <ClosedButton/></button>
                    </div>
                </div>
            </div>
        </>
    )
}