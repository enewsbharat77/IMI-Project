import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Innovative Media Institute" <${process.env.EMAIL_USER}>`,
      to: "enewsbharat77@gmail.com",
      subject: `New ${data.formType} from ${data.fullName}`,
      html: `
        <h2>${data.formType}</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        ${data.dob ? `<p><strong>DOB:</strong> ${data.dob}</p>` : ""}
        ${data.gender ? `<p><strong>Gender:</strong> ${data.gender}</p>` : ""}
        ${data.education ? `<p><strong>Education:</strong> ${data.education}</p>` : ""}
        ${data.course ? `<p><strong>Course:</strong> ${data.course}</p>` : ""}
        ${data.address ? `<p><strong>Address:</strong> ${data.address}</p>` : ""}
        ${data.city ? `<p><strong>City:</strong> ${data.city}</p>` : ""}
        ${data.state ? `<p><strong>State:</strong> ${data.state}</p>` : ""}
        ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ""}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
