import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { changeUserInfo } from "../reduxconfig/UserSlice"
import WebService, { urls } from "../services/WebService"


function ChangePassword() {

    var oldPassBox = useRef()
    var newPassBox = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const uinfo = useSelector(state => state.uinfo.value)
    var change = async (event) => {
        var ob = {
            old_password: oldPassBox.current.value,
            new_password: newPassBox.current.value,
        }
        event.preventDefault()
        var response = await WebService.putApiCall(urls.CHANGE_PASSWORD, ob, uinfo.token);
        console.log(response.data)
        if (response.data.status) {
            dispatch(changeUserInfo({
                name: undefined, token: undefined, isLogin: false
            }))
            navigate("/")
        } else {
            alert(response.data.message)
        }

    }

    return  <div className="containerpy-5" id="about">
    <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>{uinfo.name}</h1>
            <h1 className="position-absolute text-uppercase text-primary">Change Password</h1>
        </div>
        <br/><br/><br/><br/><br/>
        <div className='row text-center'>
            <div className='col-xl-2 col-lg-2'></div>
        <div className='col-xl-8 col-lg-8'>
            <h4 className='alert-danger'>Change Password</h4>
            <br/><br/>

            <form onSubmit={change}>
                <input type='password' ref={oldPassBox} className='form-control' placeholder='Old Password' required /><br />
                <input type='password' ref={newPassBox} className='form-control' placeholder='New Password' required /><br /><br />
                <button className='btn btn-success'>Change</button>
            </form>
        </div>
    </div>
    </div>
</div>


}
export default ChangePassword;