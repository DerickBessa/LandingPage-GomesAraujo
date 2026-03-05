import { Mail, MapPin, Phone } from "lucide-react";


export default function FooterSection() {
  return (
    <footer className="bg-neutral-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo / Sobre */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Gomes & Araújo
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Escritório de advocacia comprometido com a excelência
            jurídica, oferecendo atendimento estratégico e
            personalizado nas áreas de Direito Civil, Trabalhista
            e do Consumidor.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Navegação
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Início</li>
            <li className="hover:text-white cursor-pointer">Sobre</li>
            <li className="hover:text-white cursor-pointer">Áreas de Atuação</li>
            <li className="hover:text-white cursor-pointer">Contato</li>
          </ul>
        </div>

        {/* Áreas */}
        <div>
		<h3 className="text-lg font-semibold mb-4">
			Áreas de Atuação
		</h3>

		<ul className="space-y-2 text-gray-400">
			<li>Direito Previdenciário</li>
			<li>Direito do Trabalho</li>
			<li>Direito do Consumidor</li>
			<li>Direito Penal</li>
			<li>Direito Civil</li>
			<li>Direito de Família</li>
		</ul>
		</div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contato
          </h3>

          <ul className=" flex flex-col space-y-2 text-gray-400">
             <div className="flex"><MapPin className="mr-2"/><a target="_blank" href="https://maps.app.goo.gl/3p5wn8yRZ6qahdzcA">  Fortaleza - CE</a></div>
             <div className="flex"><Phone className="mr-2"/><a target="_blank" href="https://wa.me/5585997933549?text=Ol%C3%A1%20Tudo%20bem%3F%20Eu%20gostaria%20de%20conhecer%20mais%20sobre%20os%20servi%C3%A7os%21">  (85) 99794-3549</a></div>
             <div className="flex"><Mail className="mr-2"/><a target="_blank" href="mailto:gomesaraujo.advogado@gmail.com">gomesaraujo.advogado@gmail.com</a></div>
		</ul>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Gomes & Araújo — Todos os direitos reservados.
      </div>
    </footer>
  );
}