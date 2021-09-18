import { useState } from 'react';
import {Form, Button, FloatingLabel} from 'react-bootstrap'

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // const data = {
        //   name,
        //   email,
        //   message,
        //   subject
        // };
        // console.log(data);

        // fetch('/api/contact', {
        //     method: 'post',
        //     body: JSON.stringify(data),
        // });

        const mailto =
          `mailto:puneet.softweb@gmail.com?subject=${subject} | ${name}&body=Hello CFV, %0D%0A %0D%0A Please contact me: ${email} %0D%0A %0D%0A ${message} %0D%0A %0D%0A Regards, %0D%0A ${name} %0D%0A %0D%0A`;
        window.location.href = mailto;
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-2"
            ><Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Email *"
                className="mb-2"
            ><Form.Control type="text" onChange={e => setEmail(e.target.value)} placeholder="Email *" required={true} />
            </FloatingLabel>
            <FloatingLabel
                controlId="floatingInput"
                label="Subject"
                className="mb-2"
            ><Form.Control type="text" onChange={e => setSubject(e.target.value)} placeholder="Subject" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control
                as="textarea"
                className="mb-4"
                onChange={e => setMessage(e.target.value)}
                placeholder="Message"
                style={{ height: '100px' }}
                />
            </FloatingLabel>

            <Button className="btn btn-grad rounded-0 border-0" type="Submit">
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;