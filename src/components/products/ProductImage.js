import React from "react";

const ProductImage = (props) => {
    const { image } = props
    if (typeof image !== "undefined" && image !== "") {
        return (
            <div>
                <img
                    src={image}
                    layout={"fill"}
                    alt={"_blank"}
                />
            </div>
        )
    }
    return(
        <div/>
    )
}

export default ProductImage