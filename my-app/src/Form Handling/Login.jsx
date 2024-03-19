import React from "react"
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    updateHandler=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
        submitHandler=(event)=>{
            event.preventDefault();
        }
      
    
    render(){
        return(
           
                <div>
                     <form onSubmit={this.submitHandler}>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <label>Email</label>
                    <input type="text" onChange={this.updateHandler} name="email"/>
                    <br/>
                    <label>password</label>
                    <input type="text" onChange={this.updateHandler} name="password"/>
                    <br/>
                    <input type="submit" value="Login"/>
                
                    </form>
                </div>
           
        )
    }
}
export default Login