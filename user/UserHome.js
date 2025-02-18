import { useSelector } from 'react-redux'
import webService, { urls } from '../services/WebService'
import { useEffect, useState } from 'react'
import Comments from './Comments'

function UserHome() {
    const uinfo = useSelector(state => state.uinfo.value)

    const [posts, setPosts] = useState([])
    useEffect(() => {
        loadPosts()
    }, [])

    var loadPosts = async () => {
        const response = await webService.getApiCall(urls.POST_LIST, uinfo.token)
        if (response.data.status) {
            console.log(`Response is : ${response}`);
        console.log("Response is : " +JSON.stringify(response));
            setPosts(response.data.data)
        }
        //console.log(response.data)
    }
    return <>
        <div className="container-fluid py-5" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 text-center">
                        <img src={uinfo.image == null ? "img/userlogo.jpg" : uinfo.image} className="rounded-circle mt-3" height={100} width={100} />
                    </div>
                    <div className="col-xl-10 col-lg-10 text-center">
                        <div className="position-relative d-flex align-items-center justify-content-center">
                            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: "1px #dee2e6" }}>{uinfo.name}</h1>
                            <h1 className="position-absolute text-uppercase text-primary">Welcome {uinfo.name}</h1>
                        </div>
                        <hr />

                        {posts.map(post => <div className='row text-left mt-2'>
                            <div className='col-xl-2 col-lg-2'>
                                <img src={post.postBy.image == null ? "img/userlogo.jpg" : post.postBy.image} className="rounded-circle" height={50} width={50} />
                            </div>
                            <div className='col-xl-10 col-lg-10'>
                                <h5>{post.postBy.name}</h5>
                                <p>{post.message}</p>
                                <br />
                                {post.postfile != null ? <img src={post.postfile} height={300} width={600} /> : ""}
                                <br/>
                                
                                    <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#btnbtn">Comments
                                        <span className="caret">: : {post.comments.length}</span></button>
                                    <ul id="btnbtn" className="collapse">
                                       <li>{post.comments.map(cmt => <Comments cmt={cmt} />)}</li> 
                                    </ul>


                                
                            </div>
                        </div>)}


                    </div>
                </div>


            </div>
        </div>
    </>
}
export default UserHome;