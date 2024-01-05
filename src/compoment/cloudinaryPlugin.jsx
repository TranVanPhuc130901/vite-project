// CloudinaryFileManagerPlugin.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CloudinaryFileManagerPlugin = ({ onImageSelected, onDeleteImage  }) => {
  const [images, setImages] = useState([]);


  const filePickerCallback = (file) => {
      
  }
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get('http://localhost:8989/api/get-files');
        setImages(response.data.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };

    getImages();
  }, []);

  const handleImageClick = (image) => {
    // Do something with the selected image, for example, insert it into the editor.
    if (onImageSelected) {
      onImageSelected(image.secure_url);
    }
  };

  const handleKeyDown = (event, image) => {
    // Bắt sự kiện nhấn nút "Delete"
    if (event.keyCode  === 46 ) {
      onDeleteImage(image.secure_url);
    }
    
  };

  return (
    <div className='cloudinary-file-manager-container'>
        <div className='cloudinary-file-manager'>
            {images.map((image) => (
                <div className='item-cloudinary' key={image.asset_id}>
                    <img
                        style={{  height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                        src={image.secure_url}
                        alt={image.alt}
                        onClick={() => handleImageClick(image)}
                        onKeyDown={(event) => handleKeyDown(event, image)}
                        tabIndex={0}
                    />
                    <div className='item-name'>image name :{image.public_id}</div>
                    <div className='item-size'>image size:{image.bytes / 1024}</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CloudinaryFileManagerPlugin;
