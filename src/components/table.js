import React from "react";
import TableRow from './tableRow'
export default function Table({ data,tableSortHandler }) {
  return (
    <table className="table">
      <thead>
        <tr style={{cursor:'pointer'}}>
          <th name="summary" onClick={tableSortHandler}>Название </th>
          <th name="start" onClick={tableSortHandler}>Дата начала</th>
          <th name="end" onClick={tableSortHandler}>Дата окончания</th>
          <th name="location" onClick={tableSortHandler}>Место проведения </th>
        </tr>
      </thead>
      <tbody>
      {data &&
          data.map((item) => {
            let rowArr=[item.summary,item.end,item.start,item.location];
            return (
              <TableRow key={item.uid} rowData={rowArr}/>
            );
          })}
      </tbody>
    </table>
  );
}
