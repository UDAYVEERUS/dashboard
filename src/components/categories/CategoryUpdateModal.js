import React, { useState } from "react";
import { connect } from "react-redux";
import { categoryUpdate, hideModal } from "../../actions";
import { uploadFiles } from "../../actions/upload/uploadFiles";

const categoryUpdateModal = ({
    modal_Category_title,
    modal_Category_description,
    modal_Category_onHome,
    modal_Category_is_active,
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
            category_title: modal_Category_title,
            category_description: modal_Category_description,
            category_onHome: modal_Category_onHome,
            category_is_active: modal_Category_is_active,
            category_mastHead: modal_category_mastHead,
            category_images: typeof modal_category_image !== "undefined" && modal_category_image.length > 0 ? modal_category_image.split(",") : [],
        })
    }, [modal_Category_title])
    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }
    const uploadFileFunction = (event) => {
        uploadFiles(event.targte.files)
    }
    useEffect(() => {
        if (files !== null) {
            console.log("here", files)
            console.log("here2", files.data)
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
        <div>
            {modal_category_flag &&
                <div>
                    <div>
                        <form>
                            <div>
                                <input type="text" onChange={(e) => updateState(e)} value={state.category_title} name="title" placeholder="title" required />
                                <lable>Title</lable>
                                <input type="text" onChange={(e) => updateState(e)} value={state.category_description} name="description" placeholder="description" required />
                                <lable>description</lable>
                                <input type="checkbox" onChange={(e) => { setState({ ...state, category_onHome: state.category_onHome === true ? false : true }) }} checked={state.category_onHome} name="category_onHome" placeholder="" required />
                                <lable>onHome</lable>
                                <input type="checkbox" onChange={(e) => { setState({ ...state, category_is_active: state.category_is_active === true ? false : true }) }} checked={state.category_is_active} name="category_is_active" placeholder="" required />
                                <lable>is_Active</lable>
                                <input type="checkbox" onChange={(e) => { setState({ ...state, category_mastHead: state.category_mastHead === true ? false : true }) }} checked={state.category_mastHead} name="category_masthead" placeholder="" required />
                                <lable>is_Active</lable>
                            </div>
                            <div>
                                <div>
                                    <button type="submit" onClick={() => { categoryUpdate(state) }}>submit</button>
                                    <button>Delete</button>
                                </div>
                                <div>
                                    <button type="button" onClick={() => { hideModal("categoryupdate") }}>close</button>
                                </div>
                            </div>
                        </form>
                        <ProductImages images={state.category_images} />
                        <form>
                            <div>
                                <input type="file" onChange={(files)=>{uploadFileFunction(files)}} multiple={true} />
                                <lable>Image</lable>
                            </div>
                        </form>
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

export default connect(mapActionToProps, mapStateToProps)(categoryUpdateModal)
