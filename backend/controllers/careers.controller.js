export const applyJob = (req, res) => {
  const { name, email, role, experience } = req.body;

  if (!name || !email || !role)
    return res.status(400).json({ message: "Missing fields" });

  // DB later
  console.log("New Job Application:", req.body);

  res.json({ message: "Application submitted successfully" });
};
