import React,{useState} from "react";
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import {CopyToClipboard} from "react-copy-to-clipboard"
export default function TextForm(props) {
  const [text,setText]=useState('Enter text here')
  
  const [atext]=useTypewriter({
    words:["Convert to UpperCase",
      "Convert to LowerCase",
      "Convert to Sentence Case",
      "Remove Extra Spaces"
    ],
    loop:{},
  })
  const hup=()=>{
    let newtext=text.toUpperCase()
    setText(newtext)
    props.showAlert("Uppercase Converted sucsessfully","success")
  }
  const honc=(e)=>{
    setText(e.target.value)
  }
  const hlp=()=>{
    let newtext=text.toLowerCase()
    setText(newtext)
    props.showAlert("lowercase Converted sucsessfully","success")
  }
  const clrscr=()=>{
    setText('')
    props.showAlert("screen has been cleared","success")
  }
  const rmes=()=>{
    let nt=text.split(/[ ]+/);
    setText(nt.join(" "))
    props.showAlert("Extra Spaces Has Been Removed","success")
  }
  function tsc() {
    let context=""
    let p=text.split('\n').filter((ele)=>{return ele.length!==0})
    for(let i of p){
      for(let j of i.split(/[ ]+/)){
        if(j.length!==0){

          context=context+j[0].toUpperCase()+j.slice(1,j.length).toLowerCase()+" "
        }
      }
      context=context+"\n"
    }
    setText(context)
    props.showAlert("Text has Converted to Sentence case","success")
  }


  return (
    <>
    <div className="container1 mx-7">
      <div style={{height:"50px"}} className="my-5"><h1 className="my-4" >Enter Text Here :<span id="myspan" >{atext}</span><Cursor/></h1></div>
          
          <div>
            <textarea className="form-control" id="mybox" rows="8" cols="150" value={text} onChange={honc} style={{backgroundColor:props.mode ==='light'?'white':'lightgrey',color:props.mode ==='light'?'black':'brown'}}></textarea>
          </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hup}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={hlp}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={tsc}>Convert to SentenceCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clrscr}>Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={rmes}>Remove Extra space</button>
            <CopyToClipboard text={text} onCopy={()=>{ props.showAlert("Copied to Clipboard","success")}}><button disabled={text.length===0} className="btn btn-primary mx-1 my-1">Copy</button></CopyToClipboard>
    </div>
    <div className="container2 mx-3 my-2">
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words {text.length}chracters</p>
      <p>{0.008*text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length!==0?text:"No text to preview"}</p>
    </div>
    </>
  )
}
