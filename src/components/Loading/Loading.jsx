import React from 'react'
import loading from './loading.gif';

const Loading = () => {

  return (
    <div className='text-center'>
      <img src={loading} alt="Loading..." width={150} height={150} />
    </div>
  )
}

export default Loading