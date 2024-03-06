import React from 'react'
class Movies extends React.Component{
    movie_Name="Eagle"
    movie_Img="data:image/jpeg;base64,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"
    render(){
        return <div className='container mt-5'>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-white">
                        <h3>Movies Details...</h3>
                    </div>
                    <div className="card-body">
                          <h4>Movie Name:{this.movie_Name}</h4> 
                        <img src={this.movie_Img} alt=""/>
                        <h2>component</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
 }
}
export default Movies