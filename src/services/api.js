import axios from 'axios';

const API_URL = 'http://localhost:8000/classify'; // URL của API

export const uploadFiles = async (files) => {
  const formData = new FormData();
  
  files.forEach(file => {
    formData.append('files', file.originFileObj); // Sử dụng 'files' thay vì 'files[]'
  });

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Upload failed');
  }
};
