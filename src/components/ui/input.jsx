
import { Input } from 'antd';


const MainInput = ({TextInputMain}) => (
<Input
 placeholder={TextInputMain}
    className="custom-input-main-input"
    style={{
        fontSize: '15px',
        padding: '10px 17px',
        borderRadius: '0.5rem',
        border: 'none',
        backgroundColor: 'var(--blueopac)'
    }}
 />
);

export default MainInput;