import React from "react";
import "./SignIn.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function SignIn() {
  return (
    <div>
      <nav>
        <p>Your Logo</p>
      </nav>

      <div className="d-flex content">


        <div className="content_left">
          <h2>Sign in to</h2>
          <h3>Lorem Ipsum is simply </h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>


        <div className="marg">
          <div className="content_right">

            <div className="top_row">
              <div className="d-flex">
                <div className="top_row_1">
                  <h3>
                    Welcome to <span className="blue">LOREM</span>
                  </h3>
                  <h1>Sign in</h1>
                </div>
                <div>
                  <div className="top_row_2">
                    <p>No Account?</p>
                    <a>Sign Up</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="second_row">
              <div className="social_icons">
                <a className="google_a">
                    <div className="google">
                    <div className="d-flex">
                        <FcGoogle size="1.3rem" />
                        <h3>Sign in with Google</h3>
                    </div>
                    </div>
                </a>
                <a className="facebook_a">
                    <div className="facebook">
                    <FaFacebook size="1.3rem" />
                    </div>
                </a>
                <a className="apple_a">
                    <div className="apple">
                    <FaApple size="1.3rem" />
                    </div>
                </a>
              </div>
            </div>

            <div className="inputs">
              <form className="form">
                <div className="form">
                  <h4>Enter your username or email address</h4>
                  <TextField
                    id="outlined-basic"
                    label="Username or email address"
                    variant="outlined"
                  />
                </div>
                <div className="form">
                  <h4>Enter your Password</h4>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                  />
                  <div className="forgot_pass">
                    <a>Forgot Password</a>
                  </div>
                </div>
              </form>
            </div>

            <div className="signin">
              <a>
                <div className="signin_button">Sign In</div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
