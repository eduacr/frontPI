import React from 'react'

export default function UserProfile({user}) {

  const firstNameLetter = user.firstName.charAt(0);
  const lastNameLetter = user.lastName.charAt(0);
  return (
    <div className='profile-container'>
      <div className='profile-icon-container'>
        <span className='profile-letters'>{`${firstNameLetter}${lastNameLetter}`}</span>
      </div>
      <div className='profile-name-container'>
        <p>Hola,</p>
        <p className='profile-name'>Bruno Rodríguez</p>
      </div>
    </div>
  )
}
