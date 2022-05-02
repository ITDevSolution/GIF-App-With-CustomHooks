import React from 'react'

export const GifItem = ({item}) => {

    const {title,url} = item

  return (
    <div className="card">
        <img src={url} alt={title} />
        <p> { title } </p>
    </div>
  )
}
