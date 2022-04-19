import React from 'react';
import './Table.css';
import searchIcon from '../../../images/Search.svg';
import { FilterOutlined } from '@ant-design/icons';
export const Table = () => {
  return (
    <div className="table-wrapper">
      <div className="h1-wrapper">
        <h1 className="h1">გამოქვეყნებული ვაკანსიები</h1>
      </div>
      <div className="search-wrapper">
        <img className="search-icon" src={searchIcon} />
        <input className="global-search" placeholder="საძიებო სიტყვა..." />
      </div>

      <div className="table-container">
        <table className="table">
          <tbody>
            <tr>
              <th>
                ვაკანსიის კოდი <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                ვაკანსიის დასახელება<span>⇅</span> <FilterOutlined />
              </th>
              <th>
                ვაკანსიის სტატუსი <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                გამოქვეყნების თარიღი <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                შევსების ბოლო ვადა <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                სამუშაოს სტატუსი <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                დაწყების თარიღი <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                დასრულების თარიღი <span>⇅</span> <FilterOutlined />
              </th>
              <th>
                შევსებული ადგილები <span>⇅</span> <FilterOutlined />
              </th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Berglunds snabbköp</td>
              <td>Christina Berglund</td>
              <td>Sweden</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </tbody>
        </table>
        <div className="pagination-wrapper">
          <span>1 და 5 მდე ჩანაწერი 11 დან</span>
          <div style={{ marginLeft: '15px' }}>
            {'<<'}
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            {'>>'}
          </div>
          <div>
            <select>
              <option>5</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
