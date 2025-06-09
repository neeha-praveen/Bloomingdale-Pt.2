import React, { useState, useRef } from 'react'
import './Add.css'
import { Upload } from 'lucide-react'

const Add = () => {
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
      fileInputRef.current.value = ''; // not null — it should be empty string
      fileInputRef.current.click();    // now trigger the dialog
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  return (
    <div className='add'>
      <form className='flex-col'>
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