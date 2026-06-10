import React, { useState } from 'react'

const TogglQuestion = ({obj_data}) => {
    let {question , answer} = obj_data
    // console.log(data)
    let[bool , setBool] = useState(true)
    let handleBool = () =>{
        setBool(!bool)
    }
  return (
    <div className='Toggle'>
        <div className="toggle-container">
            <button onClick={handleBool}>
                <div className='que'>{question}</div>
                <div className='ans'>{bool ? "" : answer}</div>
            </button>
        </div>
      
    </div>
  )
}

export default TogglQuestion