import React from 'react'

export default function Alert(props) {
    return (


        <div className="alert alert-danger" role="alert">
            < strong> {props.alert.type} </strong> :  {props.alert.msg} 
            < button type="button" className="btn - close"
                data-bs-dismiss="alert" aria-label='close'  ></button>
        </div>


    )
}
