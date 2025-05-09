import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'tayyabjunaidofficiall@gmail.com',
      subject: `Contact Form - ${name}`,
      text: message,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('SendMail Error:', err);
    return res.status(500).json({ error: err.message });
  }
}
