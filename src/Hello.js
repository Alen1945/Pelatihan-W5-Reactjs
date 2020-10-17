import React,{Component} from 'react'

class Hello extends Component{
    constructor(props){
      super(props)
    }
    render(){
    return <h1>hello {this.props.name} umur kamu pasti {this.props.age}</h1>
    }
}

export default Hello