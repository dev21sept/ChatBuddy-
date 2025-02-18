import { useRef, useState } from "react"
import webService , {urls} from './services/WebService'

function Register()
{
    const [msg,setMsg] = useState("")
    var nameBox = useRef()
    var phoneBox = useRef()
    var mailBox = useRef()
    var passBox = useRef()
    var genBox = useRef()

    var register = async (event)=>
    {
        setMsg("")
        event.preventDefault()
        
           var nm = nameBox.current.value;
           var pho = phoneBox.current.value;
           var em = mailBox.current.value;
           var pas = passBox.current.value;
           var gen = genBox.current.value;
        
           console.log(`${nm} : ${em} : ${pas} : ${pho} : ${gen}`);
           var ob = {name:nm,phone:pho,email:em,password:pas,gender:gen}
     
        const response = await webService.postApiCall(urls.REGISTER,ob);
        console.log(`Response is : ${response}`);
        console.log("Response is : " +JSON.stringify(response));
        setMsg(response.data.message)
      
        event.target.reset()
    }

    return <>
        <div className="container-fluid py-5" id="contact">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke:"1px #dee2e6"}}>Registeration</h1>
                <h1 className="position-absolute text-uppercase text-primary">User Register</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="contact-form text-center">
                        <div id="success"></div>
                        
                        <form onSubmit={register}>
                            <div className="form-row">
                                <div className="control-group col-sm-6">
                                    <input type="text" ref={nameBox} className="form-control p-4" id="name" placeholder="Your Name" required/>
                                </div>
                                <div className="control-group col-sm-6">
                                    <input type="text" ref={phoneBox} className="form-control p-4" id="phone" placeholder="Your Phone" maxLength={10} minLength={10} required />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                            <div className="control-group col-sm-6">
                                <input type="email" ref={mailBox} className="form-control p-4" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="control-group col-sm-6">
                                <input type="password" ref={passBox}className="form-control p-4" id="password" placeholder="Your Password" required />
                            </div>
                            </div>
                            <div className="form-row mt-3">
                            <div className="col-sm-6">
                                <select className="form-control p-4" id="gender" ref={genBox} required>
                                    <option value=''>Choose Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>    
                            </div>
                            <div className="control-group col-sm-6">
                            <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Register</button>
                            &nbsp;
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
export default Register;