import axios from "axios";
import { CHANGE_VARIABLE } from "../type";
import { base_url } from "../variables";
import FormData from "form-data";

export const uploadFiles = (file) => {
    return(dispatch) => {
        uploadFilesHelper({file, dispatch})
    }
}
 const uploadFilesHelper  = async({file, dispatch}) => {
    try{
        var formData = new FormData()
        // console.log(file,"here")

        for(var i=0; i<file.length;i++){
            // console.log(file[i])
            formData.append("photo", file[i])
        }
        // console.log(formData,"here1")
        const url = base_url+"/upload/image"
        const config = {
            "Content-Type" : "application/json"
        }
        // console.log(url,"sdfghjk",formData,config)
        const response = await axios.post(url,formData, config)
        // console.log(response)

        dispatch({
            type : CHANGE_VARIABLE,
            payload : {
                key : "notification_flag",
                value : true
            }
        })
        dispatch({
            type : CHANGE_VARIABLE,
            payload : {
                key : "notification",
                value : "file uploaded"
            }
        })
        dispatch({
            type : CHANGE_VARIABLE,
            payload : {
                key : "notification_flag",
                value : "false"
            }
        })
        dispatch({
            type : CHANGE_VARIABLE,
            payload : {
                key : "files",
                value : response.data
            }
             
        })
        dispatch({
            type : CHANGE_VARIABLE,
            payload : {
                key : "image",
                value : response.data.url
            }
        })
        // dispatch({
        //     type : CHANGE_VARIABLE,
        //     payload : {
        //         key : "image_id",
        //         value : response.data.files.cloudflayer_id
        //     }
        // })
        
    }
    catch(err){
        console.log(err)
    }
}