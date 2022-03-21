import React from 'react';
import './SignIn.css';
import { FcGoogle } from 'react-icons/fc';

function SignIn() {
  return (
    <div>
        <nav>
            <p>Your Logo</p>
        </nav>

        <div className='d-flex content'>
            <div className='content_left'>
                <h2>Welcome to <span className='blue'>LOREM</span></h2>
            </div>
            <div>
                <div className='content_right'>
                    <div className='top_row '>
                        <div className='d-flex'>
                            <div className='top_row_1'>
                                <h3>Welcome to <span className='blue'>LOREM</span></h3>
                                <h1>Sign in</h1>
                            </div>
                            <div>
                                <div className='top_row_2'>
                                    <p>No Account?</p>
                                    <a>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FcGoogle />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SignIn