import { Button } from 'antd';



const ButtonForMyApp = ({onClick}) => (
  <div className="App">
    <Button type="primary" onClick={onClick} >Button</Button>
  </div>
);

export default ButtonForMyApp;