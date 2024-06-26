import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-500'> Chat App</span>
                </h1>
                <form action="">
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>
                                First Name
                            </span>
                        </label>
                        <input type="text" name="" id="" placeholder='Enter First Name' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>
                                Last Name
                            </span>
                        </label>
                        <input type="text" name="" id="" placeholder='Enter Last Name' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>
                                User Name
                            </span>
                        </label>
                        <input type="text" name="" id="" placeholder='Enter User Name' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>
                                Password
                            </span>
                        </label>
                        <input type="text" name="" id="" placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className='text-base label-text'>
                                Confirm Password
                            </span>
                        </label>
                        <input type="text" name="" id="" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckbox />
                    <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        Already have an account?
                    </a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp