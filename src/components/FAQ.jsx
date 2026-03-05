import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqButton = [
    {
      question: "Fui cobrado por um serviço que não contratei. O que posso fazer?",
      answer: "Você pode solicitar o cancelamento imediato da cobrança e a devolução dos valores pagos."
    },
    {
      question: "Meu pedido de aposentadoria foi negado pelo INSS. Ainda posso recorrer?",
      answer: "Sim. É possível apresentar recurso administrativo ou ingressar com ação judicial."
    },
    {
      question: "Trabalhei sem carteira assinada. Tenho direitos?",
      answer: "Sim. Mesmo sem registro em carteira, você pode buscar o reconhecimento do vínculo."
    },
    {
      question: "É possível revisar o valor da pensão alimentícia?",
      answer: "Sim. O valor pode ser revisado quando houver mudança na situação financeira."
    },
    {
      question: "Filho com deficiência tem direito a benefício do INSS?",
      answer: "Sim. Pode ter direito ao BPC/LOAS ou pensão por morte."
    },
    {
      question: "A empresa negativou meu nome indevidamente. Posso pedir indenização?",
      answer: "Sim. A negativação indevida pode gerar indenização."
    },
    {
      question: "Fui demitido e acredito que meus direitos não foram pagos corretamente. O que devo fazer?",
      answer: "Você pode solicitar a conferência detalhada das verbas rescisórias."
    },
    {
      question: "Posso pedir a guarda unilateral do meu filho?",
      answer: "Sim. A guarda unilateral pode ser solicitada judicialmente."
    }
  ];

  const metade = Math.ceil(faqButton.length / 2);
  const coluna1 = faqButton.slice(0, metade);
  const coluna2 = faqButton.slice(metade);

  return (
    <section id="faq" className="min-h-screen pb-20">

      <div className="flex flex-col space-y-20">

        {/* TÍTULO */}
        <div className="relative flex justify-center mt-20">
          <h1 className="relative font-serif mt-23 h- font-bold text-3xl md:text-5xl lg:text-6xl text-primary z-10">
            Perguntas frequentes
          </h1>
          <h1 className="absolute top-15 lg:top-10 text-8xl lg:text-[160px] text-black/10 font-bold font-serif">
            F.A.Q.
          </h1>
        </div>

        {/* COLUNAS */}
        <div className="flex flex-col md:flex-row mt-10 justify-center gap-10 px-10">

          {/* COLUNA 1 */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {coluna1.map((item, index) => {
              const realIndex = index;

              return (
                <div key={realIndex}>

                  {/* BOTÃO */}
                  <div 
                    onClick={() =>
                      setOpenIndex(openIndex === realIndex ? null : realIndex)
                    }
                    className={`flex items-center justify-between rounded-xl lg:px-10 lg:py-6 text-lg lg:text-2xl px-2 py-2 cursor-pointer transition-all duration-300 font-semibold
                      ${openIndex === realIndex
                        ? "bg-secondary-lighter text-primary hover:bg-primary hover:text-secondary-lighter"
                        : "bg-primary text-secondary-lighter hover:bg-secondary-lighter hover:text-primary"
                      }`}
                  >
                    {item.question}

                    <ChevronDown
                      size={30}
                      className={`transition-transform duration-300 ${
                        openIndex === realIndex ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* RESPOSTA */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === realIndex ? "max-h-[500px] mt-4" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`bg-secondary/90 text-white font-semibold border-4 border-amber-950/30 rounded-xl text-xl py-10 px-4 transition-all duration-500 ${
                        openIndex === realIndex
                          ? "opacity-100 translate-y--4"
                          : "opacity-0 -translate-y-2"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* COLUNA 2 */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {coluna2.map((item, index) => {
              const realIndex = index + metade;

              return (
                <div key={realIndex}>

                  <div
                    onClick={() =>
                      setOpenIndex(openIndex === realIndex ? null : realIndex)
                    }
                    className={`flex items-center justify-between rounded-xl text:lg lg:text-2xl lg:px-10 lg:py-5.5 cursor-pointer px-2 py-2 transition-all duration-300 font-semibold
                      ${openIndex === realIndex
                        ? "bg-secondary-lighter text-primary hover:bg-primary hover:text-secondary-lighter"
                        : "bg-primary text-secondary-lighter hover:bg-secondary-lighter hover:text-primary"
                      }`}
                  >
                    {item.question}

                    <ChevronDown
                      size={28}
                      className={`transition-transform duration-300 ${
                        openIndex === realIndex ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openIndex === realIndex ? "max-h-[500px] mt-4" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`bg-secondary/90 text-primary/80  font-bold text-xl rounded-xl py-10 px-4 transition-all duration-500 ${
                        openIndex === realIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 -translate-y-4"
                      }`}
                    >
                      {item.answer}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}