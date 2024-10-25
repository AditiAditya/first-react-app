import React, { useState } from 'react';

export default function TextForm(props) {

    const onhandclick = () => {
        console.log("button was clicked " + text)
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleonchange = (event) => {
        console.log("ON CHANGE ")
        setText(event.target.value)
    }

    // const toitalicchange = () => {
    //     let newtext = text.fst-italic
    //     setText(newtext)
    // }

    const [text, setText] = useState("Enter value here444444 ");

    return (
        <>
            <div className='container'>
                <h1 >{props.heading}</h1>
                <div className="mb-3 ">
                    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1" /> */}

                    <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8" ></textarea>
                </div>
                <button className='btn btn-primary ' onClick={onhandclick}>Convert to Uppercase</button>
                 {/* <button className='btn btn-primary  mx-2' onClick={toitalicchange}>Convert to italic </button>  */}
            </div>
            <div className='container  my - 3'>
                <h2>hey this is under 2 container</h2>
                <p>{text.split(" " ) .length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" " ) .length } minutes reads </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}


