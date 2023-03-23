import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { categoryUpdate, hideModal } from "../../actions";
import { uploadFiles } from "../../actions/upload/uploadFiles";
import ProductImages from "../products/ProductImages";

const CategoryUpdateModal = ({
    modal_category_title,
    modal_category_description,
    modal_category_onHome,
    modal_category_is_active,
    modal_category_image,
    modal_category_flag,
    modal_category_mastHead,
    modal_category_id,
    files,

    hideModal,
    categoryUpdate,
    uploadFiles
}) => {

    const [state, setState] = useState({
        category_id: "",
        category_title: "",
        category_description: "",
        category_onHome: false,
        category_is_active: true,
        category_mastHead: false,
        category_images: []
    })
    useEffect(() => {
        setState({
            ...state,
            category_id: modal_category_id,
            category_title: modal_category_title,
            category_description: modal_category_description,
            category_onHome: modal_category_onHome,
            category_is_active: modal_category_is_active,
            category_mastHead: modal_category_mastHead,
            category_images: typeof modal_category_image !== "undefined" && modal_category_image.length > 0 ? modal_category_image.split(",") : [],
        })
    }, [modal_category_title])
    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }
    const uploadFileFunction = (event) => {
        uploadFiles(event.target.files)
    }
    const categoryUpdateFunc = (event) => {
        event.preventDefault()
        categoryUpdate(state)
    }
    useEffect(() => {
        if (files !== null) {
            // console.log("here", files)
            // console.log("here2", files.data)
            var images = []

            {
                files.data ? files.data.map((value, index) => {
                    images.push(value.secure_url)
                }) :
                    images.push(files.secure_url)
            }
            setState({ ...state, category_images: images })
        }
    }, [files])
    return (
        <div className="flex justify-center mx-auto">
            {modal_category_flag &&
                <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0">
                    <div className="relative ">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-200 w-96 h-[450px]">
                            <form className="p-5">
                                <div className="relative z-0 w-full mb-6 group">
                                    <div>
                                        <label>Title</label>
                                        <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" onChange={(e) => updateState(e)} value={state.category_title} name="category_title" placeholder="title" />
                                    </div>
                                    <div>
                                        <label>description</label>
                                        <input type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " onChange={(e) => updateState(e)} value={state.category_description} name="category_description" placeholder="description" />
                                    </div>
                                    <div>
                                        <label className="mr-4">onHome</label>
                                        <input type="checkbox" className="mt-4" onChange={(e) => { setState({ ...state, category_onHome: state.category_onHome === true ? false : true }) }} checked={state.category_onHome} name="category_onHome" placeholder="" />
                                    </div>
                                    <div>
                                        <label className="mr-4">is_Active</label>
                                        <input type="checkbox" className="mt-4" onChange={(e) => { setState({ ...state, category_is_active: state.category_is_active === true ? false : true }) }} checked={state.category_is_active} name="category_is_active" placeholder="" />
                                    </div>
                                    <div>
                                        <label className="mr-4">mastHead</label>
                                        <input type="checkbox" className="mt-4" onChange={(e) => { setState({ ...state, category_mastHead: state.category_mastHead === true ? false : true }) }} checked={state.category_mastHead} name="category_mastHead" placeholder="" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div className=" flex gap-4">
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" onClick={(event) => { categoryUpdateFunc(event) }}>submit</button>
                                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                                    </div>
                                    <div>
                                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' type="button" onClick={() => { hideModal("categoryupdate") }}>close</button>
                                    </div>
                                </div>
                            </form>
                            <div className="h-10 w-10">
                            <ProductImages images={state.category_images} />
                            </div>
                            
                            <form className="px-4 mt-4">
                                <div>
                                    <input type="file" onChange={(files) => { uploadFileFunction(files) }} multiple={true} />
                                    {/* <label>Image</label> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    )


}

const mapStateToProps = (state) => {
    const {
        modal_Category_title,
        modal_Category_description,
        modal_Category_onHome,
        modal_Category_is_active,
        modal_category_image,
        modal_category_flag,
        modal_category_mastHead,
        modal_category_id,
        files
    } = state.variables
    return {
        modal_Category_title,
        modal_Category_description,
        modal_Category_onHome,
        modal_Category_is_active,
        modal_category_image,
        modal_category_flag,
        modal_category_mastHead,
        modal_category_id,
        files
    }
}
const mapActionToProps = {
    categoryUpdate,
    hideModal,
    uploadFiles
}

export default connect(mapStateToProps, mapActionToProps)(CategoryUpdateModal)
