import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // 1. Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your SMTP service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password if using Gmail
      },
    });

    // 2. Setup email data
    const mailOptions = {
      from: `"Innovative Media Institute" <${process.env.EMAIL_USER}>`,
      to: "youremail@example.com", // where you want to receive
      subject: `New Admission Application from ${data.fullName}`,
      html: `
        <h3>New Admission Application</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>DOB:</strong> ${data.dob}</p>
        <p><strong>Gender:</strong> ${data.gender}</p>
        <p><strong>Education:</strong> ${data.education}</p>
        <p><strong>Course:</strong> ${data.course}</p>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>State:</strong> ${data.state}</p>
        <p><strong>Message:</strong> ${data.message || "N/A"}</p>
      `,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: "Email sent!" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
