import express from "express";
import cors from 'cors'

const server = express();
const port = 3000;

server.use(cors());
server.use(express.json());

server.get("/", (_req, res) => {
  res.json({ status: "server running" });
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port} 🚀`);
});



