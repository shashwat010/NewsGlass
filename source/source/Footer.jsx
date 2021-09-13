import React from 'react'

const Footer = () => {
    const year=new Date().getFullYear();
    return (
        <>
         <footer className="text-center text-light bg-dark">Ⓒ {year} || All Rights Reserved</footer>   
        </>
    )
}

export default Footer
