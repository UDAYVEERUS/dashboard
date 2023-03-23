import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { changeVaribale } from '../../actions/variables'





const {productsGet } = require("../../actions")



const Navigation = ({
  add_product_flag,
  add_category_flag,

  changeVaribale,

}) => {

  const {location}=useParams()

  const togglemodal = (data)=>{
    if(data==="product"){
      changeVaribale("add_product_flag",true)
    }
    if(data==="category"){

      changeVaribale("add_category_flag",true)
      }
  }
  const [expand, setExpand] = useState(false)
  return (
    <div className=' ml-10 w-fit ' >

      <div className='flex flex-row' >
        <div className="currentmenu mt-3.5" onMouseEnter={() => { setExpand(true) }} onMouseLeave={() => { setExpand(false) }} >
          Dashboard
        </div>
        {
          expand &&
          <div className='bg-white w-32 p-4 fixed mt-5' onMouseEnter={() => { setExpand(true) }} onMouseLeave={() => { setExpand(false) }}>
            <Link to={'/products'}>
              <div className='text-base'>
                Products
              </div>
            </Link>
            <Link to={'/categories'}>
              <div className='mt-3 text-base'>
                Category
              </div>
            </Link>
            {/* <div className='mt-3'>
              Product Type
            </div> */}
            <Link to={'/orders'}>
            <div className='mt-3 text-base'>
              Orders
            </div>
            </Link>
            <Link to={'/contacts'}>
            <div className='mt-3 text-base'>
              Messages
            </div>
            </Link>
          </div>
        }
        
        <div className='flex flex-row m-3' onClick={()=>{togglemodal("product")}}>
          <div className='text-black text-lg cursor-pointer mr-4'>Add New Product</div>
        </div>
        <div className='flex flex-row m-3' onClick={()=>{togglemodal("category")}}>
          <div className='text-black text-lg cursor-pointer mr-4'>Add New Category</div>
        </div>
      </div>



    </div>
  )
}



const mapStateToProps = (state) => {

  const {

    products_array,
    test,
    add_product_flag,
    add_category_flag
    

  } = state.variables


  return {

    products_array,
    test,
    add_product_flag,
    add_category_flag
    

  }

}

const mapActionsToProps = {
  productsGet,
  changeVaribale
}




export default connect(mapStateToProps, mapActionsToProps)(Navigation)