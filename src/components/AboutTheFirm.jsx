import { ArrowBigRightDashIcon } from "lucide-react";
import { Instagram } from "lucide-react";

export default function AboutTheFirm( ) {

    return (<section id="aboutfirm" className="min-h-screen bg-primary border-t-20 rounded-2xl border-primary">
			<div className="flex justify-center">
				<div className="mt-5 text-center w-full">
					<div className="flex justify-center text-center mt-10 mb-5 w-full gradient-background-1">
						<p className="text-primary font-serif lg:ml-5 font-bold text-6xl  px-20 py-10 ">
							GOMES & ARAÚJO
						</p>
					</div>
					<div className="mt-20 flex justify-center text-center">
						<p className="text-white font-serif w-40 text-lg rounded-2xl bg-slate-800">
							SOBRE NÓS
						</p>
						
					</div>
					
						<h1 className="flex-col-1 font-serif text-secondary-lighter font-bold text-6xl">
							Quem somos?
						</h1>
					<div className="flex justify-center">
						<p className="text-white mt-6 text-sm border-2 w-130 rounded-full  border-secondary py-2 font-semibold px-2">
								Há mais de 10 anos, lutando pelo que realmente importa: os Seus Direitos.
						</p>
					</div>
					<div className="justify-center mt-5 mb-10 flex">
						<div className="flex justify-center text-center w-300 font-serif bg-slate-950/20 shadow-xl border-4 border-black/5 rounded-2xl px-4 py-4">
							<p className=" text-white/80 text-2xl px-2 py-4">
								Nosso escritório reúne advogados altamente especializados, com mais de 10 anos de atuação prática e sólida experiência em diversas áreas do Direito. Atuamos com técnica, estratégia e responsabilidade, oferecendo soluções jurídicas personalizadas para cada caso.

								Priorizamos transparência, eficiência e acompanhamento próximo em todas as etapas do processo. Cada situação é analisada profundamente, garantindo caminhos seguros e eficazes na defesa dos direitos de nossos clientes.

								Se você busca segurança, compromisso e atuação firme, estamos preparados para representá-lo com excelência e dedicação.
							</p>
						</div>
					
					</div>
					<div className="flex justify-center mb-10">
						<a href="https://www.instagram.com/gomesaraujo.advogados/" target="_blank"><Instagram size={40} className="text-secondary-lighter"/></a>
					</div>
					<div>
					
					</div>				
				</div>
			</div>				
			</section>);
}