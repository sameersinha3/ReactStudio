// TODO: create a component that displays a single bakery item
import React from 'react'

function BakeryItem(props) {
    const { item, addCart } = props

    return (
        <div className='BakeryItem'>
            <h2 className='title'>{item.name}</h2>
            <img className='BakeryImage' src={"./"+item.image} alt={item.name} />
            <p>{item.description}</p>
            <br></br>
            
            <div className='option-wrapper'>
                <div>${item.price}</div>
                <button onClick ={() => {addCart(item)}}>Add to Cart</button>
            </div>
        </div>
    )
}

export default BakeryItem