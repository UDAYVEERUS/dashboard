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
      // console.log(data,"sdfghjk")
      changeVaribale("add_product_flag",true)
    }
    if(data==="category"){
      console.log("Strkdjgn",add_category_flag)

      changeVaribale("add_category_flag",true)
      }
  }
  const [expand, setExpand] = useState(false)
  return (
    <div className=' ml-10 w-fit ' onMouseEnter={() => { setExpand(true) }} onMouseLeave={() => { setExpand(false) }}>

      <div className='flex flex-row'>
        <div className="currentmenu mt-3.5" >
          Dashboard
        </div>
        {
          expand &&
          <div className='bg-white w-fit fixed mt-5' onMouseEnter={() => { setExpand(true) }} onMouseLeave={() => { setExpand(false) }}>
            <Link to={'/products'}>
              <div className='navigationmenu '>
                Products
              </div>
            </Link>
            <Link to={'/categories'}>
              <div className='navigationmenu '>
                Category
              </div>
            </Link>
            <div className='navigationmenu '>
              Product Type
            </div>
            <Link to={'/orders'}>
            <div className='navigationmenu '>
              Orders
            </div>
            </Link>
            <Link to={'/contacts'}>
            <div className='navigationmenu '>
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