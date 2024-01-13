import Card from './compononts';
import data from './services'
function App() {
  console.log(data);
  
  return (
    <>
      <Card data={data} />
    </>
  )
}

export default App
