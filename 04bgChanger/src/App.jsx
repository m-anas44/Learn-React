import { useState } from 'react'

function App() {
 const [color, setColor] = useState("olive")
  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex justify-center items-end flex-wrap gap-2 bottom-8 inset-x-0'>
        <div className='rounded-full py-2 px-4 bg-red-500' onClick={()=> setColor("red")}>Red</div>
        <div className='rounded-full py-2 px-4 bg-blue-500' onClick={()=> setColor("blue")}>Blue</div>
        <div className='rounded-full py-2 px-4 bg-black text-white' onClick={()=> setColor("black")}>Black</div>
      </div>
    </div>
  )
}

export default App
