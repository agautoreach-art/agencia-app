"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { generateLead } from "@/lib/gtag";

export function ContactForm() {
  const router = useRouter();

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
        // Dispara evento do GA4 para lead
        generateLead({
          value: 1.0,              // valor fictício ou baseado no seu funil
          currency: "BRL",
          lead_source: "LP AutoReach",
        });

        // Limpa o formulário
        setFormData({
          nome: "",
          email: "",
          empresa: "",
          telefone: "",
          vendas: "",
          cargo: "",
        });

        // Redireciona para página de obrigado
        router.push("/obrigado");
      } else {
        setMessage(data.message || "Erro ao enviar formulário");
      }
    } catch (error) {
      setMessage("Erro na conexão. Tente novamente.");
    }

    setLoading(false);
  }

  return (
    <div
      id="formulario"
      className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row gap-8 scroll-mt-24"
    >
      {/* Coluna do texto */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold text-[#002f6b] mb-4 py-10 text-center md:text-left">
          Preencha o formulário e tenha uma agência de marketing feita sob medida para sua loja
        </h2>

        <div className="space-y-2 mb-8 text-gray-600 text-sm md:text-base text-center md:text-left">
          <p className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 focus:ring-[#002f6b] shrink-0 mt-0.5" />
            <span>Todos os seus dados estarão seguros conosco.</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 focus:ring-[#002f6b] shrink-0 mt-0.5" />
            um dos nossos especialistas entrará em contato para agendar a reunião mais importante com você.
          </p>
        </div>
      </div>

      {/* Coluna do formulário */}
      <div className="md:w-1/2 md:py-5">
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-md shadow-md border">
          {/* Campos do formulário */}
          <div>
            <label className="block text-sm font-medium mb-1">Seu nome</label>
            <input
              type="text"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f6b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f6b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Qual o nome ou @ da sua loja</label>
            <input
              type="text"
              name="empresa"
              required
              value={formData.empresa}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f6b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Qual seu telefone com DDD</label>
            <input
              type="tel"
              name="telefone"
              required
              value={formData.telefone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f6b]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Qual a média de vendas mensal na sua loja</label>
            <select
              name="vendas"
              required
              value={formData.vendas}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f6b]"
            >
              <option value="">Selecione</option>
              <option value="Até 5 vendas">Até 5 vendas</option>
              <option value="6 a 15 vendas">6 a 15 vendas</option>
              <option value="16 a 30 vendas">16 a 30 vendas</option>
              <option value="Mais de 30 vendas">Mais de 30 vendas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Qual o seu cargo</label>
            <select
              name="cargo"
              required
              value={formData.cargo}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#002f6b]"
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
            className="w-full bg-[#002f6b] hover:bg-green-600 text-white font-semibold py-3 shadow-sm rounded-md transition"
          >
            {loading ? "Enviando..." : "ENVIAR"}
          </button>

          {message && <p className="mt-4 text-red-600">{message}</p>}
        </form>
      </div>
    </div>
  );
}
