import axios from 'axios'
import React, { useState } from 'react'

const AddQa = () => {
    let [formData , setFormData] = useState({category: "", question : "" , answer : ""})
    let handleInput = (e) =>{
        let key = e.target.name
        let val = e.target.value
        setFormData({
            ...formData,
            [key] : val
        })
        // console.log(key , val)
    }
    let handleSubmit = async(e) =>{
        e.preventDefault()
        // console.log(formData)
        await axios.post('http://localhost:3000/quiz', formData)
        setFormData({category : "" , question: "" , answer : ""})
    }
  return (
    <div className='add-qa'>
        <h1>Add Question and answer</h1>
        <div className="formbox">
            <form onSubmit={handleSubmit} className='forms-ques'>
                <select name='category' value={formData.category} onChange={handleInput} required>
                    <option value="">----Select category---</option>
                    <option value='HTML'>HTML</option>
                    <option value='CSS'>CSS</option>
                    <option value='JSON'>JSON</option>
                </select>
                <input type="text" placeholder='Enter the question' onChange={handleInput} name='question' value={formData.question} required/>
                <input type="text" placeholder='Enter the answer' onChange={handleInput} name='answer' value={formData.answer} required />
                <button className='btns'>Add Question</button>

            </form>
        </div>
      
    </div>
  )
}

export default AddQa