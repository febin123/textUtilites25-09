import React,{useState} from 'react'



export default function TextForm(props) {

    const[text,setText]=useState('')

    /* convert into Uppercase*/
    const upperCase=()=>{
       
        const result=text.toUpperCase();
        setText(result)
        console.log("uppercase converted")
        props.showAlert('Converted','success')
    }
    /* convert into lowercase*/

    const lowerCase=()=>{
        const result=text.toLowerCase();
        setText(result);
        console.log("lowercase converted")
        props.showAlert('Converted','success')
    }
    /*Clear the text */
    const clearText=()=>{
        setText("")
    }
    /*Copy the text */
    const copyText1=()=>{
        var text=document.getElementById('exampleInputEmail1');
            text.select();
            navigator.clipboard.writeText(text.value);
    }
    const onChan=(e)=>{
        setText(e.target.value)
    }
    
  return (
    <div>
    
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label" 
                style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</label>
                <input type="text" className="form-control" value={text} id="exampleInputEmail1" placeholder='Enter the text' aria-describedby="emailHelp" onChange={onChan}
                style={{backgroundColor:props.mode==='dark'?'grey':'white'}}/>
                
                <button className="btn btn-primary my-4" onClick={upperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary my-4 mx-4" onClick={lowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary my-4 mx-4" onClick={clearText}>Clear</button>
                <button className="btn btn-primary my-4 mx-4" onClick={copyText1}>Copy Text</button>
                </div>

                <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length-1} words and {text.length} character</p>
                </div>

                <div className="container"> 
                    <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview the text</h2>
                    <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something..."}</p>
                </div>
  
                
        
    </div>
  )
}
