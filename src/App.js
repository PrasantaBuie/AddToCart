import React from 'react'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { incNumber,decNumber } from './actions'
const App = () => {
  var myState=useSelector((state)=>state.changeTheNumber)
  const dispatch=useDispatch()
  const price=499
  const subtotal=price*myState
  return (
    <>
      <div className='containers'>
        <h1>Add to Cart Functionality</h1>
        <h4>Using React and Redux</h4>
        <img src='https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg' style={{width:'250px'}}/>
        <h2>Price <span className='prev'>899/-</span> <span className='price'>Rs. {price} /-</span ></h2>
        <div className='quantity'>
          <a className='quantity__minus' title='Remove'onClick={()=>dispatch(decNumber())}><span>-</span></a>
          <input name='quantity' type='text' className='quantity__input' value={myState} ></input>
          <a className='quantity__plus' title='Add' onClick={()=>dispatch(incNumber())}><span>+</span></a>
          
        </div>
        <h3 id='msg'>You have added <span className='items'>{myState}</span ></h3>
      </div>
      <div className='subtotal'>
      <h3 id='msg'>You have added <span className='items'>{myState}</span > shirts</h3>
        <h2>SubTotal</h2>
      <h2>{subtotal} /-</h2>
      </div>
    </>

  )
 
}

export default App

