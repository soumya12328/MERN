'use client';

import React from 'react'

const EventHandling = () => {

  const previewImage=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (data) =>{
      const img = document.createElement("img");
      img.src = data.target.result;
      img.className = "mt-5"
      document.body.appendChild(img);
    }
    reader.readAsDataURL(file);
  }

  return (
    <div className='container mx-auto py-5  cursor-none'
    onMouseMove={(e)=>{
       const circle = document.getElementById('target');
       circle.style.left = e.clientX - 20 + "px";
       circle.style.top = e.clientY - 20 + "px";
      // console.log(e.clientX, e.clientY);
      
    }}
    >
        <h1>Event Handling Page</h1>

        {/* <div className=' -z-1 size-8 bg-amber-500 rounded-full absolute ' id='target' ></div> */}
<img  className='-z-1  h-15 absolute ' src="https://img.freepik.com/free-photo/waxing-gibbous-moon_181624-34491.jpg?semt=ais_hybrid&w=740&q=80" id='target' alt="" />

        <button
         onClick={()=>{ alert('Button was Clicked..!!') }} 
        // onClick={ alert('Button was Clicked..!!') }
        className='bg-emerald-500 text-amber-200 p-10 text-4xl'> 
        Click Event
        </button>

        <input type="text"
        className='border p-3 mt-5 block bg-fuchsia-300'
        onChange={(e)=>{console.log(e.target.value);
        }}
        />

        <input
         type="color"
         className='mt-5'
         onChange={(e)=>{document.body.style.backgroundColor = e.target.value}}
         />

         <input 
         type="text"
         className='border p-3 block mt-5'
          onKeyDown={(e)=>{console.log(e.key, e.code);
          }}
          />
          <textarea className='border-2' rows={10} cols={10}></textarea>

          <input type="file" className='block mt-5'
          onChange={previewImage}
          accept='image/*'
          multiple
          />
    </div>
  )
}

export default EventHandling
