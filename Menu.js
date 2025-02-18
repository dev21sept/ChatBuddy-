import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {changeUserInfo} from './reduxconfig/UserSlice'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Menu()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const uinfo = useSelector(state=>state.uinfo.value)
    var logout = ()=>{
        dispatch(changeUserInfo({
            name : undefined , token : undefined , isLogin : false
        }))
        navigate("/")
    }
    return <>
        <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light py-3 py-lg-0 px-lg-5">
        <Link to="/home" className="navbar-brand ml-lg-3">
            <h1 className="m-0 display-5"><span className="text-primary">Chat</span>Buddy</h1>
        </Link>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
            <div className="navbar-nav m-auto py-0">                
            </div>

            {uinfo.isLogin  
              ?   <>
                <Link to="/home" className="btn btn-outline-primary">Home</Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/users" className="btn btn-outline-primary">Users</Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/profile" className="btn btn-outline-primary">Profile</Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/changePassword" className="btn btn-outline-primary">Change Password</Link>
                &nbsp; &nbsp; &nbsp;
                <b onClick={logout} className="btn btn-outline-primary">Logout</b>
                &nbsp; &nbsp; &nbsp;
            
            </> : <>

            <Link to="/" className="btn btn-outline-primary">Login</Link>
            &nbsp;
            <Link to="/register" className="btn btn-outline-primary">Register</Link>
            </>}

            
        </div>
    </nav>
    </>
}
export default Menu;