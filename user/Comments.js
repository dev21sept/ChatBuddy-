import { useSelector } from 'react-redux'
import webService,{urls} from '../services/WebService'
import { useEffect, useState } from 'react'

function Comments(props)
{
    const uinfo = useSelector(state=>state.uinfo.value)
    const [sender,setSender] = useState({})
    useEffect(()=>{
        loadSender()
    },[])

    var loadSender = async ()=>
    {
        const URL = urls.USER_INFO + props.cmt.sender
        const response =  await webService.getApiCall(URL,uinfo.token) 
        if(response.data.status){
            setSender(response.data.data)
        }
        //console.log(response.data)
    }
    return <div className="row mt-1 border p-1">
        <div className='col-xl-1 col-lg-1'>
            <img src={sender.image==null || sender.image==undefined?"img/userlogo.jpg":sender.image} className="rounded-circle" height={30} width={30}/>
        </div>
        <div className='col-xl-10 col-lg-10'>
            <b className='text-info'>{sender.name}</b> <br/>
            <p>{props.cmt.comment}</p>
        </div>
        
    </div>
}
export default Comments;