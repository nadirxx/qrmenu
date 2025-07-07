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
    <p className='price'>Price :{price}&#8382;</p>
         </div>
  )
}

export default Desert