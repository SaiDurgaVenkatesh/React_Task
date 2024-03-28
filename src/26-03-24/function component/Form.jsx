import React from 'react'

function Form() {
    return (
        <div className='poo'>
            <h2>Form</h2>
            <form action="">
                <input className='nn' type='email' placeholder='Enter Your Mail' /> <br />
                < input type='Password' placeholder='enter your password' /> <br />
                <input className='sub' type="submit" name="Login" id="Login" />

            </form>
        </div>
    )
}

export default Form