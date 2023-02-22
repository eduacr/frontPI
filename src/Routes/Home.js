import React, { useState } from 'react'
import Card from '../Components/Card'
import Category from '../Components/Category'

function Home() {

  return (
    
    <main>
        <h1>Home</h1>
        <div className='card-grid container'>
        <Card></Card>
        {/*<Category></Category>*/}
         
        </div>
    </main>
  )
}

export default Home