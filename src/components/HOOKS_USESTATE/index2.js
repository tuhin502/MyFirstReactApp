import React,{useState} from 'react'

export default function HOOKS_USESTATE2() {

        const [count, setCount] = useState(0)
        const handleIcrement = () =>{
            setCount(count +1);
        }


  return (
    <div>
       <h1> Count :{count} </h1>
        <button onClick={handleIcrement}>Rising</button>
      
    </div>
  )
}
