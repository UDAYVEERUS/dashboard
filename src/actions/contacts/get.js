import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";

export const contactsGet = (data) => {
    return(dispatch) =>{
        contactsGetHelper({data,dispatch})
    }
}

const contactsGetHelper = async({data, dispatch}) => {
    const headers = {
        "Content-Type" : "application/json"
    }
    const config = {
        headers,
        "method" : "GET"
    }
    const url = base_url+"/message/get"
    try{
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json,"contacts")
        if(response_json.status === 201){
            dispatch({
                type : CHANGE_VARIABLE,
                payload : {
                    key  : "contacts_array",
                    value : response_json.data
                }
            })
        }
    }catch(err){
        console.log(err)
    }
}