import React from 'react'
import './ExploreProducts.css';
import { product_list } from '../../assets/assets';

const ExploreProducts = ({category,setCategory}) => {
    return (
        <div className='explore-products' id="explore-products">
            <h1>Explore our products</h1>
            <p className='explore-products-text'>Browse our selection of fresh plants, vibrant flowers, and essential gardening supplies. Find everything you need to bring your garden to life.</p>
            <div className="explore-products-list">
                {product_list.map((item,index)=>{
                    return (
                        <div onClick={()=>{
                            setCategory(prev => prev === item.product_name ? "All" : item.product_name);
                        }} key={index} className="explore-products-list-item">
                            <img className={category === item.product_name ? 'active' : ''} src={item.product_image} alt="" />
                            <p>{item.product_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default ExploreProducts