import express, { Express, Request, Response } from "express";
import { rootCertificates } from "tls";

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.get('/hello-world', (req: Request, res: Response) => {
    res.status(200).end("Hello-World from express")
})

export default app;
