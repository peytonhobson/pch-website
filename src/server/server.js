const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

console.log(process.env.VUE_APP_BASE_URL);

// Enable CORS
app.use(cors({ origin: process.env.VUE_APP_BASE_URL }));

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Serve static files from the Vue.js build directory
app.use(express.static(path.join(__dirname, "dist")));

// Email sending endpoint
app.post("/contact-email", async (req, res) => {
  const { name: senderName, email, subject } = req.body;

  const msg = {
    template_id: "d-16180d1ed06a4f578e60b245cbeb5d02",
    from: "peyton.hobson1@gmail.com",
    personalizations: [
      {
        to: "premiercarehomes@comcast.net",
        dynamic_template_data: {
          name: senderName,
          email: email,
          message: subject,
        },
      },
    ],
  };

  try {
    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error?.response?.body?.errors);
    res.status(500).json({ message: "Error sending email", error });
  }
});

app.post("/employment-email", async (req, res) => {
  const { name: senderName, email, phoneNumber, file } = req.body;

  const msg = {
    template_id: "d-a6dae8b1eb7e4dd69156c0861c9cf6a4",
    from: "peyton.hobson1@gmail.com",
    attachments: [
      {
        filename: "Resume.pdf",
        content: file,
        type: "application/pdf",
        disposition: "attachment",
      },
    ],
    personalizations: [
      {
        to: "premiercarehomes@comcast.net",
        dynamic_template_data: {
          name: senderName,
          email: email,
          phoneNumber: phoneNumber,
        },
      },
    ],
  };

  try {
    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error?.response?.body?.errors);

    res.status(500).json({ message: "Error sending email", error });
  }
});

app.post("/friend-email", async (req, res) => {
  const { submitterName, submitterEmail, friendName, friendEmail } = req.body;

  const msg = {
    template_id: "d-c30d5d08f9324f1e80b143e6152ec2b6",
    from: "peyton.hobson1@gmail.com",
    personalizations: [
      {
        to: "premiercarehomes@comcast.net",
        dynamic_template_data: {
          submitterName,
          submitterEmail,
          friendName,
          friendEmail,
        },
      },
    ],
  };

  try {
    await sgMail.send(msg);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error?.response?.body?.errors);

    res.status(500).json({ message: "Error sending email", error });
  }
});

// Catch all routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
