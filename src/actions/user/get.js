import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";

export const usersGet = (data) => {
    return(dispatch) => {
        usersGetHelper({data, dispatch})
    }
}

export const usersGetHelper = async({data, dispatch}) => {
    const headers = {
        "Content-Type" : "application/json"
    }

    const config = {
        headers,
        method : "GET"
    }

    const url = base_url + "/user/get"
    try{
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,"here")
        if(response_json.status === 201){
            dispatch({
                type : CHANGE_VARIABLE,
                payload : {
                    key : "users_array",
                    value : response_json.data
                }
            })
        }
    }catch(Err){
        console.log(Err)
    }

}