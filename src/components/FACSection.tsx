import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  { id: 1, question: "Quais recursos ainda posso acessar nas novas Páginas?", answer: "Turpis at malesuada orci ultricies ipsum amet sed cras." },
  { id: 2, question: "Como faço para abrir a minha nova Página?", answer: "Enim ut urna feugiat ultrices semper quisque at." },
  { id: 3, question: "Há algum conteúdo que não migrará com a minha Página?", answer: "Viverra lectus ut a gravida aliquet cras est lectus ullamcorper." },
  { id: 4, question: "Como as pessoas encontrarão a minha nova Página?", answer: "Elementum diam iaculis neque arcu, aliquet consectetur." },
  { id: 5, question: "O que é o Feed? Como faço para configurá-lo?", answer: "Turpis at malesuada orci ultricies ipsum amet sed cras." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-gray-200 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="md:px-10">
          <p className="text-sm text-blue-500 font-semibold">Tire suas dúvidas</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Perguntas mais frequentes</h2>
          <p className="text-gray-600 mt-4">Separamos algumas perguntas e respostas que podem te ajudar na sua decisão</p>
          <div className="space-y-6 mt-6">
            {["img1_session7.svg", "img2_session7.svg", "img3_session7.svg"].map((img, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md cursor-pointer bg-white">
                <Image src={`/images/${img}`} alt="Ícone" width={50} height={50} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{["Dúvidas?", "Faça parte", "Chama no zap"][idx]}</h3>
                  <p className="text-gray-600">{["Envie uma mensagem para nosso time", "Cadastre-se para transformar sua empresa", "Fale com nosso comercial"][idx]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white p-5 rounded-lg shadow">
              <button className="flex justify-between w-full text-left text-gray-900 font-medium" onClick={() => toggleFAQ(index)}>
                <span className="text-blue-600 mr-2">0{faq.id}</span> {faq.question}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openIndex === index && <p className="mt-3 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
