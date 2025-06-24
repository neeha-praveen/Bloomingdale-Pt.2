import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { X } from 'lucide-react';

const List = ({url}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`)
    if (response.data.success) {
      setList(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }

  const removeProduct = async (productId) => {
  try {
    const response = await axios.post(`${url}/api/product/remove`, { id: productId });
    console.log("Remove response:", response.data);
    if (response.data.success) {
      toast.success(response.data.message || "Product removed");
      fetchList(); // Refresh the list
    } else {
      toast.error(response.data.message || "Failed to remove product");
    }
  } catch (error) {
    toast.error("Server error while removing product");
    console.error(error);
  }
};


  useEffect(() => {
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Products</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image}/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='cursor'><X/></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List