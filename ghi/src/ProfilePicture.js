import { withTheme } from '@emotion/react';
import React, { useState } from 'react';

function ProfilePicture() {
  const handleClick = () => {
    // Navigate to the account settings page
  };
  
  const [imageUrl, setImageUrl] = useState('');
  const [buttonText, setButtonText] = useState('Add Profile Picture');

//   const handleChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       setImageUrl(reader.result);
//       setButtonText('Change Profile Picture');
//     }

//     reader.readAsDataURL(file);
//   }

  return (
    <div className="picposition">
      <div
        onClick={handleClick}
        style={{
          width: '150px',
          height: '150px',
          backgroundImage: `url(${imageUrl || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '55px',
          display: 'inline-block',
        //   border: 'white'
        }}
      >
      {/* <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{
          width: '50px',
          height: '50px',
          position: 'absolute',
          opacity: 0
        }}
      /> */}
      </div>
      {/* <button 
        style={{
          position: 'absolute',
          top: '60px',
          left: '0',
          opacity: '0.5',
          bottom: '0',
          height: '50px',
          width: '50px'
        }}
        onClick={() => {
            var fileInput = document.getElementsByTagName('input')[0];
            fileInput.click();
        }}>
        {buttonText}
      </button> */}
    </div>
  );
}

export default ProfilePicture;