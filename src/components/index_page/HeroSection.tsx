/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { SimpleButton } from "../SimpleButton";



const HeroSection = () => {
  const [isEmpresa, setIsEmpresa] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    cnpj: "",
  });

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    celular: "",
    cnpj: "",
  });

  const handleTipoChange = (event: { target: { value: string; }; }) => {
    setIsEmpresa(event.target.value === "empresa");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };


  const validateCNPJ = (cnpj: string) => {
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/; // Formato XX.XXX.XXX/XXXX-XX
    return regex.test(cnpj);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: any = {};

    // Validação dos campos
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Por favor, insira um e-mail válido.";
    }

    if (!formData.celular) {
      newErrors.celular = "Por favor, insira um número de celular válido!";
    }

    if (isEmpresa && (!formData.cnpj || !validateCNPJ(formData.cnpj))) {
      newErrors.cnpj = "Por favor, insira um CNPJ válido.";
    }

    if (!isEmpresa && !formData.nome) {
      newErrors.nome = "Por favor, insira seu nome.";
    }

    setErrors(newErrors);

    // Se não houver erros, você pode prosseguir com a submissão
    if (Object.keys(newErrors).length === 0) {
      // Realizar a submissão do formulário
      console.log("Formulário enviado", formData);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
      style={{
        backgroundImage: "url(/images/mask_group.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Parte Esquerda */}
        <div className="flex-1 flex flex-col justify-center">
        <SimpleButton label="Tecnologia disruptiva" />

          <h1 className="text-6xl font-bold text-white mb-4">
            Conta digital que não é só uma conta digital.
          </h1>
          <p className="text-white mb-6">
            Pellentesque rutrum turpis non est turpis pretium morbi urna.
          </p>
          <div className="w-10 border-t-2 border-blue-500 mb-6"></div>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">120</span>
              <span className="text-white">Projeto realizado 2021</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">12</span>
              <span className="text-white">Escritórios no Brasil</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">15mi</span>
              <span className="text-white">Faturamento 2021</span>
            </div>
          </div>
        </div>

        {/* Parte Direita - Container do Formulário */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
          <p className="text-sm text-gray-600 mb-2">
            Faça parte da revolução digital!
          </p>
          <h2 className="text-2xl font-bold text-black mb-6">
            Cadastre-se e faça parte do lançamento oficial
          </h2>

          {/* Opções para selecionar tipo */}
          <div className="flex space-x-4 mb-6">
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="tipo"
                value="pessoa"
                checked={!isEmpresa}
                onChange={handleTipoChange}
                className="mr-2"
              />
              Para você
            </label>
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="tipo"
                value="empresa"
                checked={isEmpresa}
                onChange={handleTipoChange}
                className="mr-2"
              />
              Para empresa
            </label>
          </div>

          {/* Formulário para "Para você" ou "Para empresa" */}
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {isEmpresa ? (
              <>
                <input
                  type="text"
                  name="cnpj"
                  placeholder="CNPJ"
                  value={formData.cnpj}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.cnpj && <p className="text-red-500 text-sm">{errors.cnpj}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <input
                  type="text"
                  name="celular"
                  placeholder="Celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.celular && <p className="text-red-500 text-sm">{errors.celular}</p>}

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Quero para minha empresa
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                <input
                  type="text"
                  name="celular"
                  placeholder="Celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.celular && <p className="text-red-500 text-sm">{errors.celular}</p>}

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Quero ser cliente
                </button>
              </>
            )}
          </form>

          <div className="mt-6 p-4 bg-gray-100 rounded shadow">
            <p className="text-sm text-gray-700">
              Ao enviar seus dados, você autoriza que o SmartMoney entre em
              contato e declara estar ciente da{" "}
              <a href="#" className="underline text-blue-600">
                Política de Privacidade
              </a>
            </p>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span className="text-gray-700 text-sm">Seus dados estão seguros</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
