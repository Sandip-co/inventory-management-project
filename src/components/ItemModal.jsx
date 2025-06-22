import React from 'react';
import emailjs from 'emailjs-com';

const ItemModal = ({ item, onClose }) => {
  const sendEnquiry = () => {
    const templateParams = {
      to_name: 'Admin',
      from_name: 'Website User',
      message: `Enquiry about item: ${item.name}`,
    };

    emailjs.send('service_1yv5odp', 'template_e068b9c', templateParams, 'Lni-AGBf4VH_Q4cXG')
      .then(() => alert('Enquiry sent!'))
      .catch(() => alert('Failed to send enquiry.'));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>X</button>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="carousel">
          {[item.coverImage, ...item.additionalImages].map((img, idx) => (
            <img key={idx} src={img}  />
          ))}
        </div>
        <button onClick={sendEnquiry}>Enquire</button>
      </div>
    </div>
  );
};

export default ItemModal;
