import React, { useState, useRef } from 'react'
import axios from 'axios';
import './Add.css'
import { Upload } from 'lucide-react'
import { toast } from 'react-toastify';


const Add = () => {
  const url = "http://localhost:4000";
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "flowering plants"
  })
  const fileInputRef = useRef(null);

  const handleReupload = (e) => {
    // Clear input value manually
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault(); //prevents reload of page
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)

    //api call
    const response = await axios.post(`${url}/api/product/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        price: "",
        category: "flowering plants"
      })
      setImage(false);
      toast.success(response.data.message)
    }
    else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>

          {!image ? (
            <div
              className='file-upload-area'
              onClick={() => fileInputRef.current.click()}
            >
              <Upload className="upload-icon" />
              <div className="upload-text">Upload</div>
              <input
                ref={fileInputRef}
                id="file-input"
                type="file"
                className="file-input"
                accept=".png,.jpeg,.jpg"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          ) : (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded"
                className="preview-img"
                onClick={handleReupload}
              />

            </div>
          )}
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="flowering plants">flowering plants</option>
              <option value="outdoor plants">outdoor plants</option>
              <option value="indoor plants">indoor plants</option>
              <option value="landscape plants">landscape plants</option>
              <option value="medicinal plants">medicinal plants</option>
              <option value="succulents">succulents</option>
              <option value="gardening essentials">gardening essentials</option>
              <option value="for gifting">for gifting</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder='₹' />
          </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add