import { Circle } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";



export default function PracticeAreas() {
  
    const [openIndex, setOpenIndex] = useState(false);

    const areas = [
  {
    name: "Direito Previdenciário",
    content: "Direito previdenciário, com assessoria completa em auxílio-doença, BPC-LOAS, auxílio-maternidade e aposentadorias, orientação sobre contribuições e requisitos legais, análise de benefícios e planejamento previdenciário, com foco na defesa dos direitos e na obtenção das melhores soluções para cada caso. "
  },
  {
    name: "Direito do Trabalho",
    content: "Direito do trabalho, com assessoria em contencioso administrativo e judicial trabalhista, elaboração de pareceres, orientação sobre acordos e convenções coletivas, análise de contratos e rotinas de recursos humanos, com foco na prevenção de riscos, defesa dos direitos e aplicação das melhores práticas trabalhistas."
  },
  {
    name: "Direito do Consumidor",
    content: "Direito do consumidor, com assessoria em relações de consumo, defesa de direitos em compras e contratos, análise de práticas comerciais, orientação sobre garantias, proteção contra abusos e cobranças indevidas, com foco na solução eficiente de conflitos e na preservação dos direitos dos consumidores."
  },
  {
    name: "Direito Penal",
    content: "Direito penal, com assessoria completa em defesa criminal, acompanhamento processual, análise de inquéritos e ações penais, orientação preventiva e representação em tribunais, com foco na proteção dos direitos do cliente e na busca das melhores estratégias de defesa."
  },
  {
    name: "Direito Civil",
    content: "Direito civil, com atuação em sucessões e inventários, questões bancárias e financeiras, responsabilidade civil e litígios médicos, elaboração e análise de contratos, assessoria em negociações e acompanhamento judicial, com foco na prevenção de riscos e na proteção dos interesses do cliente."
  },
  {
    name: "Direito Familiar",
    content: "Direito Familiar, com assessoria em divórcios, guarda, pensão alimentícia, união estável e regimes de bens, elaboração de acordos e mediações, orientação em questões patrimoniais e sucessórias, com foco na preservação de direitos, soluções justas e planejamento familiar estratégico."
  }
];
    return (
    <section
      id="practiceareas"
      className="relative min-h-[1000px]"
    >
      {/* BLOCO DO TÍTULO COM FUNDO FULL WIDTH */}
      <div className="bg-primary py-25 text-center justify-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/85">
        Experiência que atravessa <strong className="text-secondary-lighter">diferentes frentes</strong>.
        </h2>
        <p className=" text-xl sm:text-4xl mt-10 mx-auto text-center rounded-full py-2 bg-secondary-lighter/90 shadow-3xl w-[90%] lg:w-[65%]">
        <strong className="text-primary">Compromisso  que permanece o mesmo.</strong>
        </p>
      </div>

      {/* CONTEÚDO COM PADDING NORMAL */}
      <div className="px-10 sm:px-6 lg:px-8 mt-12 pb-20">
        <div className="flex flex-col space-y-10 lg:gap-6 items-center justify-center">

            <div className="text-3xl font-bold mt-20 mb-24 flex text-primary sm:text-4xl lg:text-8xl bg/">
                ÁREAS DE ATUAÇÃO
            </div>

            <div className="flex flex-wrap gap-4 space-y-10 space-x-5 justify-center">
            {areas.map((area, index) => (

                <div key={index} className="relative ">
                <div
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`flex max-w-[500px] items-center text-3xl shadow-xl font-bold rounded-2xl  px-6 py-2  duration-300 group cursor-pointer relative z-20
                         ${openIndex === index ? "bg-secondary-lighter text-primary hover:bg-primary hover:text-secondary-lighter transition-colors" : " bg-primary text-secondary-lighter hover:bg-secondary-lighter hover:text-primary transition-colors"}`}
                >
                    <button className="relative px-3 py-3 ">
                    <ChevronDown
                        size={40}
                        className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                        }`}
                    />
                    </button>
                    {area.name}
                </div>

                <div
                    className={` transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-[1000px] mt-4" : "max-h-0 mt-0 "
                    }`}
                >
                    <div
                    className={`relative bottom-8 z-0 lg:text-xl max-w-[420px] hyphens-auto w-full h-auto bg-primary/85 b backdrop-blur-3xl rounded-xl font-bold text-white/80 p-4  pr-3 text-left break-words accordion-enter accordion-enter-active transition-all duration-500 ease-in-out transform ${
                        openIndex === index ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                    >
                    {area.content}
                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
      </div>
    </section>
  );
}