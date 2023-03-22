import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";

export const categoryiesGet = (data) => {
    return (dispatch) => {
        categoryiesGetHelper({ dispatch, data })
    }
}

export const categoryiesGetHelper = async ({ dispatch, data }) => {

    const headers = {
        "Content-Type": "application/json"
    }
   
    const config = {
        headers,
        method: "GET"
    }

    const url = base_url + "/category/get"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        // console.log(response_json, "here")
        if (response_json.status === 201) {
            dispatch({
                type : CHANGE_VARIABLE,
                payload : {
                    key : "categories_array",
                    value : response_json.data
                }
            })
        }
       
    } catch (err) {
        console.log(err)
    }

}