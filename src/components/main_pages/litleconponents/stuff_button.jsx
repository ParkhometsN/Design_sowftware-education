export default function StuffButton({name, Job, taskscount, timegetjob, onClick, isActive}){
    return(
        <div 
            onClick={onClick} 
            className={`grid_oftitles_for_stuff_get background_shadowdd ${isActive ? 'active' : ''}`}
        >
            <div className="jeft_tipewef">
                <p className="namestuffff">{name}</p>
                <p>{Job}</p>
                <p className="taskff">{taskscount}</p>
            </div>
            <p className="wef">{timegetjob}</p>
        </div>
    )
}