import React, {useState} from 'react'

export default function TextForm(props) {
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleClearText=()=>{
        setText('');
        props.showAlert("Cleared Succesfully","success");
    }


    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText]=useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white':'black',
            color: props.mode==='light'? 'black':'white'
        }} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>  
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Priview</h2>
        <p>{text.length>0? text:"Enter something in above textbbox to preview here"}</p>
    </div>
    </>
  )
}
