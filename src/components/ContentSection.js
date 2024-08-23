import React, { useState } from 'react';
import { Row, Col, message, Button, Modal } from 'antd';
import { uploadFiles } from '../services/api';
import FileUpload from '../components/ContentSection/FileUpload';
import ResultCard from '../components/ContentSection/ResultCard';
import LoadingScreen from '../components/ContentSection/LoadingScreen';
import '../styles/content.css';

const ContentSection = () => {
  const [files, setFiles] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);

  const handleFiles = ({ fileList }) => {
    setFiles(fileList);
  };

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const clearFiles = () => {
    setFiles([]);
    message.info('Files cleared');
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      message.warning('Please select at least one file to upload.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await uploadFiles(files);
      setResultData(result);
    } catch (error) {
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (resultData) {
    return (
      <div className="result-screen">
        <h1>AI-Assisted Diagnosis</h1>
        <p style={{ color: '#009baa' }}>in Otolaryngological Endoscopy</p>
        
        <Row gutter={[16, 16]} className="result-cards-container">
          {files.map((file, index) => (
            <Col xs={24} sm={12} md={8} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <ResultCard
                file={file}
                index={index}
                openImageModal={openImageModal}
                description={resultData.predictions[index][1]}
              />
            </Col>
          ))}
        </Row>
        <Button type="primary" onClick={() => window.location.reload()} className="upload-more-button" style={{ backgroundColor: '#009baa' }}>
          Upload More
        </Button>
      </div>
    );
  }

  return (
    <div className="content-section">
      <h1>AI-Assisted Diagnosis</h1>
      <p style={{ color: '#009baa' }}>in Otolaryngological Endoscopy</p>
      <FileUpload
        files={files}
        handleFiles={handleFiles}
        handleUpload={handleUpload}
        clearFiles={clearFiles}
        openImageModal={openImageModal}
      />
      <Modal visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <img alt="Preview" style={{ width: '100%' }} src={selectedImage} />
      </Modal>
    </div>
  );
};

export default ContentSection;
