import React, { useEffect, useMemo } from 'react';
import './Table.css';
import { FilterOutlined } from '@ant-design/icons';
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from 'react-table';
import { ApiCall } from '../../../services/ApiCall';
import MOCK_DATA from '../../../MOCK_DATA.json';
import { COLUMNS } from './Columns';
import { GlobalFilter } from './GlobalFilter';
import { ColumnFilter } from './ColumnFilter';
import { Dropdownm } from './Dropdown';
export const Table = () => {
  useEffect(() => {
    ApiCall();
  }, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setGlobalFilter,
    page,
    headerGroups,
    setPageSize,
  } = useTable(
    { columns: columns, data: data, defaultColumn },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state; //the current page
  useEffect(() => {
    setPageSize(5);
  }, []);
  console.log(
    pageIndex == pageCount - 1
      ? (pageIndex + 1) * pageSize
      : (pageIndex + 1) * pageSize - (pageCount + 1) * pageSize - data.length
  );
  return (
    <div className="table-wrapper">
      <div className="h1-wrapper">
        <h1 className="h1">გამოქვეყნებული ვაკანსიები</h1>
      </div>
      <GlobalFilter filter={globalFilter} setGlobalFilter={setGlobalFilter} />
      <div className="table-container">
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <>
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                      <span>{column.render('Header')}</span>{' '}
                      {/* <span className="sort">⇅</span> */}
                      <span className="sort">
                        {column.isSorted ? (column.isSortedDesc ? '⇊' : ' ⇈') : '⇅'}
                      </span>
                      <FilterOutlined className="filter" />
                      {/* <span>
                        {column.canFilter ? column.render('Filter') : null}
                      </span> */}
                    </th>
                  </>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-wrapper">
          <span>
            {(pageIndex + 1) * pageSize - (pageSize - 1)} დან
            {(pageIndex + 1) * pageSize}
            მდე ჩანაწერი {data.length} დან
          </span>
          <div style={{ marginLeft: '15px' }}>
            <span>
              <strong>
                Page {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              Previous
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              Next
            </button>
          </div>
          <div className="selectdiv">
            <select
              className="page-size"
              onChange={({ target }) => setPageSize(Number(target.value))}
            >
              {[5, 10, 25, 50].map((pageSize) => {
                return (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <tr>
              <th>
                <span>ვაკანსიის კოდი</span> <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span>ვაკანსიის დასახელება</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span> ვაკანსიის სტატუსი</span> <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span>გამოქვეყნების თარიღი</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span> შევსების ბოლო ვადა</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span> სამუშაოს სტატუსი</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span>დაწყების თარიღი</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span>დასრულების თარიღი</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
              <th>
                <span>შევსებული ადგილები</span>
                <span className="sort">⇅</span>
                <FilterOutlined className="filter" />
              </th>
            </tr>
            <tr></tr> */
}
