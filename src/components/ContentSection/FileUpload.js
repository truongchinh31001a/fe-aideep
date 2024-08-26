import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const FileUpload = ({ files, handleFiles, handleUpload, clearFiles, openImageModal }) => (
  <div>
    <Dragger
      multiple
      fileList={files}
      onChange={handleFiles}
      beforeUpload={() => false}
      listType="picture-card"
      onPreview={(file) => openImageModal(URL.createObjectURL(file.originFileObj))}
      className="upload-dragger"
    >
      <p className="ant-upload-drag-icon">
        <UploadOutlined style={{ color: '#29acf0' }}/>
      </p>
      <p className="ant-upload-text" style={{ color: '#29acf0' }}>Click or drag file to this area to upload</p>
    </Dragger>
    <div className="upload-buttons">
      <Button type="primary" onClick={handleUpload} style={{ marginRight: '10px', backgroundColor: '#29acf0' }}>
        Predict
      </Button>
      {files.length > 0 && (
        <Button onClick={clearFiles} style={{ color: '#29acf0' }}>
          Clear
        </Button>
      )}
    </div>
  </div>
);

export default FileUpload;
