import React from 'react'
import '../../App.css'
import Footer from '../Footer'

export default function SignUp() {
    return (
        <>
            <h1 
                className='sign-up' 
                style={{
                    backgroundImage: `url('/images/img-8.jpg')`,
                    backgroundAttachment: `fixed`
                }}
            >
                SIGN UP
            </h1>
            <Footer />
        </>
    )
}