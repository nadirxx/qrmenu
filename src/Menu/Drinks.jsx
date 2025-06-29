import React from 'react'
import kola from '../DrinksIMG/kolaMENU.jpg'
////&#8382;</h3>
  

function Drinks({drink}) {

const {id,name,img,info,price}=drink;

  return (
    <div className='eat_1'>
  
  
  <div className='eat_2'>
  
  <div className='eat_3'>
    <div className='eat_3_1_in_configurasion'>
       <img className='eat_foto' src={img} alt="" />
       <h3>{name}</h3>
    </div>
    <p className='p_eat_info'>{info}</p>
  
  
  </div>
  </div>
  <div className='price'>
  <h3>Price:{price}</h3>
</div>
      </div>
  )
}

export default Drinks