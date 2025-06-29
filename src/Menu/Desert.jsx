import React from 'react'

function Desert({desert}) {

const {id,name,img,info,price}=desert;

  return (
    <div className='eat_1'>
     
     
     <div className='eat_2'>
     
     <div className='eat_3'>
       <div className='eat_3_1_in_configurasion'>
          <img className='eat_foto' src={img} alt="" />
          <h3>{name}</h3>
       </div>
       <p className='p_eat_info'>
        {info}
     </p>
     </div>
     
     
     
     </div>
     <div className='price'>
  <h3>Price:{price}</h3>
</div>
         </div>
  )
}

export default Desert