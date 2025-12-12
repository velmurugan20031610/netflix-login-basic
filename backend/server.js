import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,POST",
}));

app.use(express.json());

const USER = {
  email: "test@gmail.com",
  password: "12345",
};

app.get("/", (req, res) => {
  res.send("Backend is running successfully!!");
});

app.post("/login", (req, res) => {
  console.log("Request Body:", req.body);
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }
  res.json({ success: false });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
