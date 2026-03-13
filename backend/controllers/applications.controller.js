import JobApplication from "../models/JobApplication.js";
import Job from "../models/Job.js";
import { sendEmail } from "../utils/email.js";

export const applyJob = async (req, res) => {
  try {
    const job = await Job.findById(req.body.jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    const application = await JobApplication.create({
      ...req.body,
      job_title: job.title,
      resume: req.file?.path,
    });

    /* ================= ADMIN EMAIL ================= */
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: "📩 New Job Application Received",
      html: `
        <h3>New Job Application</h3>
        <p><b>Candidate:</b> ${application.name}</p>
        <p><b>Email:</b> ${application.email}</p>
        <p><b>Job:</b> ${job.title}</p>
        <p><b>Experience:</b> ${application.experience}</p>
      `,
    });

    /* ================= CANDIDATE EMAIL ================= */
    await sendEmail({
      to: application.email,
      subject: "Application Received – FINTECH IT SOLUTIONS",
      html: `
        <h3>Thank you for applying</h3>
        <p>Dear ${application.name},</p>
        <p>We have received your application for <b>${job.title}</b>.</p>
        <p>Our HR team will contact you if shortlisted.</p>
        <br/>
        <p>Regards,<br/>FINTECH IT SOLUTIONS</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Application failed" });
  }
};
