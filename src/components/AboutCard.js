import React from 'react'


function AboutCard( props ) {
    return (
       <React.Fragment>
             <div className="container">
    <h4 className="my-2">{ props.title }</h4>
        <hr/>

        <div className="row featurette mt-5">
            <div className="col-md-7 mt-5 ">
                <h2 className="featurette-heading ">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
    <p className="lead mt-5">{ props.text}</p>
            </div>
            <div className="col-md-5">
                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style={{"width": "500px", "height": "500px" }} src={props.imgsrc} data-holder-rendered="true"/>
            </div>
        </div>
</div>

       </React.Fragment>
    )
}

export default AboutCard
