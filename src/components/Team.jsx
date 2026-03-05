export default function Team( ) {

    return (
	<section id="team" className="min-h-screen">
		<div className="flex flex-col justify-center items-center pt-20 text-primary">
			<h1 className=" font-bold font-serif text-5xl md:text-6xl lg:text-8xl mb-5 ">
				Nossa Equipe
			</h1>
			<p className="mt-3 border-3 rounded-full text-xs py-1 px-2 lg:text-base lg:px-3 font-bold bg-secondary-lighter border-primary">
				Esses são os profissionais que lutam para garantir o que é seu
			</p>
		</div>

		<div className="flex flex-col mt-20">

		{/* SEÇÃO 1 */}
		<div className="relative w-full gradient-background-1 border-t-4 border-amber-950/40 rounded-tl-2xl flex flex-col lg:flex-row items-center px-6 py-10 gap-10">

			<img
			src="/assets/Alaan.png"
			alt="Alaan"
			className="w-48 lg:w-[380px] lg:ml-50 rounded-full border-[10px] lg:border-[20px] px-2 py-2 border-primary bg-secondary"
			/>

			<div className="flex flex-col text-center lg:text-left gap-6 max-w-3xl">

				<h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary">
				Dr. Alaan <strong className="bg-primary px-2 text-secondary-lighter">Gomes de Almeida</strong>
				</h1>

				<p className="text-white text-base lg:text-xl font-serif p-4 rounded-2xl bg-cyan-950/50">
				Com mais de 6 anos de experiência na advocacia, atuo de forma sólida e estratégica nas áreas de Direito do Consumidor, Direito Civil e Direito Trabalhista, oferecendo atendimento técnico e personalizado.

				Minha atuação é pautada na eficiência, profissionalismo e dedicação integral a cada caso, com foco na proteção dos direitos e interesses do cliente.
				</p>

			</div>
		</div>


		{/* SEÇÃO 2 */}
		<div className="relative w-full bg-primary flex border-slate-950/30 border-t-4 border-b-4 flex-col lg:flex-row-reverse items-center px-6 py-10 gap-10">

			<img
			src="/assets/Wladson.jpeg"
			alt="Wladson"
			className="w-56 lg:w-[420px] rounded-xl border-4 bg-primary px-2 py-2 border-secondary lg:mr-45"
			/>

		<div className="flex flex-col text-center lg:text-left gap-6 max-w-2xl">

			<h1 className="text-3xl lg:text-6xl font-serif font-bold text-secondary-lighter">
			Dr. Wladson <strong className="bg-secondary-lighter px-2 text-primary">Araújo</strong>
			</h1>

			<p className="text-primary text-lg lg:text-2xl font-serif font-bold p-4 rounded-2xl bg-secondary">
			Advogado com mais de 10 anos de experiência, atuando com responsabilidade, ética e compromisso na defesa dos direitos de seus clientes. Especialista em Direito do Trabalho, Consumidor, Família e Sucessões.
			</p>

		</div>
		</div>


		{/* SEÇÃO 3 */}
		<div className="relative w-full gradient-background-1 border-b-4 border-amber-950/2 rounded-b-2xl flex flex-col lg:flex-row items-center px-6 py-10 gap-10">

			<img
			src="/assets/Brenno.jpeg"
			alt="Brenno"
			className="w-48 lg:w-[380px] rounded-full border-[10px] lg:border-[20px] lg:ml-50 px-2 py-2 border-primary bg-secondary"
			/>

		<div className="flex flex-col text-center lg:text-left gap-6 max-w-3xl">

			<h1 className="text-3xl lg:text-6xl font-serif font-bold text-primary">
			Dr. Brenno <strong className="bg-primary px-2 text-secondary-lighter">Gomes de Almeida</strong>
			</h1>

			<p className="text-white text-lg lg:text-2xl font-serif p-4 rounded-2xl bg-cyan-950/50">
			Advogado com mais de 10 anos de experiência, especialista em Direito e Processo do Trabalho, Direito do Consumidor e Direito Penal, com atuação firme, técnica e personalizada em cada caso.
			</p>

		</div>
		</div>

		</div>
	</section>);
}