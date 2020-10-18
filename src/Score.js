import React,{Component} from 'react'
class Score extends Component{
    constructor(props){
      super(props)
      this.state={
        scoreNow:0
      }
      this.minus=this.minus.bind(this)
    }
    minus(){
      this.setState((prevState)=>({
        scoreNow:prevState.scoreNow-1
      }))
    }
    plus=()=>{
      this.setState((prevState)=>({
        scoreNow:prevState.scoreNow+1
      }))
    }
    render(){
      return (
        <div style={{
          display:'flex'
          
        }}>
          <button 
          onClick={this.minus}
          style={{
            marginRight:'10px',
            width:'50px'
          }}
          >
            -
          </button>
  
          <h1>{this.state.scoreNow}</h1>
  
          <button 
          onClick={this.plus}
          style={{
            marginLeft:'10px',
            width:'50px'}}
            >
              +
          </button>
        </div>
      )
    }
  }

export default Score