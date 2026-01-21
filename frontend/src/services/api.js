const API_URL = "http://localhost:5001/api";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
});

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
};

export const fetchEmployees = async () => {
  const res = await fetch(`${API_URL}/employees`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const fetchProjects = async () => {
  const res = await fetch(`${API_URL}/projects`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};

export const fetchPayroll = async () => {
  const res = await fetch(`${API_URL}/payroll`, {
    headers: getAuthHeaders(),
  });
  return res.json();
};
