import React,{Component} from 'react';
import Login from './screens/Login/Login'
import {Cookies} from 'react-cookie'
const cookies=new Cookies()
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      isLogin:false
    }
  }
  updateLogin=(status)=>{
    this.setState({
      isLogin:status
    })
  }
  componentDidMount(){
    const accessToken=cookies.get('accessToken')
    if(accessToken){
      this.updateLogin(true)
    }
  }
  render(){
    return (
      <div>
        {!this.state.isLogin && <Login updateLogin={this.updateLogin}/>}
        {this.state.isLogin && (
          <div>
            <h1>Kamu sudah Login</h1>
          </div>
        )}
      </div>
    )
  }
}

export default App;
