import React from 'react';
import './Loading.css'

const Loading = ()=> {
  const counter = 10;

  return Array(counter).fill(
    <div className="card-loading">
      <div className="img-loading">

      </div>
      <div className="name-loading">

      </div>
    </div>
  )
}

export default Loading;