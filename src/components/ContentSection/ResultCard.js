import { Card, Modal } from 'antd';
import React, { useState } from 'react';
import '../../styles/content.css';

const { Meta } = Card;

const ResultCard = ({ file, index, description }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const imageUrl = URL.createObjectURL(file.originFileObj);

  return (
    <>
      <Card
        hoverable
        className="result-card"
        cover={
          <img
            alt={`uploaded-${index}`}
            src={imageUrl}
            onClick={() => showModal(imageUrl)}
          />
        }
      >
        <Meta
          className="card-description"
          description={
            <>
              <div className="status-label">Tình trạng:</div>
              <div>{description}</div>
            </>
          }
        />
      </Card>

      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt={`modal-uploaded-${index}`}
          src={modalContent}
          style={{ width: '100%' }}
        />
        <div className="modal-description">
          <div className="status-label">Tình trạng:</div>
          <div>{description}</div>
        </div>
      </Modal>
    </>
  );
};

export default ResultCard;
