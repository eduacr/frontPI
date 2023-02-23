import React, { useState } from 'react'
import Card from '../Components/CardListado/Card'


function Home() {

  return (
    
    <main>
        {/* <h1>Home</h1> */}
        <div className='card-grid container'>
        {/*<Category></Category>*/}
        <Card></Card>
         
        </div>
    </main>
  )
}

export default Home