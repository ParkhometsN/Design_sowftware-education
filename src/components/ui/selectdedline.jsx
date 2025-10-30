import { SelectTime } from "./SelectTime";
import { Button} from 'antd';

export default function Selectdeadline (){
    return (
        <>
        <div className="container_selectdeadline">
            <Button className="customselecttimedd" type="primary">сегодня</Button>
            <div className="selectjfuwefi">
                <SelectTime/>
                <span className="linesecltf"></span>
                <SelectTime/>
            </div>
        </div>
        </>
    )
}