

export default function About(props) {
  let mystyle={
   color:props.mode==='dark'?'#00ff00':'black',
   backgroundColor:props.mode==='dark'?'black':'white'
  }
 
   return (
     <>
       <h2 className="my-4"><u>About Us</u></h2>
         <div className="accordion" id="accordionExample">
         <div className="accordion-item " >
           <h2 className="accordion-header">
             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Analyze Your text
             </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={mystyle}>
               <strong>Analyze Your Text.</strong> Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or Convert to Upper Case,Lower-case,etc..
             </div>
           </div>
         </div>
         <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               Free to use
             </button>
           </h2>
           <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={mystyle}>
               <strong>Free to use.</strong> 
               TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                     </div>
             </div>
           </div>
         </div>
         <div className="accordion-item">
           <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Browser Compitable
             </button>
           </h2>
           <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={mystyle}>
               <strong>Browser Compatible.</strong> 
               This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
 
             </div>
           </div>
         </div>
      
 
     </>
   )
 }