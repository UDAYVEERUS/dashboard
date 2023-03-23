import React, { useEffect } from "react";
import { connect } from "react-redux";
import { categoryiesGet } from "../../actions";
import Notification from "../notification/Notification";
import CategoryAddModal from "./CategoryAddModal";
import CategoryItems from "./CategoryItems";


const Categories = ({
    categories_array,
    add_category_flag,

    categoryiesGet
}) => {
    useEffect(() => {
        categoryiesGet()
    }, [])

    return (
        <>
            <div className="grid grid-cols-4 justify-between gap-3 container mx-auto">
                {categories_array && categories_array.map((value, index) => {
                    return (
                        <div key={index} >
                            <CategoryItems value={value} />
                        </div>
                    )
                })}
                {add_category_flag&&
                <CategoryAddModal/>
                }
                <Notification />
            </div>
        </>
    )

}

const mapStateToProps = (state) => {
    const { categories_array, add_category_flag } = state.variables
    return {
        categories_array,
        add_category_flag
    }
}
const mapActionToProps = {
    categoryiesGet
}

export default connect(mapStateToProps, mapActionToProps)(Categories)
