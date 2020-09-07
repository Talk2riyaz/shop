import React from 'react'

const Alert = () => {
    return (
        <React.Fragment>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Today Officer </strong> For All Engneering Student.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    </div>

        </React.Fragment>
    )
}

export default Alert
