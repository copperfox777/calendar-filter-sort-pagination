import React, { useState } from "react";
import Layout from "../components/layout";
import Spinner from "../components/spinner/spinner";
import Table from "../components/table";
import Pagination from "../components/pagination"

export default function Page1({ isLoading, data }) {
  
  const [filter,setFilter] = useState('');
  const [sortColumnName,setSortColumnName] = useState('');
  const [page,setPage] = useState(1);
  const [pages,setPages] = useState(1);
 
  if (isLoading) {
    return (
      <Layout title="This is first page ">
        <Spinner />
      </Layout>
    );
  }
  
  const filterHandler = (event)=> setFilter(event.target.value);
  
  const pageChangeHandler = (payload)=> {
    const n_page=page+payload;
    if(n_page <= pages && n_page>= 1){setPage(n_page)}
  };
  
  // Всё таки при смене сортировки следует переходить 
  // на 1 страницу паджинации, так как общий порядок совсем другой
  const tableSortHandler = (event)=> {
    setSortColumnName(event.target.getAttribute('name'));
    setPage(1);
  };

  
  //Внутренняя логика и вычисления тут  
  let dataToTable=data;
  if(filter!==''){dataToTable =  dataToTable.filter(item => item.location && item.location.startsWith(filter));}
  if(sortColumnName!==''){dataToTable.sort((a,b) => (a[sortColumnName] > b[sortColumnName]) ? 1 : ((b[sortColumnName] > a[sortColumnName]) ? -1 : 0))}
  let dataToPage=dataToTable.slice((page-1)*10,page*10);
  if(pages !== Math.trunc(dataToTable.length / 10)){
    setPages(Math.trunc(dataToTable.length / 10))
  };
  

  return (
    <div>
      <Layout>
        <input name="filter" className="input" type="text" placeholder="Фильтр городов" 
        value={filter} onChange={filterHandler}></input>
        <Table data={dataToPage} tableSortHandler={tableSortHandler} />
        <Pagination page={page} pages={pages} pageChangeHandler={pageChangeHandler}/>
      </Layout>
    </div>
  );
}
