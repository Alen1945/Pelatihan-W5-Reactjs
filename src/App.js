import React,{Component} from 'react';
import Login from './screens/Login/Login'
import Category from './screens/Category/Category'
import DetailCategory from './screens/Category/DetailCategory'
import {Cookies} from 'react-cookie'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
const cookies=new Cookies()

class Admin extends Component{
  componentDidMount(){
    console.log(this.props)
    // const accessToken=cookies.get('accessToken')
    // if(!accessToken){
    //   this.props.history.push('/login')
    // }
  }
  render (){
    return <h1>Halaman Admin: {this.props.match.params.slug}</h1>
  }
  
  
}
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
  handleLogout=()=>{
   this.updateLogin(false)
   cookies.remove('accessToken')
  }
  render(){
    return (
      <BrowserRouter>
        <h1>Navbar</h1>
        <Switch>
          <Route exact path='/' component={Category}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/product/:slug' component={Admin}/>
          <Route exact path='/detail/:id' component={DetailCategory}/>
          <Redirect to='/404'/>
        </Switch>
        <h1>Footer</h1>
      </BrowserRouter>
    )
  }
}

export default App;
