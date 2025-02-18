import { useSelector } from 'react-redux'
import webService, { urls } from '../services/WebService'
import { useEffect, useRef, useState } from 'react'
import { changeUserInfo } from '../reduxconfig/UserSlice'
import { useDispatch } from "react-redux"



function Profile() {
    var fileBox = useRef()

    const dispatch = useDispatch()

    const uinfo = useSelector(state => state.uinfo.value)


    var upload = async (event) => {
        const frmData = new FormData()
        frmData.append("image", fileBox.current.files[0]);
        event.preventDefault()
        const response = await webService.uploadFile(urls.UPLOAD_PIC, frmData, uinfo.token)
        const result = await response.json()
        if (result.status) {
            dispatch(changeUserInfo({ ...uinfo, image: result.data.image }))
        }

    }

    const [myProfile, setMyProfileData] = useState({});

    useEffect(() => {
        loadMyProfile();
    }, [])

    var loadMyProfile = async () => {
        var resp = await webService.getApiCall(urls.loginUserProfile, uinfo.token);
        console.log("User Profile : " + resp);
        console.log("User Profile : " + JSON.stringify(resp));

        if (resp.data.status) {
            setMyProfileData(resp.data.data);
        }
    }

    return <>
        <div className="container py-5" id="about">
            <div className="container
            ">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>{uinfo.name}</h1>
                    <h1 className="position-absolute text-uppercase text-primary">My Profile</h1>
                </div>

                <div className='row text-center mt-2'>
                    <div className='col-xl-12 col-lg-12'>
                        <h4 className='alert-danger'>Upload Image</h4>
                        <img src={uinfo.image == null ? "img/userlogo.jpg" : uinfo.image} className="rounded-circle mt-3" height={100} width={100} /><hr />
                        <form onSubmit={upload}>
                            <input type='file' ref={fileBox} className='form-control' required /><br /><br />
                            <button className='btn btn-success'>Upload</button>
                        </form>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className='row text-center mt-2'>
                    <div className='col-xl-6 col-lg-6'>
                        <img src={uinfo.image == null ? "img/userlogo.jpg" : uinfo.image} className="rounded" height={500} width={500} />
                    </div>
                    <div className='col-xl-6 col-lg-6'>
                    <h1 className=" text-uppercase text-primary">My Profile </h1>
                    <br/>
                        <h5> &nbsp;&nbsp; &nbsp;&nbsp;{myProfile.id}</h5>
                        <br/>
                        <h1 className='alert-primary'>&nbsp;&nbsp;&nbsp;{uinfo.name}</h1>
                        <br/>
                        <h3> &nbsp;&nbsp;&nbsp;&nbsp;{myProfile.email}</h3>
                        <br/>
                        <h3> &nbsp;&nbsp;&nbsp;&nbsp;{myProfile.phone}</h3>
                        <br/>
                        <h3> &nbsp;&nbsp;&nbsp;&nbsp;{myProfile.gender}</h3>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Profile;