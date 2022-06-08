import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState( {storeData: []});

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8">
        <CookieForm onSubmit={questionAskedHandler} />
        <Main storeData={state}/>
      </main>
      <Footer copyright="2022" />
    </div>
  );

  function questionAskedHandler(event) {
    event.preventDefault();
    let newStore = {
      Location: event.target.Location.value,
      minCustomers: parseInt(event.target.MinimumPerHour.value),
      maxCustomers: parseInt(event.target.MaximumPerHour.value),
      avgCookies: parseFloat(event.target.AverageCookiesPerHour.value),
    }
    setState(newStore);
    event.target.reset();
  }
}


function Header() {
  return <header className="px-8 py-6 text-4xl bg-emerald-500 text-black">
    <h1>Cookie Stand Admin</h1>
  </header>
}
function Main(props){
  return (
    <main className="flex flex-col items-center py-y pt-6 space-y-8">
      {/* <CookieForm onSubmit={props.questionAskedHandler} /> */}

      <p className="text-sm text-gray-500">Report Table Coming Soon...</p>

      <DisplayJson storeData={props.storeData} />
    </main>
  )
}

function CookieForm(props) {
  return (
    <form 
      className="w-full max-w-screen-lg px-5 p-3 bg-emerald-300 rounded-md my-10" 
      onSubmit={props.onSubmit}>

      <h1 className="flex justify-center py-3 text-2xl">Create Cookie Stand</h1>

      <div className="flex flex-wrap">
        <label className="">Location</label>
        <input 
        className="flex-auto"
        id="Location"
        placeholder='location' 
        required 
        />
      </div>

      <div className="flex">
        <div className="text-center">
          <label>Minimum Customers per Hour</label>
          <input 
            className="flex-bottom leading-tight"
            id="MinimumPerHour"
            type="float"
            placeholder="2" 
            required 
            />
        </div>

        <div>
          <label>Maximum Customers per Hour</label>
          <input  
            className="flex-bottom leading-tight" 
            id="MaximumPerHour"
            type="float"
            placeholder="4" 
            required 
            />
        </div>

        <div>
          <label>Average Cookies per Sale</label>
          <input 
            className="flex-bottom leading-tight"
            id="AverageCookiesPerHour"
            type="float"
            placeholder="2.5" 
            required 
            />
        </div>

        <div className="">
          <button className="flex-bottom px-4 py-2 bg-emerald-500 text-black">Create</button>
        </div>
      </div>

    </form>
  )
}

function DisplayJson(props) {
  return (
    <div>
      {JSON.stringify(props.storeData) == '{"storeData":[]}' ? (
        "Enter Cookie Data"
      ) : (
        <p className="text-sm tracking-widest text-gray-500">
          {JSON.stringify(props.storeData)}
        </p>
      )}
    </div>
  );
}

function Footer({ copyright }) {
  return (
    <footer className="px-8 py-6 bg-emerald-500 text-black">
      <p>&copy;{copyright}</p>
    </footer>
  )
}