import React, { Component } from 'react';
function Cards(props) {
    return ( 
        <div>
            
        <div className="card" style={{width: "270px",marginTop:"100px",backgroundColor:"#fdfbf9" }}>
        <img src={props.img} className="card-img-top" id='fapic' style={{backgroundColor:"#fdfbf9",height:"290px",color:"#546d89",marginTop:"20px"}}></img>
        <div className="card-body">
          <h5 className="card-title" id='cardtitle'>{props.name}</h5>
          <p className="card-text" id='cardtext'>{props.type}</p>
        </div>
      </div>
      </div>
     );
}

export default Cards;