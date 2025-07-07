import React from 'react'

function MainCourses({eat}) {


const {id,name,img,info,price}=eat;

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
<p className='price'>Price :{price}&#8382;</p>


  </div>
  )
}

export default MainCourses