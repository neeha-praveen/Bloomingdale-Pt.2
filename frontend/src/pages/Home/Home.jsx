import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'
import Display from '../../components/Display/Display'

const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header/>
            <ExploreProducts category={category} setCategory={setCategory}/>
            <Display category={category}/>
        </div>
    )
}

export default Home