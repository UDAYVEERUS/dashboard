import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center pb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>
          <p className="mt-4 text-gray-500">
           You can add products , categories, contacts, users and can update also.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
            <div className="p-6">
              <Link to={"/products"} className="text-lg font-medium text-gray-900">
                Products Dashboard
              </Link>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Products Add
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Products Update</h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
            <div className="p-6">
              <Link to={"/categories"} className="text-lg font-medium text-gray-900">Categories Dashboard</Link>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Categories Add
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Categories Update
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg shadow divide-y divide-gray-200">
            <div className="p-6">
              <Link to={"/contacts"} className="text-lg font-medium text-gray-900">
                Contacts Dashboard
              </Link>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Add
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">
                Contact Update
              </h3>
              <p className="mt-4 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

  export default Home

