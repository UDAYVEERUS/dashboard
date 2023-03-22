import { CHANGE_VARIABLE } from "./type";

export const base_url = 'https://backendcode-udayveer.onrender.com'

export const changeVaribale = (key, value) => {
    return({
        type : CHANGE_VARIABLE,
        payload : {
            key,
            value
        }
    })
}