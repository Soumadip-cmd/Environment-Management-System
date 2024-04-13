import React, { useState, useEffect, useContext } from 'react';
import WaterHeader from './WaterHeader';
import axios from 'axios';
import exifr from 'exifr';
import GarbageHeader from './GarbageHeader';
import CameraContext from './context/CameraContext';
import CameraProfile from './Camera/CameraProfile';
import CameraBg from './Camera/CameraBg';
import GarbagemainBody from './GarbagemainBody';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [liveLocation, setLiveLocation] = useState(null);
  const { image, bgimage1 } = useContext(CameraContext);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1536x500?/water');
        setRandomImages([response.request.responseURL]);
      } catch (error) {
        console.error('Error fetching random images:', error);
      }
    };

    fetchRandomImages();
  }, []);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    const location = await hasLiveLocation(file);
    console.log('Live location:', location);
    setLiveLocation(location);
  };

  const handleUpload = () => {
    // Logic to upload the selected image
    alert('Image uploaded successfully!');
  };

  const hasLiveLocation = async (file) => {
    try {
      const exifData = await exifr.parse(file);
      if (exifData && exifData.latitude && exifData.longitude) {
        return { latitude: exifData.latitude, longitude: exifData.longitude };
      } else {
        return getLocation();
      }
    } catch (error) {
      console.error('Error parsing EXIF data:', error);
      return null;
    }
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  };

  const handleShowLocation = () => {
    if (liveLocation) {
      const { latitude, longitude } = liveLocation;
      window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, '_blank');
    } else {
      alert('No live location available.');
    }
  };

  return (
    <div className="water-body">
      <GarbageHeader />
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2>Water Leakage Reporting</h2>
          <div className="random-images">
            {randomImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Random Image ${index}`} className="img-fluid mb-3" />
            ))}
          </div>
          <div className="mb-3">
            <label htmlFor="report">Write your water leakage problem:</label>
            <textarea className="form-control" id="report" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="imageUpload">Upload Image:</label>
            <input
              type="file"
              className="form-control"
              id="imageUpload"
              accept="image/jpeg, image/png"
              onChange={handleImageChange}
            />
          </div>
          {selectedImage && (
            <div className="mb-3">
              <img src={selectedImage} alt="Selected" className="img-fluid" />
            </div>
          )}
          <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
          {liveLocation && (
            <button className="btn btn-secondary ms-2" onClick={handleShowLocation}>
              Show Live Location on Map
            </button>
          )}
        </div>
      </div>
      <div className="container my-5">
        <GarbagemainBody />
      </div>
    </div>
  );
};

export default WaterManagement;
