import './All_Pages.css';
import planeImg from "../Images/plane.png";
import {BsStarFill} from "react-icons/bs"

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="analytics">
                <img src={planeImg} width="60px" height="60px" style={{borderRadius:"5px"}} alt="planeimage" />
                <div className="analyticsInfo">
                <h4>Analytics Dashboard</h4>
                <p>Dashboard is an online report where your website data from ecommerce to web analytics is displayed</p>
                </div>

            </div>

           
            <div className="createNew">

                <button className="starIcon"><BsStarFill/></button>
                <button className="createBtn">+ Create New</button>
            </div>

            </div>
        
    )
}