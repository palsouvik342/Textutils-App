import React, { useState } from 'react';

export default function TextForm(props) {
  let onHandleSubmit = (e)=>{
    e.preventDefault();
  }
  const [text, setText] = useState("");
  let handleUpClick = ()=>{
    setText(text.toUpperCase());
    props.alert("Converted to Uppercase","success");
  }
  let handleChange = (e)=>{
    setText(e.target.value)
  }
  let handleLoClick = ()=>{
    setText(text.toLowerCase());
    props.alert("Converted to Lowercase","success");
  }
  let clearText = ()=>{
    setText("");
    props.alert("Cleared","success");
  }
  let handleCopy  = ()=> {
    let myText = document.getElementById('myText');
    // console.log(myText.value);
    navigator.clipboard.writeText(myText.value);
    props.alert("Text Copied","success");
  }
  let handleExtraSpaces = ()=>{
    let unHandledText = document.getElementById('myText').value;
    let handledText = unHandledText.trim().split(/\s+/);
    setText(handledText.join(" "));
    props.alert("Spaces Removed","success");
  }
  return (
    <>
    <div className='container' style={{color:'white'}}>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1"></label>
            <textarea name="name" id="myText" rows="10" value={text} className="form-control" onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#00004d':'#fff',color:props.mode==='dark'?'#fff':'#000'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-danger my-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={clearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </form>
    </div>
    <div className="container my-4 "  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((item)=>{return item!==''}).length} Words and {text.length} Characetrs</p>
      <p>You will finish reading in {text.split(" ").filter((element)=>{return element.length!==0}).length*0.008 } minutes</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : 'Nothing to Preview'}</p>
    </div>
    </>
  )
}
