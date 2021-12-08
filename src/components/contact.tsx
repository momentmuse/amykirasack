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

      <form name="contact" method="POST">
        {/* data-netlify="true" <= add this as attribute to form tag */}
        <p>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
