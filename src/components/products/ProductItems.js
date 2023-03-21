import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeVaribale } from "../../actions/variables";

const productItems = ({productData, changeVaribale}) => {
    const {
        title,_id, description, price, stock, sku,image, is_active, onHome
    } = productData

    
    const display_product_modal = () => {
        console.log(_id,"id")
        // console.log(title,_id, description, price, stock, sku,image, is_active, onHome,"zxcvbnm")
        changeVaribale("modal_product_title",title)
        changeVaribale("modal_product_id",_id)
        changeVaribale("modal_product_description",description)
        changeVaribale("modal_product_price",price)
        changeVaribale("modal_product_stock",stock)
        changeVaribale("modal_product_sku",sku)
        changeVaribale("modal_product_onHome",onHome)
        changeVaribale("modal_product_is_active",is_active)
        changeVaribale("modal_product_image",image)
        changeVaribale("modal_display_flag",true)
    }
    return(
        
        <div className="w-72 h-40 p-2.5 m-1  rounded border border-light-grey shadow cursor-pointer bg-slate-100" onClick={()=>{display_product_modal()}}>
            <div>Title-{title}</div>
            <div>
                <div>price - {price}</div>
                {/* <div>{onHome?"onHome":""}</div> */}
            </div>
            <div>
                <div>stock-{stock}</div>
                <div>sku-{sku}</div>
                <div className="h-10 w-10">
                {image?<img src={image.split(",")} alt="_blank"  />:""}
                </div>
                {/* <div>is_Active-{is_active}</div> */}
            </div>
        </div>
    
    )
}


const mapStateToProps = (state) => {
    const{} = state.variables
    return {}
}
const mapActionToProps = {
    changeVaribale    
}

export default connect(mapStateToProps, mapActionToProps)(productItems)