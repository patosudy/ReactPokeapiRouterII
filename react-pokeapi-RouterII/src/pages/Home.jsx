import React from 'react'
import Logo from '../assets/principal.png'

const Home = () => {
    return (
        <div className='container'>
            <h2>BIENVENIDO MAESTRO POKEMON</h2>
            <img src={Logo} style={{ margin: "20px auto" }} alt="foto principal de pikachu" width="350" />
        </div>
    )
}

export default Home