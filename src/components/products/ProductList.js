import React, { useEffect } from "react";
import { connect } from "react-redux";
import { productsGet } from "../../actions";
import ProductItems from "./ProductItems";
import ProductUpdateModal from "./ProductUpdateModal";


const ProductList = ({
    productsData,
    products_array
}) =>{
    useEffect(() => {
        productsGet()
    })
    return(
        <div className="grid grid-cols-4 container mx-auto">
            {productsData&&productsData.map((value,index)=>{
                return <ProductItems key={index}  productData = {value} />
            })}
            <ProductUpdateModal/>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {products_array} = state.variables
    return{
        products_array
    }
}

const mapActionToProps = {
    productsGet   
}

export default connect(mapStateToProps, mapActionToProps) (ProductList)