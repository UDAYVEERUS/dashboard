import { CHANGE_VARIABLE } from "../type";


export const hideModal = (data) => {
    return (dispatch) => {
        hideModalHelper({dispatch, data})
    }
}
export const hideModalHelper = async({dispatch, data}) =>{
    if(data === "productupdate"){
        dispatch({
            type : CHANGE_VARIABLE,
            payload : {
                key : "modal_display_flag",
                value : false
            }
        })
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {
    
                key: "modal_display_type",
                value: null
    
            }
    
        })
        
    }
    if(data==="productadd"){
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {
    
                key: "add_product_flag",
                value: false
    
            }
    
        })
    
    
    }
    if(data==="categoryupdate"){
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {
    
                key: "modal_category_flag",
                value: false
    
            }
    
        })
    
    
    }
    if(data==="categoryadd"){
        dispatch({

            type: CHANGE_VARIABLE,
            payload: {
    
                key: "add_category_flag",
                value: false
    
            }
    
        })
    
    
    }
    
}