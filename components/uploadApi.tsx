// pages/upload.tsx

import { useState } from 'react';
import axios from 'axios';

const UploadPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    file: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData({
      ...formData,
      //@ts-ignore
      file,
    });
  };

  const handleUpload = async () => {
    //@ts-ignore
    const { title, description, file } = formData;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData);
      console.log('Uploaded:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input type="text" name="title" placeholder="Title" onChange={handleInputChange} />
      <input type="text" name="description" placeholder="Description" onChange={handleInputChange} />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadPage;
