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
        changeVaribale("modal_Category_mastHead", value.mastHead)
        changeVaribale("modal_categoy_flag", true)
        console.log(value, "here")
    }
    return (
        <>
            <div>
                <div onClick={() => { displayCategoryModal() }}>
                    <div>{value.id}</div>
                    <div>{value.title}</div>
                </div>
            </div>
            {
                modal_category_flag && <CategoryUpdateModal />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    const { value, modal_category_flag } = state.variabels
    return {
        value,
        modal_category_flag
    }
}
const mapActionToProps = {
    changeVaribale
}

export default connect(mapStateToProps, mapActionToProps)(CategoryItem)