const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);



async function ContactMail (req, res) {
    const body = JSON.parse(req.body);
    const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;

    const data = {
        to: 'mario.polverino@albeengineering.com',
        from: body.email,
        subject: `New message from ${body.name}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    console.log(data)

    await mail.send(data).then(() => {
        //Celebrate
        console.log('Email Sent!');
      })    
      .catch(error => {
    
        //Log friendly error
        console.error(error.toString());
        console.log(output)
    
        //Extract error msg
        // const {message, code, response} = error;
    
        //Extract response msg
        // const {headers, body} = response;
      });

    res.status(200).json({ status: 'OK' });
};

export default ContactMail;