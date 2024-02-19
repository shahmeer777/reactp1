import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Practise() {
  const [value, setValue] = useState({
    name: '',
    email: '',
  });

  
  const [list, setList] = useState([]);
  const [apidata, setApidata] = useState([]);

  const add = () => {
    const found = list.find((e) => e.email === value.email);
    if (found) {
      alert('Already exists');
    } else {
      setList([...list, value]);
    }
  };

  const fetchApi = async () => {
    try {
      const response = await axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
      setApidata(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []); // Removed apidata from dependencies to avoid unnecessary re-fetching

  return (
    <>
      <input type="text" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} placeholder="" />
      <input type="email" value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} placeholder="" />
      <button onClick={add}>add</button>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e, index) => (
            <tr key={index}>
              <td>{e.name}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>apidata</p>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Practise;
