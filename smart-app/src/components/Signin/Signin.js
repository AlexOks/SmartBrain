import React from 'react';


const Signin = ({ onRouteChange }) => {
    return(
        <article className="br3 ba dark-gray b--white-20 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-pink o-80">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f3 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlFor="Emm">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"   id="Emm" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlFor="pASS">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"   id="pASS" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={() => onRouteChange('home')} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" type="submit" value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                        <p  onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
                    </div>
    </div>
            </main>
        </ article>
    );
}
export default Signin;
