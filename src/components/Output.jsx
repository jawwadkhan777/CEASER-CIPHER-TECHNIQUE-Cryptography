import React from 'react'

const Output = ({output}) => {
    console.log(output);
    
  return (
    <div className='output-container'>
        <h4>Result:</h4>
        <p>{output}</p>
    </div>
  )
}

export default Output