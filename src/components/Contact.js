import React from 'react'

const Contact = () => {
    return (
        <React.Fragment>
           <div className="container my-5">
        <h3>Contact Us for any query</h3>
        <hr/>
        <form className="my-3">
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputEmail4">Name</label>
                    <input type="text" className="form-control" id="name"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Reason for contact</label>
                    <input type="Text" className="form-control" id="inputPassword4"/>
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress"/>
            </div>
            <div className="form-group">
                <label for="textarea">Message</label>
                <input type="textarea" className="form-control" id="inputAddress2"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </div>

    
    

        </React.Fragment>
    )
}

export default Contact
