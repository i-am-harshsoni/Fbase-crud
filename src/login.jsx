/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Welcome from "./Welcome.png"
import websiteLogo from "./websiteLogo.png"
import bundle_login from "./bundle_login.jpeg"
import { useState } from 'react';
import DataBase from './firebaseconnection'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'



export function LoginPage() {
    const [logincode, setLogincode] = useState(false);
    let DataSet;
    const [userEmail, setUserEmail] = useState('');
    const [userPass, setUserPass] = useState('');
   let LoginMsg
    const collectionUsers = collection(DataBase, 'Users');
    let [udata, setUdata] = useState([]);
    const getUsers = async () => {
        const data = await getDocs(collectionUsers);
        setUdata(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        udata.map((user) => {
            let EmailId = user.Email
            let PassWord = user.Password
            if(EmailId === userEmail && PassWord === userPass){
                console.log('correct');
                let LoginMsg = "Login Done Your are user in our website";
            } 
    });
    }

    
    if (logincode === true) {
        DataSet = <div className='text-center'>
            <img className="logosize mb-2" alt="LOGO" src={websiteLogo} />
            <p className="h2">Login Now !</p>
            <p className="text-muted h6">Login to our site to know more about us.. </p>
            <div><form><div id="incorrectpass"></div><div className="row form-group">
                <div className="col-md-6 mb-3 m-auto">
                    <input type="text" onChange={(e) => { setUserEmail(e.target.value) }} className="form-control" placeholder='Enter your email' />
                    {userEmail}
                </div></div>
                <div className="row form-group">
                    <div className="col-md-6 m-auto">
                        <input type="text" onChange={(e) => { setUserPass(e.target.value) }} className="form-control" placeholder='Enter your Password' />
                        {userPass}
                    </div></div>
                <div className="row form-group">
                    <div className="col-md-6 mb-3 m-auto mt-4">
                        <button type="button" onClick={() => { getUsers() }} className="btn btn-primary btn-md mt-auto px-5 py-2" >Login Now</button>
                    </div></div>
            </form>
                <p className="text-muted ">Forget Password? &nbsp;<a
                    href="chkclick.html" className="link-primary forgots">Click
                    here</a>
                    <p className="text-muted">New to Website? &nbsp;
                        <a href="register.html" className="link-primary forgots">Register Now!!</a>
                    </p></p>
                <span style={{ color: '#0D70FD' }} onClick={() => setLogincode(!logincode)}>
                    Roll back to home</span>

            </div></div>

    } else {
        DataSet = <div className="mt-5 pt-5">
            <div className='row'>
                <div className='col'>
                    <p> <h2>Evaluating the Education System</h2>
                        <div className='col-md-12 text-left'>
                            Introduction:
                            The education system plays a pivotal role in shaping the future<br />
                            of societies by imparting knowledge, skills, and values to individuals.<br />
                            However, in recent years, there has been growing concern about the <br />
                            effectiveness and relevance of traditional education models. <br />
                            This article examines the challenges faced by the education system and <br />
                            explores potential opportunities for improvement.</div></p>
                    <button onClick={() => setLogincode(!logincode)}
                        type="sumbit"
                        className="btn btn-primary btn-md mt-auto px-5 py-2">
                        Click here to Login Now
                    </button>
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <div className="container mt-5 mb-5 shadow bg-white rounded text-center">
                <h1 className='Welcometxt pb-4 pt-4'>Welcome to our Website</h1>
                <img src={Welcome} alt="welcome" style={{ height: '450px', width: '300px' }} />
            </div>
            <div className="container mt-5 mx-2 bg-white rounded">
                <div className='row'>
                    <div className='col md-6' >
                        <img alt="schools" className='loginimg' src={bundle_login} />
                    </div>
                    <div className='col md-6 pt-4 pb-4'>
                        {DataSet}
                    </div>

                </div>
            </div>
            <div className="container mt-5 shadow bg-white rounded">
                <div className='row text-center'>
                    <div className='col md-6 pt-4 pb-4'>{LoginMsg}</div>
                    <div className='col md-6 pt-4 pb-4'>Column 04</div>
                </div>
            </div>
            <div className="container mt-5 shadow bg-white rounded">
                <div className='row text-center'>
                    <div className='col md-6 pt-4 pb-4'>Column 01</div>
                    <div className='col md-6 pt-4 pb-4'>Column 04</div>
                </div>
            </div>
        </div>
    )
}