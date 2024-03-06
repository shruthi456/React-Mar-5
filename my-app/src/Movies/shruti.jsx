import React from 'react'
class shruti extends React.Component{
    movie_Name="Eagle"
    movie_Img="https://images.search.yahoo.com/search/images;_ylt=Awrjc2lgAOhlWzkBRkpXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=eagle++telugu+movie+images&fr2=piv-web&type=E210US1274G0&fr=mcafee#id=7&iurl=https%3A%2F%2Fwww.filmibeat.com%2Fimg%2F2023%2F11%2Feagle-1699255103.jpg&action=click"
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
                        <img src={this.movie_Img}alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
 }
}
export default shruti