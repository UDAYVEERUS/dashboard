import React, { useState } from "react";
import { connect } from "react-redux";
import {  hideModal, messagePost } from "../../actions";

const MessageAddModal = ({
    hideModal,
    messagePost,


}) => {
    const [state, setState] = useState({
        contact_name: "",
        contact_email: "",
        contact_mobile: "",
        contact_subject: "",
        contact_message: ""
    })

        const messageSendFunc = (event) => {
            event.preventDefault()
            messagePost(state)
        }

    const updateState = (event) => {
        const variable = event.target.name
        const value = event.target.value
        setState({ ...state, [variable]: value })
    }
  
    return (
        <div className="flex justify-center container mx-auto">
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-200 w-96 h-[450px]">
                        <form className="p-5">
                            <div className="relative z-0 w-full mb-6 group">
                                <div>
                                    <label htmlFor="title">NAME</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" value={state.contact_name} onChange={(e) => updateState(e)} name="contact_name" placeholder="Name" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="title">EMAIL</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" value={state.contact_email} onChange={(e) => updateState(e)} name="contact_email" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="mr-4" htmlFor="onHome">MOBILE</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="number" value={state.contact_mobile} onChange={(e) => updateState(e)} name="contact_mobile" placeholder="Mobile"  />
                                </div>
                                <div>
                                    <label className="mr-4" htmlFor="onHome">SUBJECT</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" value={state.contact_subject} onChange={(e) => updateState(e)} name="contact_subject" placeholder="Subject"  />
                                </div>
                                <div>
                                    <label className="mr-4" htmlFor="onHome">MESSAGE</label>
                                    <input className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " type="text" value={state.contact_message} onChange={(e) => updateState(e)} name="contact_message" placeholder="Message" />
                                </div>
                            </div>
                            <div className='flex justify-between mx-auto gap-4'>
                                <div className=" flex gap-4">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(event) => { messageSendFunc(event) }} name="category_title" placeholder="title">Submit</button>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" name="category_title" placeholder="title">delete</button>
                                </div>
                                <div>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { hideModal("contactadd") }}>close</button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    const {} = state.variables
    return {}
}
const mapActionToProps = {
    hideModal,
    messagePost,
}

export default connect(mapStateToProps, mapActionToProps)(MessageAddModal)
