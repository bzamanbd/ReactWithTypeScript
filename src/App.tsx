import './App.css'
import ChildComponents from './components/STATE_LIFTING/ChildComponents'
export default function App() {
  function onChildData(userData: { name: string, phone: number }): void {
    console.log(userData);
  }
  return (
    <>
      <ChildComponents onChildData={onChildData} />
    </>
  )
}

