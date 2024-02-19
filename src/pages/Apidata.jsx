import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';

function Apidata() {
  const [value, setValue] = useState([]);

  const fetchapi = async () => {
  
      const response = await axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
      console.log(response.data);
      setValue(response.data);
      toast.success("fetch successfully !", {
       
      });
    
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <>
    
      <button type="button" className="bg-blue-900 hover:bg-blue-600 text-white rounded p-2" onClick={fetchapi}>
        Click to fetch data
      </button>
      <div class="relative overflow-x-auto">

      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         
          <tr >
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">sno</th>
            
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">name</th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">city</th>
          </tr>
        </thead>
        <tbody>
          {value.map((item, index) => (
            <tr class="bg-white dark:bg-gray-800" key={index}>
              <td class="px-6 py-4">{index+1}</td>   
              <td class="px-6 py-4">{item.name}</td>
              <td class="px-6 py-4">{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

</div>
    </>
  );
}

export default Apidata;
