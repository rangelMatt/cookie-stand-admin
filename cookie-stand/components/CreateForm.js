import { hourly_sales_data } from "../data"
export default function CreateForm(props) {

  function totalDay(arr) {
    let total = 0
    arr.forEach(
      num => total += num
    )
    return total
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newStore = {
      id: location.length + 1,
      hourly_sales_data: hourly_sales_data,
      Location: event.target.Location.value,
      minCustomers: event.target.MinimumPerHour.value,
      maxCustomers: event.target.MaximumPerHour.value,
      avgCookies: event.target.AverageCookiesPerHour.value,
    }
    const totalDaySales = totalDay(newStore.hourly_sales_data)
    newStore.total = totalDaySales
    props.inputHandler(newStore)
    event.target.reset();
  }

  return (
    <form
      className="w-full max-w-screen-lg px-5 p-3 bg-emerald-300 rounded-md my-10"
      onSubmit={handleSubmit}>

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
      </div >
    </form>

  )
}