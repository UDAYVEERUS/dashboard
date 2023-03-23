import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { categoryAdd, hideModal } from "../../actions";
import { uploadFiles } from "../../actions/upload/uploadFiles";
import ProductImages from "../products/ProductImages";

const CategoryAddModal = ({
    files,

    hideModal,
    categoryAdd,
    uploadFiles


}) => {
    const [state, setState] = useState({
        category_title: "",
        category_description: "",
        category_images: [],
        category_is_active: true,
        category_onHome: false
    })

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
            console.log("here", files)
            console.log("here2", files.data)
            var images = []
            {
                files.data ? files.data.map((value) => {
                    images.push(value.secure_url)
                }) :
                    images.push(files.secure_url)
            }
            setState({ ...state, category_images: images })
        }
    }, [files])
    return (
        <div className="flex justify-center container mx-auto">
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-200 w-96 h-[450px]">
                        <form className="p-5">
                            <div className="relative z-0 w-full mb-6 group">
                                <div>
                                    <label htmlFor="title">TITLE</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" value={state.category_title} onChange={(e) => updateState(e)} name="category_title" placeholder="title" required />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="title">DESCRIPTION</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" value={state.category_description} onChange={(e) => updateState(e)} name="category_description" placeholder="description" required />
                                </div>
                                <div>
                                    <label className="mr-4" htmlFor="onHome">ONHOME</label>
                                    <input  type="checkbox" className="mt-4" checked={state.category_onHome} onChange={(e) => { setState({ ...state, category_onHome: state.category_onHome == true ? false : true }) }} name="category_onHome" placeholder="" required />
                                </div>
                                <div>
                                    <label className="mr-4" htmlFor="onHome">IS_aCTIVE</label>
                                    <input type="checkbox" className="mt-4" checked={state.category_is_active} onChange={(e) => { setState({ ...state, category_is_active: state.category_is_active == true ? false : true }) }} name="category_is_Active" placeholder="" required />
                                </div>
                            </div>
                            <div className='flex justify-between mx-auto gap-4'>
                                <div className=" flex gap-4">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value={state.category_title} onClick={() => { categoryAdd(state) }} name="category_title" placeholder="title" required>Submit</button>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="category_title" placeholder="title" required>delete</button>
                                </div>
                                <div>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { hideModal("categoryadd") }}>close</button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <div className="h-10 w-10">
                            <ProductImages images={state.category_images} />
                            </div>
                            <form className="px-4 mt-4">
                                <div>
                                    <input type="file" name="product_image" onChange={(files) => { uploadFileFunction(files) }} multiple={true} placeholder="" />
                                    <label>image</label>
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
    const { files } = state.variables
    return {
        files
    }
}
const mapActionToProps = {
    hideModal,
    categoryAdd,
    uploadFiles
}

export default connect(mapStateToProps, mapActionToProps)(CategoryAddModal)
