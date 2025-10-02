import MainButton from "./ui/main_button.jsx";
import MainInput from "./ui/input";

function EnterAppDSW(){
    return(
        <>
        <div className="text-3xl"><p>Вход</p></div>
        <MainInput
        TextInputMain='example@gmail.com'
        />
        <MainButton className='max-w-[542px] w-full '
        textbutton='Вход'
        />
        </>
    )
}

export default EnterAppDSW