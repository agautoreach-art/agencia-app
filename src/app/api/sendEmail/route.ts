import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { nome, email, empresa, telefone, vendas, cargo } = data;

    if (!nome || !email || !empresa || !telefone || !vendas || !cargo) {
      return NextResponse.json({ message: "Preencha todos os campos." }, { status: 400 });
    }

    // Configurar o transporte SMTP do Nodemailer usando Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,      // Seu email Gmail
        pass: process.env.GMAIL_PASS,      // Sua senha de app (não a senha normal)
      },
    });

    // Montar o conteúdo do email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,  // pode mudar para onde quer receber
      subject: `Novo lead - ${nome}`,
      text: `
        Nome: ${nome}
        Email: ${email}
        Empresa: ${empresa}
        Telefone: ${telefone}
        Vendas: ${vendas}
        Cargo: ${cargo}
      `,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ message: "Erro ao enviar email." }, { status: 500 });
  }
}
