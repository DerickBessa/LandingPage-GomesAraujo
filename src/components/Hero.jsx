import { ArrowDown } from "lucide-react"

export default function Hero( ) {

    return (
        <section className="border-b-20 pb-5 border-primary rounded-4xl relative min-h-screen flex items-start justify-start pt-16 sm:pt-25 sm:pl-25 px-4 sm:px-6 lg:px-8  md:pt-40 overflow-hidden text-black">
        <div className="border-3 border-primary/10 shadow-xl rounded-full px-7 flex flex-col items-start mt-30 py-10  bg-white/500  md:bg-white/500 backdrop-blur-sm text-center md:text-left md:px-16 md:py-12 md:mt-0 z-30 animate-in slide-in-from-bottom duration-700">
            <h1 className="text-shadow-lg text-2xl ml-9 md:text-5xl md:ml-15 flex w-70 sm:w-130 sm:text-5xl text-center sm:ml-0 font-bold md:w-140 text-primary">
            <span>Quando a <span className="text-secondary">Lei</span> <br />Encontra a Estratégia,<br /> <span className="text-secondary">Nós</span> Atuamos</span>
            </h1>
            <img src="/assets/logo-primary.png" alt="logo-ciano" className="h-30 w-30 ml-25 sm:h-50 sm:w-50 sm:ml-50"/>
            <p className="text-shadow-lg text-sm sm:text-xl w-70 ml-5 text-center text-primary-800 sm:w-130 md:w-140">
            Nossa equipe <strong>altamente qualificada</strong> atua com <strong>dedicação e precisão</strong>, oferecendo soluções jurídicas estratégicas e seguras para <strong>proteger </strong>o que é mais importante para <strong>Você.</strong>
            </p>
        </div>
        <div>
            <div className="hidden md:flex">
                  <img src="./assets/fototime.png" alt="fototime" className="shadow-xl absolute md:h-130 md:w-180 right-0 z-20 rounded-s-4xl"/>
            </div>
            <img src="/assets/estampa.png" alt="marcadagua" className="h-140 w-300 md:w-240 md:h-200  absolute inset-0 top-30 z-0" />
            <img src="/assets/estampa.png" alt="marcadagua" className="h-140 w-300 md:w-240 md:h-200  absolute inset-0 left-227 top-30 z-0" />
        </div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-secondary-lighter font-bold mb-2 rounded-full py-3 px-3 bg-primary">Scroll!</span>
            <ArrowDown className="h-7 w-7 text-primary" />
            </div>
        </section>
    )
}