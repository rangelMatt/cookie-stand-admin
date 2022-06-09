import { hours } from "../data";


export default function CookieStandTable({ table }) {


  function totalHourly(table) {
    let hourlyTotal = []
    for (let i = 0; i < hours.length; i++) {
      let hours = 0;
      table.map(item => {
        hours += item.hourly_sales_data[i]
      })
      hourlyTotal[i] = hours
    }
    return hourlyTotal
  }

  function totalFinal(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]
    }
    return total
  }

  let grandTotal = totalFinal(totalHourly(table))
  if (table.length == 0) {
    return (
      <h2 className="w-1/2 mx-auto my-8 text-4xl text-center">
        No Cookies Here
      </h2>
    );
  } else {
    return (
          <table className="w-1/2 mx-auto my-4 border">
            <thead>
              <tr>
                <th className="p-2 border border-black">Location</th>
                {hours.map(item => (
                  <th key={item} className="p-2 border border-black">{item}</th>
                ))}
                <th className="p-2 border border-black">Total</th>
              </tr>
            </thead>
            <tbody>
              {table.map((item, idx) => (
                <tr key={idx}>
                  <td className="p-2 border border-black">{item.Location}</td>
                  {item.hourly_sales_data.map((int, idx) => (
                    <td key={idx} className="p-2 border border-black">{int}</td>
                  ))}
                  <td className="p-2 border border-black even:bg-emerald-300 odd:bg-emerald-400" >{item.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <th className="p-2 border border-black">Totals</th>
              {totalHourly(table).map((item, idx) => (
                <th key={idx} className="p-2 border border-black">{item}</th>
              ))}
              <th className="p-2 border border-black">{grandTotal}</th>
            </tfoot>
          </table>
        );
    }
}
