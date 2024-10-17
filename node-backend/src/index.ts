import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Enable CORS for all origins
app.use(cors({
    origin: 'http://localhost:5173'
  }));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
