import React, { useState } from 'react';

function ProfilePicture() {
  const handleClick = () => {
    // Navigate to the account settings page
  };
  
  const [imageUrl, setImageUrl] = useState('');
  const [buttonText, setButtonText] = useState('Add Profile Picture');

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
      setButtonText('Change Profile Picture');
    }

    reader.readAsDataURL(file);
  }

  return (
    <div style={{ position: 'absolute', top: '0', left: '0' }}>
      <div
        onClick={handleClick}
        style={{
          width: '150px',
          height: '150px',
          backgroundImage: `url(${imageUrl || 'https://example.com/path/to/generic-image.jpg'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '50%',
          display: 'inline-block',
        }}
      >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        style={{
          width: '50px',
          height: '50px',
          position: 'absolute',
          opacity: 0
        }}
      />
      </div>
      <button 
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
      </button>
    </div>
  );
}

export default ProfilePicture;