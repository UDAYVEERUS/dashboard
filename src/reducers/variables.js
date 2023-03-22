import { CHANGE_VARIABLE } from "../actions/type";

const INITIAL_STATE = {
    products_array: null,
    test: "this is str",
    categories_array: null,
    // category modal
    modal_category_title: "",
    modal_category_onHome: "",
    modal_category_is_active: "",
    modal_category_image: "",
    modal_category_flag: false,
    modal_category_mastHead: "",
    modal_category_description: "",
    modal_category_id: false,

    add_category_flag: false,


    modal_display_flag: false,
    add_product_flag: false,
    modal_product_display: false,

    modal_product_id: "",
    modal_product_title: "",
    modal_product_price: "",
    modal_product_image: "",
    modal_product_sku: "",
    modal_product_stock: "",
    modal_product_description: "",
    modal_product_is_active: "",
    modal_product_on_home: "",
    image: null,
    image_id: null,
    files: null,
    file: [],

    notification: "",
    notification_flag: false,
    processing: false,
    message: "",
    contacts_array : null
}

const reducers = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case CHANGE_VARIABLE:
      		return {...state, [ action.payload.key]: action.payload.value }
        default:
            return state

    }
}
export default reducers