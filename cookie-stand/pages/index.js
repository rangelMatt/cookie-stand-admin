import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'

export default function Home() {
  const [table, setState] = useState([]);

    function cookieStandInputHandler(data){

      setState([...table, data]);
    }
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8">
        <CreateForm inputHandler={cookieStandInputHandler}/>
        <ReportTable table={table}/>
      </main>
      <Footer copyright="2022" table={table}/>
    </div>
  )
}








