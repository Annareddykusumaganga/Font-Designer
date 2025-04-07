import React, { useRef, useState } from 'react'
import './App.css'
import screenshot from "html2canvas"

function App(){

   const[color,setTextColor]=useState("000")
   const[bgdColor,setBgdColor]=useState("000")
   
   const clr = useRef()
   const textColor = (colors) =>{
    clr.current.style.color=colors
   }

   const bgColor = (colors) =>{
      clr.current.style.backgroundColor=colors
     }

     const fontFamily = (fontName) =>{
      clr.current.style.fontFamily=fontName
     }

     const bgImg = (imgUrl)=>{
      clr.current.style.backgroundImage=`url(${imgUrl})`;
      clr.current.style.backgroundPosition="center";
     }

     

     const downloadImage = ()=>{
      screenshot(clr.current,{useCORS:true,
         allowTaint:false,
         backgroundColor: null,
      }).then(canvas =>{
         const imgData = canvas.toDataURL("image/png")
         const link = document.createElement('a')
         link.href=imgData
         link.download="msg.png"
         link.click()
      })
     }
  return(
    <>
     <div id="title">
       <h1>Font-Designer</h1>
     </div>
     <div className='container'>
        <div id="text-box">
          <h2 ref={clr} contentEditable="true" id="text">Write a message......</h2>
          <button id="download-btn" onClick={downloadImage}>Download</button>
        </div>
        <div id="colors">
           <div id="text-clr">
            <h3>Selecttext-color you want to apply....</h3>
           </div>
           <div id="txt-clr">
              <button id="purple" onClick={()=>{textColor("purple")}}></button>
              <button id="blue" onClick={()=>{textColor("blue")}}></button>
              <button id="green" onClick={()=>{textColor("green")}}></button>
              <button id="yellow" onClick={()=>{textColor("yellow")}}></button>
              <button id="orange" onClick={()=>{textColor("orange")}}></button>
              <button id="red" onClick={()=>{textColor("red")}}></button>
              <button id="bisque" onClick={()=>{textColor("bisque")}}></button>
              <button id="crimson" onClick={()=>{textColor("crimson")}}></button>
              <button id="greenyellow" onClick={()=>{textColor("greenyellow")}}></button>
              <input type="color" 
              value={color} 
              onChange={(event)=>{
               setTextColor(event.target.value)
               textColor(event.target.value)
              }}/>
           </div>
           <div id="bgd-clr">
            <h3>Select background-color you want to apply....</h3>
           </div>
           <div id="bg-clr">
              <button id="purple" onClick={()=>{bgColor("purple")}}></button>
              <button id="blue" onClick={()=>{bgColor("blue")}}></button>
              <button id="green" onClick={()=>{bgColor("green")}}></button>
              <button id="yellow" onClick={()=>{bgColor("yellow")}}></button>
              <button id="orange" onClick={()=>{bgColor("orange")}}></button>
              <button id="red" onClick={()=>{bgColor("red")}}></button>
              <button id="bisque" onClick={()=>{bgColor("bisque")}}></button>
              <button id="crimson" onClick={()=>{bgColor("crimson")}}></button>
              <button id="greenyellow" onClick={()=>{bgColor("greenyellow")}}></button>
              <input type="color" 
              value={bgdColor}
               onChange={(event)=>{
               setBgdColor(event.target.value)
               bgColor(event.target.value)
               }} />
           </div>
           <div id="font-style">
            <h3>Select font style you want to apply...</h3>
           </div>
           <div id="ft-style">
              <button id="times-new" onClick={()=>{fontFamily('Times New Roman')}}>Hello!</button>
              <button id="verdana" onClick={()=>{fontFamily('verdana')}} >Hello!</button>
              <button id="monospace" onClick={()=>{fontFamily('monospace')}}>Hello!</button>
              <button id="arial" onClick={()=>{fontFamily('arial')}}>Hello!</button>
              <button id="georgia" onClick={()=>{fontFamily('georgia')}}>Hello!</button>
              <button id="cambria" onClick={()=>{fontFamily('cambria')}}>Hello!</button>
              <button id="lucida" onClick={()=>{fontFamily('Lucida Sans')}}>Hello!</button>
              <button id="cursive" onClick={()=>{fontFamily('cursive')}}>Hello!</button>
              <button id="impact" onClick={()=>{fontFamily('impact')}}>Hello!</button>
           </div>
           <div id="bgd-img">
            <h3>Select image you want to apply...</h3>
           </div>
           <div id="bg-image">
              <img src="https://img.freepik.com/free-photo/pink-flower-white-background_1203-2127.jpg?semt=ais_hybrid&w=740" onClick={()=>{bgImg("https://img.freepik.com/free-photo/pink-flower-white-background_1203-2127.jpg?semt=ais_hybrid&w=740")}}/>
              <img src="https://media.istockphoto.com/id/1130636356/photo/sunset-over-mountain-with-cosmos-blooming.jpg?s=612x612&w=0&k=20&c=0fK0C07rR3kqX4C9PLhqNjxSs6d6vSTMPTkPlD-CybQ=" onClick={()=>{bgImg("https://media.istockphoto.com/id/1130636356/photo/sunset-over-mountain-with-cosmos-blooming.jpg?s=612x612&w=0&k=20&c=0fK0C07rR3kqX4C9PLhqNjxSs6d6vSTMPTkPlD-CybQ=")}}/>
              <img src="https://hips.hearstapps.com/hmg-prod/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg"onClick={()=>{bgImg("https://hips.hearstapps.com/hmg-prod/images/surprising-flower-meanings-balloon-flowers-1650767465.jpg")}}/>
              <img src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=" onClick={()=>{bgImg("https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=")}}/>
              <img src="https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=20&crop=false" onClick={()=>{bgImg("https://rukminim2.flixcart.com/image/850/1000/kgsb1jk0-0/poster/n/h/y/medium-twfnp2-beautiful-waterfall-nature-view-large-size-high-original-imafwy37qv2b5g3v.jpeg?q=20&crop=false")}}/>
              <img src="https://www.thesavvyglobetrotter.com/wp-content/uploads/2029/09/Pets-when-traveling.jpg" onClick={()=>{bgImg("https://www.thesavvyglobetrotter.com/wp-content/uploads/2029/09/Pets-when-traveling.jpg")}}/>
              <img src="https://thumbs.dreamstime.com/b/underwater-cartoon-illustration-marine-life-landscape-ocean-world-different-inhabitants-print-create-videos-73987379.jpg" onClick={()=>{bgImg("https://thumbs.dreamstime.com/b/underwater-cartoon-illustration-marine-life-landscape-ocean-world-different-inhabitants-print-create-videos-73987379.jpg")}}/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWxyemAl4_DksuHgUmSbSQyhkRQXQPSjGjw&s" onClick={()=>{bgImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWxyemAl4_DksuHgUmSbSQyhkRQXQPSjGjw&s")}}/>
              <img src="https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811477.jpg?semt=ais_hybrid&w=740" onClick={()=>{bgImg("https://img.freepik.com/free-photo/home-indoor-design-concept_23-2148811477.jpg?semt=ais_hybrid&w=740")}}/>
              <img src="https://i.digsdigs.com/2014/08/a-black-geometric-paneled-wall-is-a-cool-solution-for-a-boho-mid-century-modern-and-just-elegant-contemporary-space.jpg" onClick={()=>{bgImg("https://i.digsdigs.com/2014/08/a-black-geometric-paneled-wall-is-a-cool-solution-for-a-boho-mid-century-modern-and-just-elegant-contemporary-space.jpg")}}/>
              
           </div>

          
        </div>
     </div>
    </>
  )
}
export default App;