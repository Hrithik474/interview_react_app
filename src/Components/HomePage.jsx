import React from 'react'

const HomePage = () => {
  return (
    <div className='home-container'>

      <div className='hero-section'>
        <h1>Interview Question Portal</h1>

        <p>
          Practice interview questions, explore different categories,
          and add your own questions and answers easily.
        </p>

        {/* <div className='home-btns'>
          <button>Start Practice</button>
          <button>Explore Questions</button>
        </div> */}
      </div>

      <div className='features-section'>

        <div className='feature-card'>
          <h2>HTML</h2>
          <p>Basic to advanced HTML interview questions.</p>
        </div>

        <div className='feature-card'>
          <h2>CSS</h2>
          <p>Practice styling and responsive design questions.</p>
        </div>

        <div className='feature-card'>
          <h2>JSON</h2>
          <p>Learn API and JSON based interview concepts.</p>
        </div>

      </div>

    </div>
  )
}

export default HomePage