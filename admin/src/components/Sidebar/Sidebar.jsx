import React from 'react'
import './Sidebar.css'
import { CirclePlus, ClipboardList, ShoppingBag } from 'lucide-react';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-options'>
            <NavLink to='/add' className="sidebar-option">
                <CirclePlus/>
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <ClipboardList/>
                <p>List Items</p>
            </NavLink>
            <NavLink to='/orders' className="sidebar-option">
                <ShoppingBag/>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar