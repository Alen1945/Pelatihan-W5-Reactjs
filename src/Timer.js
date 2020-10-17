import React,{Component} from 'react'
class Timer extends Component{
    constructor(props){
      super(props)
      this.state={
        time:props.timeValue
      }
    }
    updateTime=()=>{
      this.setState((prevState)=>{
        return {
          time:prevState.time + 1
        }
      })
    }
    componentDidMount(){
      this.addInterval=setInterval(this.updateTime,1000)
    }
    componentDidUpdate(prevState,prevProps){
      console.log('ini componentdidupdate')
      if(this.state.time===20){
        clearInterval(this.addInterval)
      }
    }
    componentWillUnmount(){
      console.log('ini componentWillunMount')
      clearInterval(this.addInterval)
    }
    render(){
      return (
      <div>
        <h1>Timer: {this.state.time}</h1>
        {this.state.time===20 && <h3>Waktu Selesai</h3>}
      </div>
      )
     
    }
  }
  export default Timer