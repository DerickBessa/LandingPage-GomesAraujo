import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {

  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setEnviado(true);
        e.target.reset(); // limpa o formulário
      } else {
        alert("Erro ao enviar mensagem.");
      }

    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem.");
    }
  }


  return (
    <section id="contact" className="bg-primary border-t-8 border-primary min-h-screen flex justify-center items-center px-4 py-12">

      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* COLUNA ESQUERDA */}
        <div className="bg-gradient-to-br font-serif from-secondary-lighter/70 to-secondary text-primary font-bold p-6 md:p-12 flex flex-col justify-center">

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center md:text-left">
            Entre em Contato
          </h2>

          <p className="mt-6 md:mt-10 text-base md:text-lg lg:text-xl opacity-90 text-center md:text-left">
            Estamos prontos para oferecer um atendimento jurídico sério,
            estratégico e totalmente personalizado para o seu caso.
          </p>

          <div className="mt-8 space-y-4 text-sm md:text-base lg:text-lg">

            <div className="flex items-center gap-2 lg:w-130">
              <MapPin size={18} />
              <a href="https://maps.app.goo.gl/3p5wn8yRZ6qahdzcA" className="hover:underline"> Rua Gov. João Carlos, 40 - Serrinha, Fortaleza/CE </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <a href="https://wa.me/5585997666995?text=Ol%C3%A1%20Tudo%20bem%3F%20Eu%20gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%21" target="_blank" className="hover:underline">(85)99766-6995</a>
            </div> 

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a
                href="mailto:gomesaraujo.advogado@gmail.com"
                className="hover:underline"
              >
                gomesaraujo.advogado@gmail.com
              </a>
            </div>

          </div>

          {/* BOTÃO WHATSAPP */}
          <div className="flex justify-center md:justify-start mt-8">

            <a
              href="https://wa.me/5585997933549?text=Olá%20Tudo%20bem%3F%20Eu%20gostaria%20de%20conhecer%20mais%20sobre%20os%20serviços!"
              target="_blank"
              className="bg-contact w-full md:w-72 h-12 cursor-pointer rounded-full flex items-center px-3"
            >
              <img
                src="/assets/wazap.png"
                alt="zap"
                className="rounded-full w-8 h-8"
              />

              <p className="font-bold text-sm md:text-base flex-1 text-center text-white">
                Falar com um Especialista
              </p>
            </a>

          </div>

        </div>

        {/* COLUNA DIREITA */}
        <div className="p-6 md:p-12">

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Nome
              </label>
              <input
			  	name="name"
                type="text"
                placeholder="Seu nome"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
			  	
			   className="block mb-1 font-semibold text-gray-700">
                Email
              </label>
              <input
			  	name="email"
                type="email"
                placeholder="seuemail@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Assunto
              </label>
              <input
			  	name="subject"
                type="text"
                placeholder="Assunto da mensagem"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Mensagem
              </label>
              <textarea
			  	name="message"
                rows="4"
                placeholder="Descreva brevemente sua situação..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-900 transition duration-300 shadow-lg"
            >
              Enviar Mensagem
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}