import React, { useState } from 'react'
import kahvalti from '../SetFoto/setkahvalti.jpg'
import drinks from '../SetFoto/setDrinks.jpeg'
import meet from '../SetFoto/meetset.png'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaSquareWhatsapp } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import { FaInfoCircle } from "react-icons/fa";
function Home() {

const [hover,setHover]=useState(false);

  return (

  <div>  



 <div className="d-flex justify-content-center align-items-center min-vh-100" id="slideShow_1DIV">

    

    <div
      id="heroCarousel"
      className="carousel slide w-100"
      style={{ maxWidth: 900 }}
      data-bs-ride="carousel"
    >  
      <div className="carousel-inner ratio ratio-16x9" id="slideShow"> 
     
        <div className="carousel-item active">

<div style={{color:'black'}} id='setname'> 
  <p> Kahvalti Seti</p>
   <p style={{color:'green'}} className='icon'
   
   
   onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
   
   >i</p> 

    {hover && (
        <div className="set_info_div">
          <p>
Beyaz peynir, kaşar peyniri, tulum peyniri
Siyah ve yeşil zeytin çeşitleri
Bal, tereyağı, reçel çeşitleri
Domates, salatalık, biber, yeşillikler
Haşlanmış yumurta veya sahanda yumurta
Sigara böreği veya çıtır börekler
Sucuk, salam veya kavurma (isteğe bağlı)
Simit, poğaça ve taze köy ekmeği.
Çay (sınırsız)</p>
        </div>
      )}
</div>

          <img
            src={kahvalti}
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
        <div className="carousel-item">

            <div style={{color:'black'}} id='setname'> 
   <p> Alkol ve Aperativler </p>
 
     <p style={{color:'green'}} className='icon' 
     
     onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
     
     >i</p> 
 {hover && (
        <div className="set_info_div">
          <p>
            
         İki Premium İçecek Seçeneği
Soğuk servis edilen bir lager bira
Şarap kadehinde aromatik beyaz veya hafif kırmızı (tercihe göre)
Meze Üçlüsü
Humus (tahin & limon dokunuşlu)
Acılı ezme (domates, biber ve baharat)
Haydari (yoğurt & nane)
Özel Kuruyemiş Tabağı
Kavrulmuş Antep fıstığı
Badem içi
Tuzlu kaju
            
            </p>
        </div>
      )}


</div>
          <img
            src={drinks}
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
        <div className="carousel-item">

<div style={{color:'black'}} id='setname'> 
   <p>Et Seti</p> 
    <p style={{color:'green'}} className='icon'
    
    
    onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
    
    
    >i</p> 

     {hover && (
        <div className="set_info_div">
          <p>Şefin özel sosuyla marine edilmiş dana bonfile
Dinlendirilmiş ve ızgarada mühürlenmiş antrikot
Özel baharatlarla hazırlanan kasap sucuğu veya kuzu kaburga
Yanında eşlik eden iki farklı bira: biri hafif ve meyvemsi, diğeri koyu ve aromatik
Közlenmiş sebzeler (biber, domates, soğan)
Acılı ezme & baharatlı yoğurt
Sıcacık lavaş veya odun fırınında pişmiş ekmek dilimleri

          </p>
        </div>
      )}
</div>

          <img
            src={meet}
            className="d-block w-100 h-100"
            style={{ objectFit: 'cover' }}
            alt=""
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
        <span className="visually-hidden">Prev</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

<div className='card-social'>
<div className='app'><FaSquareWhatsapp/></div>
<div className='app'><LuTwitter/></div>
<div className='app'><FaInstagram/></div>
</div>

   </div> 
  )
}

export default Home