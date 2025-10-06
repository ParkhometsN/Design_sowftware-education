export default function AddTaskAlert({closedAddtask}){
    return(
        <>
            <div className="Addtaskalert">
                <button onClick={closedAddtask}>закрыть</button>
            </div>
        </>
    )
}