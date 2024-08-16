import express from "express";
import routes from "./routes.js"
const app = express()
app.use(express.json());
const port = 9090

app.use("/api", routes)

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`)
})