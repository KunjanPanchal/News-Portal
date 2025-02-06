import React from 'react'
import './NewsCard.css'

const NewsCard = (props) => {
  return (
    <div className='card'>
      <div className="image">
        <img src={props.image} alt="No iamge"/>
      </div>
      <div className="content">
        <h3 className="title">{props.title}</h3>
      </div>
      <a href={props.readMoreUrl}>Read More</a>
    </div>
  )
}

export default NewsCard
