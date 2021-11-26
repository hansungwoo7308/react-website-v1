import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Products() {
    return (
        <>
            <h1 
                className='products' 
                style={{
                    backgroundImage: `url('/images/img-1.jpg')`,
                    backgroundAttachment: `fixed`
                }}
            >
                PRODUCTS
            </h1>
            <Footer />
        </>
    )
}