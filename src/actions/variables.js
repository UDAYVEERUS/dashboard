import { CHANGE_VARIABLE } from "./type";

export const base_url = 'http://localhost:5000'

export const changeVaribale = (key, value) => {
    return({
        type : CHANGE_VARIABLE,
        payload : {
            key,
            value
        }
    })
}