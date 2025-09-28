import ButtonForMyApp from "./components/ui/button"


function App() {
  function GetAnswer(){
    alert('hello world')
  }
  return (
    <>
    <ButtonForMyApp onClick={GetAnswer}/>
    </>
  )
}

export default App
