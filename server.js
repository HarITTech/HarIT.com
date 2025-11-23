// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";

// const app = express();
// app.use(express.json());
// app.use(cors());

// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "harittechsolution@gmail.com",
//         pass: "jdjtmpcfjbpomodf"
//     }
// });

// app.post("/contact", async (req, res) => {
//     try {
//         const { name, email, phone, service, message } = req.body;

//         // Validate
//         if (!name || !email || !phone || !service || !message) {
//             return res.status(400).json({
//                 success: false,
//                 message: "All fields are required"
//             });
//         }

//         await transporter.sendMail({
//             from: `"HarIT Contact" <harittechsolution@gmail.com>`,
//             to: "harittechsolution@gmail.com",
//             subject: `New Contact Message from ${name}`,
//             html: `
//         <h2>New Contact Inquiry</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>

//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//         });

//         res.json({
//             success: true,
//             message: "Message sent successfully"
//         });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to send message",
//             error: error.message
//         });
//     }
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


// import nodemailer from "nodemailer";

// export async function sendContactMail({ name, email, phone, service, message }) {
//     try {
//         // Validate fields
//         if (!name || !email || !phone || !service || !message) {
//             return { success: false, message: "All fields are required" };
//         }

//         // Mail transporter
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: "harittechsolution@gmail.com",
//                 pass: "jdjtmpcfjbpomodf"
//             }
//         });

//         // Send email
//         await transporter.sendMail({
//             from: `"HarIT Contact" <harittechsolution@gmail.com>`,
//             to: "harittechsolution@gmail.com",
//             subject: `New Contact Message from ${name}`,
//             html: `
//         <h2>New Contact Inquiry</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Service:</strong> ${service}</p>

//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `
//         });

//         return { success: true, message: "Message sent successfully" };

//     } catch (error) {
//         return {
//             success: false,
//             message: "Failed to send message",
//             error: error.message
//         };
//     }
// }

