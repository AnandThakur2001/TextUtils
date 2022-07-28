import React, { useState } from 'react';




export default function TextForm(props) {

    const handleUPclick = ()=>{
     //   console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        settext(newText)
        props.showAlert("converted to uppercase!","success")
    }
    
    const handleloclick = ()=>{
     //   console.log("lowercase was clicked" + text);
        let newText=text.toLowerCase();
        settext(newText)
        props.showAlert("converted to lowercase!","success")
    }
    const handleclearclick = ()=>{
           let newText=' ';
           settext(newText)
       }
     
    const handleOnChange = (event)=>{
        console.log("On change")
        settext(event.target.value);

    }
    const removeExtraSpaces = () => {
      let newText =text.split(/[ ]+/);
      settext(newText.join(" "))
    }
    
    const [text, settext] = useState('');

  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>  
        <div className="mb-3">
        
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#0b082c':'white',
        color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange}id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPclick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>removeExtraSpaces</button>

    </div>
         <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
         <h2>Your Text summary</h2>
         <p>{text.split(" ").length}words and {text.length} characters</p>
         <p>{0.008 * text.split (" ").length}minutes</p>
         <h1>Preview</h1>
         <p>{text.length>0?text:"enter something in the textbox above to preview to it here"}</p>
         </div>
    </>
  )
}
