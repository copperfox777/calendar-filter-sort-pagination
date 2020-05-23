import React from "react";

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
            return (
              <tr key={item.uid}>
                <td>{item.summary}</td>
                <td>{item.end}</td>
                <td>{item.start}</td>
                <td>{item.location}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
