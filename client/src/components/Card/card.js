import React from 'react'


 


function Cards({el}) {
  return (
<div className="card" style={{ width: "18rem" }}>
  <img src={el.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{el.name}</h5>
    <p className="card-text">
    {el. description}
   <p> price:{el.price}</p>
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

  )
}

export default Cards