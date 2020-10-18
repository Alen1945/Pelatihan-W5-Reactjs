import React,{Component} from'react'
import './assets/styles.css'

class Room extends Component{
    constructor(props){
        super(props)
        this.state={
            form:{
                nameMember:''
            },
            memberRoom:[]
        }
    }
    inputForm=(e)=>{
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
    addMember=(e)=>{
        e.preventDefault()
        this.setState((prevState)=>{
            return {
                form:{
                    nameMember:''
                },
                memberRoom:[...prevState.memberRoom,prevState.form.nameMember]
            }
        })
    }
    removeMember=(name)=>{
        const member=this.state.memberRoom.filter(v=> v !== name)
        this.setState((prevState)=>({
            ...prevState,
            memberRoom:member
        }))
    }
    render(){
        return (
            <div className='container'>
                <h1 className='title'>Room</h1>
                <h2 className='sub-title' >Masuk Room</h2>
                <div className='container-form'>
                    <form className='form-room' onSubmit={this.addMember}>
                        <input 
                            type='text' name='nameMember' 
                            placeholder='masukan nama' 
                            className='input-custom' 
                            onChange={this.inputForm}
                            value={this.state.form.nameMember}
                        />
                        <button type='submit' className='btn-custom'>Masuk</button>
                    </form>
                </div>
                <h2 className='sub-title'>Anggota Room</h2>
                <ul>
                {
                    this.state.memberRoom.map((v)=>(
                        <li>
                            {v}
                            <button onClick={(e)=>this.removeMember(v)}>Delete</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default Room