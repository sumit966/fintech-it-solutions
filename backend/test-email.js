import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

async function testEmail() {
    console.log("\n?? Testing email...");
    console.log("MAIL_USER:", process.env.MAIL_USER);
    console.log("MAIL_PASS:", process.env.MAIL_PASS ? "? Set" : "? Missing");
    
    if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
        console.error("? Missing email credentials in .env");
        return;
    }
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    
    try {
        await transporter.verify();
        console.log("? SMTP connection successful!");
        
        await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: "Test Email from Backend",
            text: "If you receive this, email is working!"
        });
        console.log("? Test email sent! Check your inbox.");
    } catch (error) {
        console.error("? Email error:", error.message);
        if (error.message.includes("Invalid login")) {
            console.log("\n?? This means your Gmail password is wrong.");
            console.log("You need to use an App Password, not your regular password.");
            console.log("Create one at: https://myaccount.google.com/apppasswords");
        }
    }
}

testEmail();
