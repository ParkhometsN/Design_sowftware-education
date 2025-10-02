import { Button } from 'antd';

function MainButton({ className,textbutton}) {
  return (
    <Button
    type="primary"
    className={className}
    style={{
      fontSize: '19px',
      height: '45px',
      borderRadius: '0.5rem',
    }}
    >
    {textbutton}
    </Button>
  ); 
}

export default MainButton;