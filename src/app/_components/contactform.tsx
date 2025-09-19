"use client";

import { useState } from "react";

export function ContactForm() {
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
      } else {
        setMessage(data.message || "Erro ao enviar formulário");
      }
    } catch (error) {
      setMessage("Erro na conexão. Tente novamente.");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Campos do formulário */}
      <div>
        <label>Seu nome completo</label>
        <input
          type="text"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      {/* Faça o mesmo para email, empresa, telefone, vendas, cargo */}
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <label>Qual o nome da sua empresa</label>
        <input
          type="text"
          name="empresa"
          required
          value={formData.empresa}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <label>Qual seu telefone com DDD</label>
        <input
          type="tel"
          name="telefone"
          required
          value={formData.telefone}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <div>
        <label>Qual a média de vendas mensal na sua loja</label>
        <select
          name="vendas"
          required
          value={formData.vendas}
          onChange={handleChange}
          className="w-full"
        >
          <option value="">Selecione</option>
          <option value="Até 5 vendas">Até 5 vendas</option>
          <option value="6 a 15 vendas">6 a 15 vendas</option>
          <option value="16 a 30 vendas">16 a 30 vendas</option>
          <option value="Mais de 30 vendas">Mais de 30 vendas</option>
        </select>
      </div>

      <div>
        <label>Qual o seu cargo</label>
        <select
          name="cargo"
          required
          value={formData.cargo}
          onChange={handleChange}
          className="w-full"
        >
          <option value="">Selecione</option>
          <option value="Proprietário(a)">Proprietário(a)</option>
          <option value="Gerente">Gerente</option>
          <option value="Vendedor(a)">Vendedor(a)</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#002f6b] hover:bg-green-600 text-white font-semibold py-3 rounded-md"
      >
        {loading ? "Enviando..." : "ENVIAR"}
      </button>

      {message && <p className="mt-4">{message}</p>}
    </form>
  );
}
