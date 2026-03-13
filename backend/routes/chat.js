import express from "express";

const router = express.Router();

/* Temporary chatbot without OpenAI */

router.post("/", async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message required" });
    }

    const msg = message.toLowerCase();

    let reply = "Thanks for contacting Fintech IT Solutions. Our team will respond soon.";

    if (msg.includes("service")) {
      reply = "We provide Cloud Engineering, AI Platforms, Cybersecurity and Enterprise Software Development.";
    }

    else if (msg.includes("career") || msg.includes("job")) {
      reply = "You can explore open positions on our Careers page.";
    }

    else if (msg.includes("contact")) {
      reply = "You can contact us through the Contact page or email fintechitsolutions.info@gmail.com.";
    }

    else if (msg.includes("company")) {
      reply = "Fintech IT Solutions builds enterprise digital platforms using cloud computing, AI and cybersecurity.";
    }

    res.json({ reply });

  } catch (error) {

    console.error("CHAT ERROR:", error);

    res.status(500).json({
      error: "Chat service failed"
    });

  }

});

export default router;