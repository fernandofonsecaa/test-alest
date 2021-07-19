import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


import api from '../../services/api'

import './styles.css'
export default function Main(){
    const [products, setProducts] = useState([])

useEffect(()=>{
    api.get('products').then(res =>{
        setProducts(res.data)
    })
},[])

    return (     
        <>
        <header className="header-container">
            <Link className="button" to="/register">Cadastrar novo produto</Link>    
        </header>    
        <section className="banner-section">
            <h1> Escolha o seu produto</h1>
        </section>

         <div className="product-container">
            <ul>
                {products.map(product =>(
                <li>
                    <strong>Produto <span>{product.name}</span></strong>
                    <strong>Preço <span>{product.value}</span></strong>
                </li>
             ))}
            </ul>
        </div>
      </>  
    )
}