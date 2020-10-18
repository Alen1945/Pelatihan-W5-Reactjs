import React, {Component} from "react"
import {postData} from '../../helpers/CRUD'
import {Cookies} from 'react-cookie'
const cookies=new Cookies()
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            form:{
                username:'',
                password:''
            },
            onSubmit:false
        }
    }
    handleChange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        this.setState((prevState)=>({
            ...prevState,
            form:{
               ...prevState.form,
               [name]:value 
            }
        }))
    }
    handleSubmit=async (e)=>{
        e.preventDefault()
        this.setState((prevState)=>({
            ...prevState,
            onSubmit:true
        }))
        try {
            const response =  await postData('/auth/login',this.state.form)
            cookies.set('accessToken',response.data.data.accessToken,{
                path:'/',
                maxAge: 24 * 60 * 60
            })
            this.setState((prevState)=>({
                ...prevState,
                form:{
                    username:'',
                    password:''
                }
            }))
            this.props.updateLogin(true)
        } catch (error) {
            console.log(error.response)
        }
        this.setState((prevState)=>({
            ...prevState,
            onSubmit:false
        }))
    }
    render (){
        return (
            <div>
                <h1>Login</h1>
                {this.state.onSubmit && <h5>Loading .....</h5>}
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='input username'
                        value={this.state.form.username} 
                        onChange={this.handleChange}
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='input password'
                        value={this.state.form.password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login