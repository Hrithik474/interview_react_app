import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TogglQuestion from './TogglQuestion'

const QuestionAnswer = () => {
  let [quizData , setQuizData] = useState([])
  let fetchApi = async () =>{
    let apiResp = await axios.get('http://localhost:3000/quiz')
    setQuizData(apiResp.data)
  
  }
  useEffect(()=>{
    fetchApi()
  },[])
  // console.log(quizData)
  let [bool , setBool] = useState(true)
  let handleToggle = () =>{
    setBool(!bool)
  }
  let filterBtnNames = ['ALL', 'HTML' , 'CSS' , 'JSON']
  let [categoryData , setCategoryData] = useState([])
  let handleBtn = (e) =>{
    let btnText = e.target.innerText

    // todo : filtering array elemnts based on category
    let filteredArray = quizData.filter((elem)=>{
      return(elem.category === btnText)
    })
    
    if(btnText == 'ALL' )
    {
      setCategoryData(quizData)
    }
    else{
      setCategoryData(filteredArray)
    }

  }
  return (
    <div className='qa-box'>
      <h1>Question & Answers</h1>
      <div className="qa-container">
        <div className="filterbox">
          <ul>
            {filterBtnNames.map((elem , index)=>{
              return(
                <li key={index}>
                  <button onClick={handleBtn}>{elem}</button>
                </li>
              )
            })}
          </ul>
        </div>
        {categoryData.map((obj , index)=>{
          return(
            <div key={index}>
              <TogglQuestion  obj_data={obj}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuestionAnswer