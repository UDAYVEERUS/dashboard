import React, { useEffect } from "react";
import ProductImage from "./ProductImage";

const ProductImages = (props) => {
    const {images} = props
    // console.log('images is-', images)
    // useEffect(() => {
    //     console.log("images is -", images)
    // }, [images])

    if(typeof images !== "undefined" && images!==""){
        return (
            <div>
                {/* {console.log(images)} */}
                {images.map((value, index)=>{
                    return (
                        <ProductImage image={value} key={"product-image -" + index} />
                    )
                })}
            </div>
        )
    }
    return(
        <div/>
    )
}
export default ProductImages