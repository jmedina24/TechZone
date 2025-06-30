import React from 'react'
import user from '../images/user.webp'

const PersonalInformationAccess = () => {
  return (
    <div className='personalInformation__container'>
        <div className='personalInformation__container-photo'>
            <img className='personalInformation__photo' src={user} alt='user' />
        </div>
        <div className='personalInformation__container-name'>
            Jonatan Medina
        </div>
    </div>
  )
}

export default PersonalInformationAccess