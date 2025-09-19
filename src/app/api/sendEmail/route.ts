"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // 👈 Importa para redirecionamento
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const router = useRouter(); // 👈 Hook para redirecionar

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    vendas: "",
    cargo: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Formulário enviado com sucesso!");
        setFormData({
          nome: "",
          email: "",
          empresa: "",
          telefone: "",
          vendas: "",
          cargo: "",
        });

        // Redireciona após 1.5 segundos
        setTimeout(() => {
          router.push("/obrigado");
        }, 1500);
      } else {
        setMessage(data.message || "Erro ao enviar formulário");
      }
    } catch (error) {
      setMessage("Erro na conexão. Tente novamente.");
    }

    setLoading(false);
  }

  // ... Resto do JSX do formulário
}
