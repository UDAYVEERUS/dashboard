import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { hideModal, productUpdate } from '../../actions'
import { uploadFiles } from '../../actions/upload/uploadFiles'
import ProductImages from './ProductImages'

const ProductUpdateModal = ({
    modal_product_id,
    modal_product_title,
    modal_product_description,
    modal_product_price,
    modal_product_stock,
    modal_product_sku,
    modal_product_onHome,
    modal_product_is_active,
    modal_product_image,
    modal_display_flag,
    files,


    hideModal,
    uploadFiles,
    productUpdate
}) => {
    useEffect(() => {
        setState({
            ...state,
            product_id: modal_product_id,
            product_title: modal_product_title,
            product_description: modal_product_description,
            product_price: modal_product_price,
            product_stock: modal_product_stock,
            product_sku: modal_product_sku,
            product_images: typeof modal_product_image !== "undefined" && modal_product_image > 0 ? modal_product_image.split(',') : [],
            product_is_active: modal_product_is_active,
            product_onHome: modal_product_onHome
            
        })

    }, [modal_product_title])

    const productUpdatefunc = (event) => {
        event.preventDefault()
        productUpdate(state)
    }


    const uploadFileFunction = (event) => {
        uploadFiles(event.target.files)
    }
    const [state, setState] = useState({
        product_id: "",
        product_title: "",
        product_description: "",
        product_price: "",
        product_sku: "",
        product_stock: 0,
        product_onHome: false,
        product_is_active: true,
        product_images: []
    })
    // console.log(state,"fdgahskjbcvx")
    
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
        <div className='mx-auto justify-center w-96'>
            {modal_display_flag &&
                <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className='relative w-full h-full max-w-2xl md:h-auto'>
                        <div className='relative bg-white rounded-lg shadow dark:bg-gray-200'>
                            <form className='p-5'>
                                <div>
                                    <label htmlFor="floating_email" >TITLE</label>
                                    <input type="text" value={state.product_title} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " onChange={(e) => updateState(e)} name="product_title" placeholder="title" required />

                                </div>
                                <div>
                                    <label htmlFor="floating_email" >DESCRIPTION</label>
                                    <input type="text" value={state.product_description} onChange={(e) => updateState(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " name="product_description" placeholder="description" required />

                                </div>
                                <div>
                                    <label htmlFor="floating_email">PRICE</label>
                                    <input type="number" value={state.product_price} onChange={(e) => updateState(e)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " name="product_price" placeholder="price" required />

                                </div>
                                <label htmlFor="floating_email" >SKU</label>
                                <input type="text" value={state.product_sku} onChange={(e) => updateState(e)} name="product_sku" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ' placeholder="sku" required />

                                <div>
                                    <label htmlFor="floating_email">STOCK</label>
                                    <input type="number" value={state.product_stock} onChange={(e) => updateState(e)} name="product_stock" className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ' placeholder="stock" required />

                                </div>
                                <div>
                                    <label htmlFor="floating_email">ONHOME</label>
                                    <input type="checkbox" checked={state.product_onHome} onChange={() => { setState({ ...state, product_onHome: state.product_onHome === true ? false : true }) }} name="product_onHome" className="block mr-2 " placeholder=""  />

                                </div>
                                <div>
                                    <label htmlFor="floating_email">ISACTIVE</label>
                                    <input type="checkbox" checked={state.product_is_active} onChange={() => { setState({ ...state, product_is_active: state.product_is_active === true ? false : true }) }} name="product_is_active" className="block mr-2 " placeholder=""  />

                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='submit' onClick={(event) => productUpdatefunc(event)}>submit</button>
                                        <button className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                                    </div>
                                    <div>
                                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="button" onClick={() => hideModal("productupdate")}>close</button>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <ProductImages images={state.product_images} />
                                <form>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="file" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " onChange={(files) => uploadFileFunction(files)} multiple={true} />
                                        <label>Image</label>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        modal_product_id,
        modal_product_title,
        modal_product_description,
        modal_product_price,
        modal_product_stock,
        modal_product_sku,
        modal_product_onHome,
        modal_product_is_active,
        modal_product_image,
        modal_display_flag,
        files
    } = state.variables
    return {
        modal_product_id,
        modal_product_title,
        modal_product_description,
        modal_product_price,
        modal_product_stock,
        modal_product_sku,
        modal_product_onHome,
        modal_product_is_active,
        modal_product_image,
        modal_display_flag,
        files
    }
}
const mapActionToProps = {
    productUpdate,
    hideModal,
    uploadFiles
}

export default connect(mapStateToProps, mapActionToProps)(ProductUpdateModal)