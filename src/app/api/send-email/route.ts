import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { fullName, email, phone, message } = await request.json();

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${fullName}" <${process.env.EMAIL_USER}>`,
    to: `vishalsingh173911@gmail.com`,
    subject: `Contact Form Submission Confirmation - ${fullName}`,
    text: `
      Hi ${fullName},

      Thank you for reaching out to Wire Wave Information Networks! We’ve received your message and will get back to you within 24 hours.

      Your Details:
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Message: ${message}

      Best regards,
      The Wire Wave Team
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
