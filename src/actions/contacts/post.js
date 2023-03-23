import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";

export const messagePost = (data) => {
    return (dispatch) => {
        messagePostHelper({ dispatch, data })
    }
}

const messagePostHelper = async ({ dispatch, data }) => {
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
            value: "massage sending..."

        }

    })
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        name: data.contact_name,
        email: data.contact_email,
        mobile: data.contact_mobile,
        subject: data.contact_subject,
        message: data.contact_message,
    })
    // console.log(body,"hereererereer")
    const config = {
        headers,
        body,
        method: "POST"
    }

    const url = base_url + "/message/send"
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