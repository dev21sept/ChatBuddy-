import { useRef, useState } from "react"
import webService , {urls} from './services/WebService'
import {changeUserInfo} from './reduxconfig/UserSlice'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
function Login()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [msg,setMsg] = useState("")
 
    var mailBox = useRef()
    var passBox = useRef()

    var login = async (event)=>
    {
        setMsg("")
        event.preventDefault()
                  
          var  emm = mailBox.current.value
          var pass = passBox.current.value
        
        console.log(`${emm} : ${pass}`);
        var ob = {email:emm,password:pass}
        const response = await webService.postApiCall(urls.LOGIN,ob);
        setMsg(response.data.message)
        console.log(response.data)
        if(response.data.status)
        {
            var info = {...response.data.data,isLogin:true}
            dispatch(changeUserInfo(info))
            event.target.reset()
            navigate("/home")
        }        
    }
    return <>
        <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:"1px #dee2e6"}}>Login</h1>
                <h1 className="position-absolute text-uppercase text-primary">User Login</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        <form onSubmit={login}>                            
                            <div className="form-row mt-3">
                            <div className="control-group col-sm-6">
                                <input type="email" ref={mailBox} className="form-control p-4" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="control-group col-sm-6">
                                <input type="password" ref={passBox}className="form-control p-4" id="password" placeholder="Your Password" required />
                            </div>
                            </div>
                            <div className="form-row mt-3">                          
                            <div className="control-group col-sm-6">
                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Login</button>
                            &nbsp;
                            
                            </div>
                            <div className="control-group col-sm-6">
                            <b className="text-danger">{msg}</b>
                            </div>
                            </div>
                        </form>
                        
                        </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
}
export default Login;