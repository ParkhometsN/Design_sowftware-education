import EnterAppDSW from "./components/EnterApp"

function MainButton() {
  return (
    <div className="flex justify-center items-center min-h-screen"> 
      <div className="w-full max-w-[542px] p-4 flex flex-col items-center gap-[30px]"> 
        <EnterAppDSW className='text-3xl'/>
      </div>
    </div>
  )
}

export default MainButton