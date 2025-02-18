import axios from "axios"

class WebService
{
    
    postApiCall(url,data)
    {
        var result = axios.post(url,data);
        return result;
    }
    getApiCall(url,token)
    {
        var result = axios.get(url,{headers:{
            'Authorization':'Bearer '+token
        }})
        return result
    }

    putApiCall(url,token,data)
    {
        var result = axios.put(url,data,{headers:{
            'Authorization':'Bearer '+token
        }})
        return result
    }
    uploadFile(url,data,token)
    {
        return fetch(url,{
            method : 'PUT',
            headers:{
                Authorization : 'Bearer '+token
            },
            body : data
        })
    }
}

//const SERVER = "http://tutorials.codebetter.in:7084"

export const urls = {
    REGISTER : "http://tutorials.codebetter.in:7084/auth/save",
    LOGIN : "http://tutorials.codebetter.in:7084/auth/login",
    USER_LIST : "http://tutorials.codebetter.in:7084/api/user/list",
    POST_LIST : "http://tutorials.codebetter.in:7084/api/post/list",
    USER_INFO : "http://tutorials.codebetter.in:7084/api/user/me",
    UPLOAD_PIC : "http://tutorials.codebetter.in:7084/api/user/uploadpic",
    CHANGE_PASSWORD : "http://tutorials.codebetter.in:7084/api/user/changepassword",
    loginUserProfile:"http://tutorials.codebetter.in:7084/api/user/me"
}
export default new WebService()