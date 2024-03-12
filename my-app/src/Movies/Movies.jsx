import React,{Component} from 'react'
class Movies extends Component{
    movie_Name="Eagle"
    movie_Img = 'https://images.indianexpress.com/2023/11/eagle-06112023.jpg'
    render(){
        return <div className='container mt-5'>
           <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h3>Movie Details.....</h3>
                    </div>
                    <div className="card-body">
                      <h4>Movie Name:{this.movie_Name}</h4>
                      <img src={this.movie_Img} alt="" />
                    </div>
                </div>
            </div>
           </div>
        </div>
    }
}
export default Movies