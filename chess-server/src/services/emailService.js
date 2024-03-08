const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (to, subject, body) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: to,
    subject: subject,
    text: body,
  };

  try{
    const info = await transporter.sendMail(mailOptions);
    return info;
  }
  catch{
    return false;
  }
  
};

