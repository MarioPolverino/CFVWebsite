import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [subject, setSubject] = useState('');

  // const handleSubmit = e => {
  //     e.preventDefault();
  //     // const data = {
  //     //   name,
  //     //   email,
  //     //   message,
  //     //   subject
  //     // };
  //     // console.log(data);

  //     // fetch('/api/contact', {
  //     //     method: 'post',
  //     //     body: JSON.stringify(data),
  //     // });

  //     const mailto =
  //       `mailto:puneet.softweb@gmail.com?subject=${subject} | ${name}&body=Hello CFV, %0D%0A %0D%0A Please contact me: ${email} %0D%0A %0D%0A ${message} %0D%0A %0D%0A Regards, %0D%0A ${name} %0D%0A %0D%0A`;
  //     window.location.href = mailto;
  // };
  // onSubmit={handleSubmit}

  const [value, setValue] = useState("");

  function onChange(value) {
    setValue(value);
  }

  return (
    <div>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        encType="application/x-www-form-urlencoded"
      >
        <input type="hidden" name="form-name" value="contact" />

        <p className="mb-3 field-wrapper">
          <label htmlFor="full_name">Full name *</label>
          <input
            type="text"
            id="full_name"
            title="2+ characters."
            name="full_name"
            className="form-control"
          />
        </p>

        <p className="mb-3 field-wrapper">
          <label htmlFor="your_email">Email *</label>
          <input
            type="email"
            id="your_email"
            name="your_email"
            className="form-control"
          />
        </p>
        <p className="mb-3 field-wrapper">
          <label htmlFor="your_message">Message *</label>
          <textarea
            className="form-control"
            name="your_message"
            title="10+ characters"
            rows="5"
          ></textarea>
        </p>

        <div className="mb-4">
          <ReCAPTCHA
            className="g-recaptcha"
            //                     ref={e => (captcharef = e)}
            sitekey="6Lc7534cAAAAACWBC8my5fNqMZotnd2GadA_E6c2"
            onChange={onChange}
            //                     render="explicit"
            //                     expiredCallback={expiredCaptcha}
            //                     onloadCallback={console.log.bind(this, "recaptcha loaded")}
            //                     verifyCallback={verifyCaptcha}
          />
        </div>

        <Button
          className="btn-cta w-100 btn-cta-blue rounded-0 border-0"
          disabled={value ? false : true}
          type="Submit"
        >
          Send
        </Button>
      </Form>

      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
        encType="application/x-www-form-urlencoded"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-2">
          {/* <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Name" /> */}
          <input
            type="text"
            name="your_name"
            placeholder="Name"
            className="form-control"
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Email *"
          className="mb-2"
        >
          {/* <Form.Control type="text" onChange={e => setEmail(e.target.value)} placeholder="Email *" required={true} /> */}
          <input
            type="email"
            name="your_email"
            placeholder="Email *"
            className="form-control"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Subject"
          className="mb-2"
        >
          {/* <Form.Control type="text" onChange={e => setSubject(e.target.value)} placeholder="Subject" /> */}
          <input
            type="text"
            name="your_subject"
            placeholder="Subject"
            className="form-control"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Message">
          {/* <Form.Control
                as="textarea"
                className="mb-4"
                onChange={e => setMessage(e.target.value)}
                name="message"
                placeholder="Message"
                style={{ height: '100px' }}
                /> */}
          <textarea
            className="mb-4 form-control"
            name="your_message"
            placeholder="Message"
            style={{ height: "100px" }}
          ></textarea>
        </FloatingLabel>

        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6Lc7534cAAAAACWBC8my5fNqMZotnd2GadA_E6c2"
            onChange={onChange}
          />
        </div>

        <Button
          className="btn btn-grad rounded-0 border-0"
          disabled={value ? false : true}
          type="Submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
