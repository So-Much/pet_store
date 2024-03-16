import React, { useState } from 'react'

export default function UploadAvatar() {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('avatar', avatar);

    try {
      const response = await axios.post('http://your-api-endpoint/upload', formData);
      console.log('Avatar uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading avatar:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload Avatar</button>
    </div>
  );
};
