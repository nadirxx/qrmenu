import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import './App.css'
import Salads from './Menu/Salads'
import MainCourses from './Menu/MainCourses'
import Drinks from './Menu/Drinks'
import Desert from './Menu/Desert'
import { useSelector } from 'react-redux'

function App() {
 //ana yemekler
const {maincourses} = useSelector((store)=>store.pro);


//drinks

const {drinks} = useSelector((store)=>store.pro);


//desert

const {desert} = useSelector((store)=>store.pro);



//salads

const {salad} = useSelector((store)=>store.pro);


  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/Salads' element={salad&&salad.map((salad)=>(
          <Salads key={salad.id} salad={salad}/>
        ))}></Route>

          <Route path='/MainCourses' element={
maincourses&&maincourses.map((eat)=>(
  <MainCourses key={eat.id} eat={eat} />
))}> </Route>



             <Route path='/Drinks' element={drinks&&drinks.map((drink)=>(
              <Drinks key={drink.id} drink={drink}/>
             ))}></Route>



               <Route path='/Desert' element={desert&&desert.map((desert)=>(
                <Desert key={desert.id} desert={desert}/>
               ))}></Route>

      </Routes>
    </div>
  )
}

export default App
