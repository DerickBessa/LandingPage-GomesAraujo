import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {

	console.log("recebi:", req.body)

  const { name, email, subject, message } = req.body;

  try {

    const response = await resend.emails.send({
	from: "Site Gomes & Araújo <contato@gomesaraujoadvogados.com.br>",
	to: "adv.gomesaraujo01@gmail.com",
	subject: subject,
	html: `
		<h2>Site Gomes & Araújo</h2>
		<p><b>Nome:</b> ${name}</p>
		<p><b>Email:</b> ${email}</p>
		<p><b>Mensagem:</b> ${message}</p>
	`
	});

	console.log("email enviado:", response);

    res.json({ success: true });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao enviar email" });
  }

});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});