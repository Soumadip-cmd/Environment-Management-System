import React, { useState, useEffect } from 'react';
import WaterHeader from './WaterHeader';
import axios from 'axios';
import exifr from 'exifr'; // Import exifr for parsing EXIF data
import './WaterManagement.css';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [liveLocation, setLiveLocation] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchRandomImages = async () => {
      try {
        const response = await axios.get('https://source.unsplash.com/random/1536x500?/nature');
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
    setShowForm(true); // Show the form after selecting image
  };

  const handleUpload = () => {
    // Logic to upload the selected image
    alert('Image uploaded successfully!');
  };

  const hasLiveLocation = async (file) => {
    try {
      const exifData = await exifr.parse(file);
      // Check if the exifData contains GPS coordinates
      if (exifData && exifData.latitude && exifData.longitude) {
        return { latitude: exifData.latitude, longitude: exifData.longitude };
      } else {
        // If no GPS coordinates in the image, try to get device's current location
        return getLocation();
      }
    } catch (error) {
      console.error('Error parsing EXIF data:', error);
      return null; // Unable to parse EXIF data or get device location
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

  return (
    <div className="water-body">
      <WaterHeader />
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2>Water Leakage Reporting</h2>
          <form onSubmit={handleUpload}>
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
            {showForm && (
              <div>
                <div className="mb-3">
                  <label htmlFor="issue">Describe the issue:</label>
                  <textarea className="form-control" id="issue" rows="3"></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="name">Your Name:</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Your Email:</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <div className="random-images">
            {randomImages.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Random Image ${index}`} className="img-fluid" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterManagement;
