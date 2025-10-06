
export default function TaskButtonDahsboard({TitleOFTasks,DescriptionTask,TimeOFTask,activepin}){
    return(
        <>
        <button className="tasktabqwefqwef">
            <div className="wefu">
                <p className="title_task_button">{TitleOFTasks}</p>
            </div>
            <p className="description_tasks">{DescriptionTask}</p>
            <div className="dopinfomatuon">
                <p className="timeOftasks">{TimeOFTask}</p>
                <p className="activepin">{activepin}</p>
            </div>
        </button>
        </>
    )
}