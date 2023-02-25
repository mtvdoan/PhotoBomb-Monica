import React from 'react'
import LogoutButton from '../Buttons/LogoutButton'
const TestConfirmPage = () => {
  return (
    <>
        <div>
            <div className='text-xl text-center font-extrabold mt-96'>
                <h2>Just a place to test user login/reg/logout...</h2>
                <h4 className=''>If you have reached here, you have successfully logged in and navigated here.</h4>
                <LogoutButton/>
            </div>
        </div>
    </>
  )
}

export default TestConfirmPage