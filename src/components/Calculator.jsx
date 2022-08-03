import {useState} from 'react'

import {TiCalculator} from "react-icons/ti"

const Calculator = () => {

  const [number, setNumber] = useState('') 

  const [hasError, setHasError] = useState(false)

  const handleClick =(e) => {
    setNumber(number.concat(e.target.value))

    }

    const handleClear =() => {
      setNumber('')
    }


    const handleSlice =() => {
      setNumber(number.slice(0, -1))
    }


    const handleAnswer =() => {
      try{
          setNumber(eval(number).toString())
          setHasError(true)
      } catch(error){
        setHasError(false)
      }
    }


  return (
  
    <section>

    <div className='bg-gradient-to-r from-cyan-500 to-blue-100 w-96 h-screen mx-auto
                    rounded-lg overflow-hidden mt-10 border
                     border-blue-400 ring ring-sky-50 '>
    
      <div className="flex items-center gap-10 text-blue-200">
      <TiCalculator className="w-10 p h-10"/>
      <button className="border border-pink-50 mt-3                        font-bold text-3xl bg-gradient-to-r from-white
                       to-pink-100 rounded-md font-ariel p-2 ">CALCULATOR</button>
      </div>

      <div className="m-10 mt-5 h-20">
        <input type= 'text' placeholder="0" 
                value={number}  
        className= {`border border-blue-100 w-60 rounded-lg
                    h-16 text-3xl text-right ml-7 p-2 ${hasError?" bg-red-200 " :""} `}
        />
        
        <div className='grid grid-cols-4 gap-2 mt-10 mx-2 text-white'>
          <button  onClick={handleClear} className=" w-18 h-16 text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> AC</button>
          <button  onClick={handleSlice}className=" w-18 h-16 text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> C</button>
          <button value="/" onClick={handleClick}className=" w-18 h-16 text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-current"> /</button>
          <button value="+" onClick={handleClick}className=" w-18 h-[120px] text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl row-span-2"> +</button>
          
          <button value="9" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 9</button>
          <button value="8" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 8</button>
          <button value="7" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 7</button>
          <button value="6" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 6</button>
          
          <button value="5" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 5</button>
          <button value="4" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 4</button>
          <button value="-" onClick={handleClick}className=" w-18 h-16 text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> -</button>
          <button value="3" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 3</button>
         
          <button value="2" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 2</button>
          <button value="1" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 1</button>
          <button value="*" onClick={handleClick}className=" w-18 h-16 text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> *</button>
          <button value="." onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl pb-5"> .</button>
          
          <button value="0" onClick={handleClick}className=" w-18 h-16 bg-blue-200 rounded-lg font-bold text-4xl flex justify-center items-center shadow-xl"> 0</button>
         
          <button onClick={handleAnswer}className=" w-18 h-16 text-black bg-pink-100 rounded-lg font-bold text-4xl flex justify-center items-center shadow-2xl col-span-2"> =</button>
          
       
       
        </div>
       

      </div>
      </div>
    
    </section>
 
  )
}

export default Calculator

