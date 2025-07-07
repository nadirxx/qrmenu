import { createSlice } from '@reduxjs/toolkit'
//ana yemek
import yapraksarma from './MainCoursesIMG/yapraksarmaMENU.jpg'
import iclikofte from './MainCoursesIMG/kofreicMENU.jpg'

//icecekler
import kola from './DrinksIMG/kolaMENU.jpg'
import fanta from './DrinksIMG/fantaMENU.jpg'
//desertler

import sufle from './DesertIMG/sufleMenu.jpg'

//salata

import greeksalad from './SaladsIMG/saladyunan.jpg'





const initialState ={
maincourses:[
{
    id:'1',
    name:'Dolma',
    info:'Yaprak sarma; incecik asma yapraklarına sarılmış, zeytinyağlı ve baharatlı pirinçle hazırlanan geleneksel bir lezzettir, soğuk olarak meze ya da ara sıcak olarak sunulur.',
    img:yapraksarma,
    price:24.50
},
{
    id:'23',
    name:'Icli Kofte',
    info:'Dışı ince bulgur hamuruyla kaplanmış, içi kıyma, soğan ve baharatla doldurulmuş, kızartılarak ya da haşlanarak hazırlanan geleneksel bir Anadolu lezzetidir.',
  img:iclikofte,
    price:45.50
}




],

drinks:[
    
    {
        id:'12321',name:'Kola',img:kola,info:'Efnase soguk ve gazli kola lezzeti,"diyet kolada olarak sece bilirsiniz".',price:3.5
    },
    {
        id:'3190',name:'Fanta',img:fanta,info:'Serinletici Portakal lezzetini deneyin, Istege gore Secenekler : (Greyfurt,Uzum,Lime)',price:3.4
    }
],

desert:[
    {
        id:'55555',name:'Sufle',img:sufle,info:
        'Içi yumuşak ve akışkan, dışı hafif kabarmış çikolatalı Fransız tatlısıdır, sıcak servis edilir ve yoğun kakao aromasıyla tatlı severlere eşsiz bir lezzet sunar.',
        price:11.60
    }
],
salad:[
    {id:'1221221',name:'Salads',img:greeksalad,price:10.00,info:'Yunan salatası; domates, salatalık, kırmızı soğan, zeytin ve beyaz peynirin zeytinyağı ve kekikle harmanlandığı ferahlatıcı bir Akdeniz lezzetidir.'},
]










}

export const Slice = createSlice({
    name:"a",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{

    }
})

export const {}= Slice.actions
export default Slice.reducer
