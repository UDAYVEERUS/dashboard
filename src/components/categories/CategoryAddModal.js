import React, { useState } from "react";
import { connect } from "react-redux";
import { categoryAdd, hideModal } from "../../actions";
import { uploadFiles } from "../../actions/upload/uploadFiles";

const CategoryAddModal = ({
    files,

    hideModal,
    categoryAdd,
    uploadFiles


}) => {
    const [state, setState] = useState({
        category_title: "",
        category_description: "",
        category_image: [],
        category_is_active: true,
        category_onHome: false
    })

    const uploadFileFunction = (event) => {
        uploadFiles(event.targte.files)
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
                files.data ? files.data.map((value, index) => {
                    images.push(value.secure_url)
                }) :
                    images.push(files.secure_url)
            }
            setState({ ...state, category_image: images })
        }
    }, [files])
    return (
        <div>
            <div>
                <form>
                    <input type="text" value={state.category_title} onChange={(e) => updateState(e)} name="category_title" placeholder="title" required />
                    <label for="title">title</label>
                    <input type="text" value={state.category_description} onChange={(e) => updateState(e)} name="category_description" placeholder="description" required />
                    <label for="title">description</label>
                    <input type="checkbox" checked={state.category_onHome} onChange={(e) => { setState({ ...state, category_onHome: state.category_onHome == true ? false : true }) }} name="category_onHome" placeholder="" required />
                    <label for="onHome">onHome</label>
                    <input type="checkbox" checked={state.category_is_active} onChange={(e) => { setState({ ...state, category_is_active: state.category_is_active == true ? false : true }) }} name="category_is_Active" placeholder="" required />
                    <label for="onHome">is_Active</label>
                    <div>
                        <div>
                            <button type="button" value={state.category_title} onClick={() => { categoryAdd(state) }} name="category_title" placeholder="title" required>Submit</button>
                            <button type="button" name="category_title" placeholder="title" required>delete</button>
                        </div>
                        <div>
                            <button type="button" onClick={() => { hideModal("categoryadd") }}>close</button>
                        </div>
                    </div>
                </form>
                <div>
                    <form>
                        <div>
                            <input  type="file" name="product_image" onChange={(files)=>{uploadFileFunction(files)}} multiple={true} placeholder="" />
                            <label>image</label>
                        </div>
                    </form>
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
