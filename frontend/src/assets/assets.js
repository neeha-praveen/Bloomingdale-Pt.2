import logo from './images/logo2.png'
import search from './images/search.png'
import cart from './images/cart.png'
import basket from './images/basket_icon.png'
import add_white from './images/white_add.png'
import add_black from './images/add_black.png'
import remove from './images/remove.png'
import insta from './images/insta.png'
import twitter from './images/twitter.png'
import linkedin from './images/linkedin.png'
import cross_icon from './images/cross_icon.png'

import flowering from './images/product_list/flowering_plants.jpg'
import foliage from './images/product_list/outdoor_plants.jpg'
import herbs from './images/product_list/herbs.jpg'
import medicinal from './images/product_list/medicinal_plants.jpg'
import fruits from './images/product_list/fruits.jpeg'
import vegetable from './images/product_list/vegetable.jpg'
import succulents from './images/product_list/succulents.jpg'
import bonsai from './images/product_list/bonsai.jpg'
import aquatic from './images/product_list/aquatic.jpg'
import gardening from './images/product_list/gardening_essentials.jpg'

import flower_1 from './images/flower_1.jpg'
import flower_2 from './images/flower_2.jpg'
import flower_3 from './images/flower_3.jpg'
import flower_4 from './images/flower_4.jpg'
import flower_5 from './images/flower_5.jpg'

import outdoor_1 from './images/outdoor_1.jpg'
import outdoor_2 from './images/outdoor_2.jpg'
import outdoor_3 from './images/outdoor_3.jpg'

import indoor_1 from './images/indoor_1.jpg'


export const assets = {
    logo: logo,
    search: search,
    cart: cart,
    basket: basket,
    add_white: add_white,
    add_black: add_black,
    remove: remove,
    insta: insta,
    twitter: twitter,
    linkedin: linkedin,
    cross_icon: cross_icon
}

export const product_list = [
    {
        product_name: "flowering plants",
        product_image: flowering
    },
    {
        product_name: "foliage plants",
        product_image: foliage
    },
    {
        product_name: "herbs",
        product_image: herbs
    },
    {
        product_name: "medicinal plants",
        product_image: medicinal
    },
    {
        product_name: "fruit plants",
        product_image: fruits
    },
    {
        product_name: "vegetable plants",
        product_image: vegetable
    },
    {
        product_name: "succulents",
        product_image: succulents
    },
    {
        product_name: "bonsai",
        product_image: bonsai
    },
    {
        product_name: "aquatic plants",
        product_image: aquatic
    },
    {
        product_name: "gardening essentials",
        product_image: gardening
    }
]

export const products_all = [
    {
        _id : "1",
        name: "Hibiscus",
        image: flower_1,
        price:299,
        category: "flowering plants"
    },
    {
        _id : "2",
        name: "Salvia",
        image: flower_2,
        price: 100,
        category: "flowering plants"
    },
    {
        _id : "3",
        name: "Rose",
        image: flower_3,
        price: 399,
        category: "flowering plants"
    },
    {
        _id : "4",
        name: "Chrysanthemum",
        image: flower_4,
        price: 499,
        category: "flowering plants"
    },
    {
        _id : "5",
        name: "Bougainvillea",
        image: flower_5,
        price: 299,
        category: "flowering plants"
    },
    {
        _id : "6",
        name: "Heliconia",
        image: outdoor_1,
        price: 299,
        category: "outdoor plants"
    },
    {
        _id : "7",
        name: "Eugenia",
        image: outdoor_2,
        price: 299,
        category: "outdoor plants"
    },
    {
        _id : "8",
        name: "China Doll",
        image: outdoor_3,
        price: 199,
        category: "outdoor plants"
    },
    {
        _id : "9",
        name: "Ugaoo",
        image: indoor_1,
        price: 299,
        category: "indoor plants"
    },
]
