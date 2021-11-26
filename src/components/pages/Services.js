import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function Services() {
    return (
        <>
            <h1 
                className='services' 
                style={{
                    backgroundImage: `url('/images/img-2.jpg')`,
                    backgroundAttachment: `fixed`
                }}
            >
                SERVICES
            </h1>
            <Footer />
        </>
    )
}