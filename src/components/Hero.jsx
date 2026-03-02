import { ArrowDown } from "lucide-react"

export default function Hero( ) {

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center sm:pt-25 sm:pl-20 px-4 sm:px-6 lg:px-8  md:pt-40 overflow-hidden text-primary">
        <div className="border-2 border-primary/5 shadow-xl rounded-full px-7 flex flex-col items-start mt-30 py-17 sm:mr- bg-white/10  md:bg-white/500 backdrop-blur-sm text-center sm:px-15s md:text-left md:px-20 md:py-12 md:mt-0 z-30 animate-in slide-in-from-bottom duration-700">
            <h1 className="text-shadow-lg text-2xl ml-9 md:text-5xl md:ml-15 flex w-70 sm:w-130 sm:text-5xl text-center sm:ml-0 font-bold md:w-140 text-primary">
            <span>Quando a <span className="text-secondary">Lei</span> <br />Encontra a Estratégia,<br /> <span className="text-secondary">Nós</span> Atuamos</span>
            </h1>
            <img src="/assets/logo-primary.png" alt="logo-ciano" className="h-30 w-30 ml-25 sm:h-50 sm:w-50 sm:ml-50 lg:ml-50"/>
            <p className="text-shadow-lg text-sm sm:text-xl w-70 ml-5 text-center text-primary-800 sm:w-130 md:w-140">
            Nossa equipe <strong>altamente qualificada</strong> atua com <strong>dedicação e precisão</strong>, oferecendo soluções jurídicas estratégicas e seguras para <strong>proteger </strong>o que é mais importante para <strong>Você.</strong>
            </p>
        </div>
        <div>
            <div className="hidden md:flex">
                  {/* <img src="./assets/fototime.png" alt="fototime" className="shadow-xl absolute md:h-130 md:top-30 md:w-180 lg:top-50 right-0 z-20 rounded-s-4xl"/> */}
            </div>
            <div className="sm:hidden">
                <img
                src="/assets/estampa.png"
                alt="marcadagua"
                className="absolute top-2 lg:top-20 left-1/2 -translate-x-1/2 md:w-[120%] lg:w-[150%] md:top-35 sm:w-[110%] sm:top-50 h-auto opacity-85 z-0"
                />
            </div>
            <img
                src="/assets/estampa.png"
                alt="marcadagua"
                className="absolute top-110 lg:top-20 left-1/2 -translate-x-1/2 md:w-[120%] lg:w-[150%] md:top-35 sm:w-[110%] sm:top-50 h-auto opacity-85 z-0"
                />
            </div>
        </section>
    )
}