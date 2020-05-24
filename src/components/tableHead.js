import React from "react";
function TableHead({tableSortHandler }) {
  console.log('table head render')
  return (
      <thead>
        <tr style={{cursor:'pointer'}}>
          <th name="summary" onClick={tableSortHandler}>Название </th>
          <th name="start" onClick={tableSortHandler}>Дата начала</th>
          <th name="end" onClick={tableSortHandler}>Дата окончания</th>
          <th name="location" onClick={tableSortHandler}>Место проведения </th>
        </tr>
      </thead>
 
  );
}
export default React.memo(TableHead);