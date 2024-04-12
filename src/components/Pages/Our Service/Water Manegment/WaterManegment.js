import React, { useState, useEffect } from 'react';
import WaterHeader from './WaterHeader'; // Import the WaterHeader component
import axios from 'axios';
import exifr from 'exifr'; // Import the exifr library
import './WaterManagement.css';

const WaterManagement = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gpsCoordinates, setGpsCoordinates] = useState(null); // State to store GPS coordinates

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

    // Get GPS coordinates from the uploaded image
    const gps = await getGPSFromImage(file);
    setGpsCoordinates(gps);
  };

  const handleUpload = () => {
    // Logic to upload the selected image
    alert('Image uploaded successfully!');
  };

  const getGPSFromImage = async (file) => {
    try {
      const exifData = await exifr.parse(file);
      const gps = {
        latitude: exifData?.latitude,
        longitude: exifData?.longitude,
      };
      return gps;
    } catch (error) {
      console.error('Error parsing EXIF data:', error);
      return null;
    }
  };

  return (
    <div className="water-body">
      <WaterHeader /> {/* Include the WaterHeader component */}
      <div className="container mt-5">
        <div className="border p-4 rounded">
          <h2>Water Leakage Reporting</h2>
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
              {gpsCoordinates && (
                <p>
                  GPS Coordinates: {gpsCoordinates.latitude}, {gpsCoordinates.longitude}
                </p>
              )}
            </div>
          )}
          <button className="btn btn-primary" onClick={handleUpload}>Upload</button>
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
