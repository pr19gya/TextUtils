import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick=()=>{
      // console.log("Lowercase was clicked" + text);
      let newText=text.toLowerCase();

      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
  }

  const handleClearClick=()=>{
    // console.log("Lowercase was clicked" + text);
    let newText='';

    setText(newText);
    props.showAlert("Text is Cleared", "success");
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const[text, setText]=useState('Enter Text Here');
    //setText('New Text');

    
  return (


   
  <>
  <div className="mb-3">
    <label htmlFor="Text" style={{color : props.mode==='dark'?'white':'black'}} className="form-label my-3">{props.heading} </label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white'}} id="exampleInputPassword1" rows="9"/>
  </div>
  
  <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
  <button type="submit" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-1 my-2">Speak</button>
  <h3 className="my-2" style={{color : props.mode==='dark'?'white':'black'}}>Your Text Summary</h3>
  <div>{text.split(" ").filter((element)=>{return element.length!=0}).length} words</div>
  <div >{text.length} characters</div>
  <div >{text.split(".").length-1} sentences</div>
  

  </>
  )
}
