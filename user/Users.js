import { useSelector } from 'react-redux'
import webService,{urls} from '../services/WebService'
import { useEffect, useState } from 'react'

 function Users()
{
    const uinfo = useSelector(state=>state.uinfo.value)
    const [users,setUsers] = useState([])
    useEffect(()=>{
        loadUsers()
    },[])

    var loadUsers = async ()=>{
        const response =  await webService.getApiCall(urls.USER_LIST,uinfo.token) 
        if(response.data.status){
            setUsers(response.data.data)
        }
        console.log(response.data)
    }
    return <>
    <div className="container-fluid py-5" id="about">
        <div className="container">
          <h1 className="alert-success text-center mt-3">Users List</h1>  
          <table className="table">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>User ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                    {users.map((ob,index)=><tr>
                        <td>{index+1}</td>
                        <td>{ob.id}</td>
                        <td>                            
                            <img src={ob.image==null?"img/userlogo.jpg":ob.image} height={100} width={100}/>
                        </td>
                        <td>{ob.name}</td>
                        <td>{ob.phone}</td>
                        <td>{ob.gender}</td>
                        <td>{ob.email}</td>
                    </tr>)}
            </tbody>
          </table>      
        </div>
    </div>
    </>
}
export default Users;