import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";

export const categoryiesGet = (data) => {
    return (dispatch) => {
        categoryiesGetHelper({ dispatch, data })
    }
}

export const categoryiesGetHelper = async ({ dispatch, data }) => {
    // dispatch({

    //     type: CHANGE_VARIABLE,
    //     payload: {

    //         key: "notification_flag",
    //         value: true

    //     }

    // })
    // dispatch({

    //     type: CHANGE_VARIABLE,
    //     payload: {

    //         key: "notification",
    //         value: "Adding product..."

    //     }

    // })
    const headers = {
        "Content-Type": "application/json"
    }
    // const body = JSON.stringify({
    //     title: data.product_title,
    //     description: data.product_description,
    //     price: data.product_price,
    //     stock: data.product_stock,
    //     sku: data.product_sku,
    //     is_active: data.product_is_active,
    //     image: data.product_images.toString(),
    //     productId: data.product_id,
    // })
    const config = {
        headers,
        // body,
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