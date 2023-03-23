import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { productAdd, hideModal } from "../../actions";
import { uploadFiles } from "../../actions/upload/uploadFiles";
import ProductImages from "./ProductImages";

const ProductAddModal = ({
    files,
    add_product_flag,
    categories_array,

    hideModal,
    productAdd,
    uploadFiles


}) => {
    const [state, setState] = useState({
        category_array: [],
        product_title: "",
        product_description: "",
        product_price: "",
        product_stock: 0,
        product_sku: "",
        product_id: "",
        product_images: [],
        product_is_active: true,
        product_onHome: false
    })
    useEffect(() => {
        setState({
            ...state,
            category_array: categories_array
        })
    }, [categories_array])

    const productAddFunc = (event) => {
        event.preventDefault()
        productAdd(state)
    }

    const uploadFileFunction = (event) => {
        uploadFiles(event.target.files)
    }
    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }
    useEffect(() => {
        if (files !== null) {
            console.log(files, "image")
            console.log(files.data, "image2")
            var images = []
            {
                files.data ? files.data.map((value, index) => {
                    images.push(value.secure_url)
                }) : images.push(files.secure_url)
            }
            setState({ ...state, product_images: images })
        }
    }, [files])
    return (
        <div>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-[500px] md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-200">
                        <form className="p-5">
                            <div>
                                <label htmlFor="title">TITLE</label>
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " value={state.product_title} onChange={(e) => updateState(e)} name="product_title" placeholder="title" />
                            </div>
                            <div>
                                <label htmlFor="title">DESCRIPTION</label>
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " value={state.product_description} onChange={(e) => updateState(e)} name="product_description" placeholder="description" />
                            </div>
                            <div>
                                <label htmlFor="title">PRICE</label>
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " value={state.product_price} onChange={(e) => updateState(e)} name="product_price" placeholder="price" />
                            </div>
                            <div>
                                <label htmlFor="title">STOCK</label>
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " value={state.product_stock} onChange={(e) => updateState(e)} name="product_stock" placeholder="stock" />
                            </div>
                            <div>
                                <label htmlFor="title">SKU</label>
                                <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " value={state.product_sku} onChange={(e) => updateState(e)} name="product_sku" placeholder="sku" />
                            </div>
                            <div className="mt-2 flex gap-4">
                                <label htmlFor="onHome">ONHOME</label>
                                <input type="checkbox" checked={state.product_onHome} onChange={(e) => { setState({ ...state, product_onHome: state.product_onHome === true ? false : true }) }} name="product_onHome" placeholder="" />
                            </div>
                            <div className="mt-2 flex flex-row gap-4">
                                <label htmlFor="onHome">IS ACTIVE</label>
                                <input type="checkbox" checked={state.product_is_active} onChange={(e) => { setState({ ...state, product_is_active: state.product_is_active === true ? false : true }) }} name="product_is_active" placeholder="" />
                            </div>
                            <div className="mt-5 flex gap-4">
                                {/* <div>
                                    <select onChange={(e) => updateState(e)} id="undeline select">
                                        <option>choose a category</option>
                                        {state.category_array.map((category, index) => { return <option key={index} value={category.title}>{category.title}</option> })}
                                    </select>
                                </div> */}
                                <div className='flex justify-between mt-4 gap-4'>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(event) => { productAddFunc(event) }}>submit</button>
                                    <button className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">delete</button>
                                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => hideModal("productadd")}>close</button>
                                </div>
                            </div>
                        </form>
                        <div className="h-10 w-10 flex justify-between">
                            <ProductImages images={state.product_images} />
                        </div>
                        <div className="px-4">
                            <form>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input type="file" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={(files) => uploadFileFunction(files)} multiple={true} />
                                    <label>Image</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    const { files, categories_array, add_product_flag } = state.variables
    return {
        files,
        add_product_flag,
        categories_array
    }
}
const mapActionToProps = {
    hideModal,
    productAdd,
    uploadFiles
}

export default connect(mapStateToProps, mapActionToProps)(ProductAddModal)
