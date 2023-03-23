import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
export const getContacts = () => {
    return (dispatch) => {
        getContactsHelper({ dispatch })
    }
}

export const getContactsHelper = async ({ dispatch }) => {
    const headers = {
        "Content-type": "application/json"
    }
    const config = {
        headers,
        method: "GET",
    }
    const url = base_url + "/message/get"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 201) {
            
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {

                    key: "contacts_array",
                    value: response_json.data

                }
            })
        
           
        }

    }
    catch (err) {
        console.log(err)
    }
}
