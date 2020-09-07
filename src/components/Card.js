import React from 'react'

const Card = ( props ) => {
    return (
  <React.Fragment>
        <div className="col-lg-4 col-md-4 co-10 text-center mt-3">
                <div className="card " style={{ width:'18rem' }}>
                    <img src={props.imgsrc} className="card-img-top" alt="..."/>
                    <div className="card-body">
    <h3>{ props.title }</h3>
    <p className="card-text">{ props.text }</p>
                    </div>
                </div>
            </div>
  </React.Fragment>
    )
}

export default Card
