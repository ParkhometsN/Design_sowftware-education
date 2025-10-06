
import { Input } from 'antd';


function MainInput({value, onChange, placeholder,icon}){
    return(
        <Input
            prefix={icon}
            type="email"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
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
}

export default MainInput;