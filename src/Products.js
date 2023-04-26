import React from 'react'

const Products = ({data}) => {
  return (
    <div>
        <h1 className='header'>your search results are</h1>
        <div className='box'>
            {data.map(data => 
            <div className='container'>
                <img src={data.recipe.image} alt='card'/>
                <div className='card-body'>
                    <center>
                        <h4 className='title'>{data.recipe.label}</h4>
                        <p className='context'>Total Calories are : <span className='spn'>{Math.round(data.recipe.calories)}</span></p>
                        <button className='btn'>Buy</button>
                    </center>

                </div>

            </div>)}
            
        </div>
    </div>
  )
}

export default Products