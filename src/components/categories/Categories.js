import React from "react";
import { connect } from "react-redux";
import { categoryiesGet } from "../../actions";
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
            <div>
                {categories_array && categories_array.map((value, index) => {
                    return (
                        <div key={index}>
                            <CategoryItems value={value} />
                        </div>
                    )
                })}
                {add_category_flag&&
                <CategoryAddModal/>
                }
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
