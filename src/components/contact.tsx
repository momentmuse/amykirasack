import * as React from 'react';

const Contact = ({ id }) => {
  return (
    <div
      id={id}
      style={{
        backgroundColor: `rosybrown`,
        height: `80vh`,
      }}
    >
      <h1>📧 This is the Contact component 📧</h1>
    </div>
  );
};

export default Contact;
