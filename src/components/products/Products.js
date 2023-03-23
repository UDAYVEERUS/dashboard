import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { categoryiesGet, productsGet } from "../../actions";
import Notification from "../notification/Notification";
import ProductAddModal from "./ProductAddModal";
import ProductList from "./ProductList";

const Products = ({
    categories_array,
    products_array,
    add_product_flag,

    productsGet,
    categoryiesGet
}) => {
    // console.log(products_array,"products")
    const { category } = useParams()
    useEffect(() => {
        categoryiesGet()
        productsGet()
    }, [])
    
    return (
        <div>
            <div><ProductList productsData={products_array} /></div>
            {add_product_flag &&
                <ProductAddModal categories_array={categories_array} />
            }
            <Notification />
        </div>
    )
}


const mapStateToProps = (state) => {
    const { products_array, categories_array, add_product_flag } = state.variables
    return {
        products_array,
        categories_array,
        add_product_flag
    }
}
const mapActionToProps = {
    productsGet,
    categoryiesGet
}

export default connect(mapStateToProps, mapActionToProps)(Products)