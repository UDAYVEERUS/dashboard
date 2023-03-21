import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";

export const categoryUpdate = (data) => {
    return (dispatch) => {
        categoryUpdateHelper({ dispatch, data })
    }
}

 const categoryUpdateHelper = async ({ dispatch, data }) => {
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "notification_flag",
            value: true

        }

    })
    dispatch({

        type: CHANGE_VARIABLE,
        payload: {

            key: "notification",
            value: "updating category..."

        }

    })
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        title: data.category_title,
        description: data.category_description,
        is_active: data.category_is_active,
        image: !data.category_images?"":data.category_images.toString(),
        onHome: data.category_onHome
    })
    const config = {
        headers,
        body,
        method: "PATCH"
    }

    const url = base_url + "/category/update"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        console.log(response_json, "here")
        if (response_json.status === 201) {
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "notification",
                    value: response_json.message
                }
            })
            dispatch({
                type: CHANGE_VARIABLE,
                payload: {
                    key: "notification_flag",
                    value: false
                }
            })
        }
        else{
            dispatch({
                type : CHANGE_VARIABLE,
                payload : {
                    key : "notification",
                    value : response_json.message
                }
            })
            dispatch({
                type : CHANGE_VARIABLE,
                payload : {
                    key : "notification_flag",
                    value : false
                }
            })
        }
    } catch (err) {
        console.log(err)
    }

}