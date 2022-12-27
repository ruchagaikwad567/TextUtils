import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was Clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Coverted to UpperCase","success");
    }

    const handleLoClick=()=>{
        console.log("LowerCase was Clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleClearClick=()=>{
        console.log("ClearText was Clicked");
        let newtext='';
        setText(newtext);
        props.showAlert("Text Cleared","success");
    }

    const handleAlClick=()=>{
        console.log("AlternatingCase was Clicked");
        var chars = text.toLowerCase().split("");
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  let newtext=chars.join("")
        setText(newtext);
        props.showAlert("Converted to AlternatingCase","success");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));   
        props.showAlert("Extra Spaces removed" , "success");
        
      }

      const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speech successfully done","success");
      }  

      const handlecopy =() =>{
        console.log("I am  a copy")
        var text=document.getElementById("myBox");
        text.select();
        text.setselectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied successfully","success")

      }
    
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const[text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
      <div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows={8}/>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleAlClick}>Convert to AlternatingCase</button>
<button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
<button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>Copy</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary </h2>
        <p>Total number of words in the text : {text.split(" ").length}</p>
        <p>Total number of characters in the text : {text.length}</p>
        <p>The text will require {0.008*text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    
</>
    

    
  )
}
