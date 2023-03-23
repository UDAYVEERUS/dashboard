import React from "react";
import { connect } from "react-redux";
import { changeVaribale } from "../../actions/variables";
import CategoryUpdateModal from "./CategoryUpdateModal";


const CategoryItem = ({
    value,
    modal_category_flag,

    changeVaribale
}) => {
    const displayCategoryModal = () => {
        changeVaribale("modal_category_title", value.title)
        changeVaribale("modal_category_description", value.description)
        changeVaribale("modal_category_onHome", value.onHome)
        changeVaribale("modal_category_is_active", value.is_active)
        changeVaribale("modal_category_image", value.image)
        changeVaribale("modal_category_id", value._id)
        changeVaribale("modal_category_mastHead", value.mastHead)
        changeVaribale("modal_category_flag", true)
        // console.log(value, "here")
    }
    

    return (
        <div className="">
            <div onClick={() => { displayCategoryModal() }} className="p-5 rounded border bg-slate-100 border-dashed border-black border-light-grey shadow cursor-pointer bg-slate-10">

                <div>{value._id}</div>
                <div>{value.title}</div>
                <div>{value.description}</div>
                <div className="h-20 w-20 mt-6">
                    {value.image ? <img src={value.image.split(",")[0]} /> : ""}
                </div>
            </div>
            {
                modal_category_flag && <CategoryUpdateModal />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    const {modal_category_flag}
     = state.variables

    return {
        modal_category_flag
    }
}
const mapActionToProps = {
    changeVaribale
}

export default connect(mapStateToProps, mapActionToProps)(CategoryItem)