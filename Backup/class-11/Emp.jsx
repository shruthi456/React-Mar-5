import React from "react"
import Axios from "axios"
class Emp extends React.Component{

constructor(props){
    super(props)
    this.state={
        empData:{}
    }
}
componentDidMount(){
Axios.get("https://dummyjson.com/users")
.then((resp)=>{
    this.setState({empData:resp.data})
})
.catch(()=>{

})
}
render(){
    return(
        <div className="container">
        <div className="row">
        <pre>{JSON.stringify(this.state.empData)}</pre>
        
        {
            Object.keys(this.state.empData).length>0? <React.Fragment>
             <div className="col-md-8">
             <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            { 
            this.state.empData.users.map((user)=>{
    return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
           </tr>
            })
            }
            </tbody>
            </table>
            </div>
            </React.Fragment>:<h2>No Data</h2>
}
            </div>
            </div>
            
    )
}
} 


export default Emp