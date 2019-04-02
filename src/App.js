import React, { Component } from 'react';
import marked from 'marked';
import TextareaAutosize from 'react-textarea-autosize';




class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          markdown: {content: "# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n***Noel Miranda***"}
      }
      this.handledChange = this.handledChange.bind(this)
      this.rawMarkup = this.rawMarkup.bind(this)

  }
  
  rawMarkup() {
      let rawMarkup = marked(this.state.markdown.content, {sanitize: true});
      return { __html: rawMarkup }
    }

  handledChange(event){
      const  change = this.state.markdown;
      change.content = event.target.value;
      this.setState({markdown: change})
  }
  render(){
      return(
    <div className = " container-fluid background justify-content-center">
        <h1 className = "titulo mt-5">Markdown Live Preview</h1>
        <hr className = "line mx-auto"/>     
           
           <div className="row  m-1 justify-content-center">
            
            <div className=" textMarkdown col-md-5  flex-column  justify-content-center mb-md-5  rounded-left">
            <h3 className= "enterTitleText mt-4" >Enter Markdown</h3>
          <form>                                         
              <TextareaAutosize
                className = "textArea"
                value = {this.state.markdown.content}
                onChange = {this.handledChange} 
              />                
          </form>

             </div>
             <div className=" resultArea  col-md-5 flex-column justify-content-center  mb-5 rounded-right">
             <h3 className = "result mt-4">Result</h3>
             <div dangerouslySetInnerHTML = {this.rawMarkup(this.state.markdown.content)} />
             </div>
           </div>
                     
      </div>
      )
  }
}




export default App