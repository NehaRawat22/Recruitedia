import React from 'react'
import './Desc.css';


const Desc = (props) => {
  return (
    <div className="mainContent">
    <div className="container">
        <div className="imgBx">
            <img src={props.image} alt=""/>
        </div>
        <div className="details">
            <div className="content">
                <h2>{props.cname}<br/>
                    <span>{props.role}</span><br/>
                    <span>{props.loc}</span>
                </h2>
                <p>
                {props.desc}
                </p>
                <h5>Eligibility Criteria: </h5>
                <div className="product-colors">
                    <p>{props.eligible}</p>
                </div>
                <h3>Rs. {props.sal}</h3>
                <button>Apply Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Desc
