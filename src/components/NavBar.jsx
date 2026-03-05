import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar( ) {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
    <>
        <nav className="fixed flex justify-center space-x-4 top-0 w-full h-30 z-50 bg-primary border-b-4 border-secondary-lighter rounded-b-3xl transition-all duration-300 backdrop-blur-sm sm:h-30 md:h-35 animate-in slide-in-from-top duration-700">
            <div className="px-2 sm:px-3 lg:px-4">
                <div className="flex justify-centers space-x-10 items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center  group cursor-pointer ">
                        <div>
                            <a href="#hero">
                                <img src="/assets/logo1.png" alt="Gomes & Araujo" className=" ml-20 mt-17 w-55 h-25 sm:w-50 sm:h-25 mr-30 sm:mt-15 sm:ml-60  md:ml-0 md:w-65 md:h-30 md:mt-20"/>
                            </a>
                        </div>
                    </div>
                    {/* navlinks */}
                    <div className="hidden md:flex  items-center justify-end space-x-3 lg:space-x-8">
                        
                        <a href="#practiceareas" className="text-secondary-lighter font-bold font-serif hover:text-secondary text-sm mt-5 md:text-xl md:mt-18 sm:mt-15 sm:text-xs">
                            Áreas de atuação
                        </a>
                        <a href="#aboutfirm" className="text-secondary-lighter font-bold font-serif hover:text-secondary text-sm mt-5 md:text-xl md:mt-18 sm:mt-15 sm:text-xs">
                            Quem somos
                        </a>
                        <a href="#team" className="text-secondary-lighter font-bold font-serif hover:text-secondary text-sm mt-5 md:text-xl md:mt-18 sm:mt-15 sm:text-xs">
                            Nossa Equipe
                        </a>
						{/* <a href="#yus" className="text-secondary-lighter font-bold hover:text-secondary text-sm mt-5 md:text-xl md:mt-18 sm:mt-15 sm:text-xs">
                            Nosso diferencial
                        </a> */}
                        <a href="#faq" className="text-secondary-lighter font-bold font-serif hover:text-secondary text-sm mt-5 md:text-xl md:mt-18 sm:mt-15 sm:text-xs sm:mr-8">
                            FAQ
                        </a>

                        <a href="#contact" className="text-secondary-lighter font-bold font-serif hover:text-secondary text-sm mt-5 md:text-xl md:mt-18 sm:mt-15 sm:text-xs">
                            Fale Conosco
                        </a>
                    </div>
                    

                    <button onClick={() => setMobileMenuIsOpen((prev) => !prev)}className="md:hidden text-secondary-lighter pt-2 hover:text-secondary">
                        { mobileMenuIsOpen ? (<X className="w-10 h-10 mt-15 sm:mt-13 sm:w-10 sm:h-10"/>) :
                        <Menu className="w-10 h-10 mt-15 sm:mt-13 sm:w-10 sm:h-10"/> 
                        }
                    </button>
                </div>
            </div>
        </nav>

            {mobileMenuIsOpen && (
                <div className="fixed inset-0 bg-primary/60 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden">

                    <div className="mt-25 flex flex-col space-y-5 font-bold text-xl items-center hover:text-secondary">

                    <a
                        href="#practiceareas"
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-secondary-lighter hover:text-secondary text-2xl transition-colors duration-300 "
                    >
                        Áreas de atuação
                    </a>
                        <div className="h-px bg-secondary/30 space-y-0 w-70"></div>
                    <a
                        href="#aboutfirm"
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-secondary-lighter hover:text-secondary text-2xl transition-colors duration-300"
                    >
                        Quem somos
                    </a>
                        <div className="h-px bg-secondary/30 space-y-0 w-full"></div>
                    <a
                        href="#yus"
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-secondary-lighter hover:text-secondary text-2xl transition-colors duration-300"
                    >
                        Nosso diferencial
                    </a>
                        <div className="h-px bg-secondary/30 space-y-0 w-full"></div>
                    <a
                        href="#team"
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-secondary-lighter hover:text-secondary text-2xl transition-colors duration-300"
                    >
                        Nossa Equipe
                    </a>
                        <div className="h-px bg-secondary/30 space-y-0 w-full"></div>
                    <a
                        href="#faq"
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-secondary-lighter hover:text-secondary text-2xl transition-colors duration-300"
                    >
                        FAQ
                    </a>
                        <div className="h-px bg-secondary/30 space-y-0 w-full"></div>
                    <a  
                        href="#contact"
                        onClick={() => setMobileMenuIsOpen(false)}
                        className="text-secondary-lighter hover:text-secondary text-2xl transition-colors duration-300"
                    >
                        Fale Conosco
                    </a>

                    </div>
                </div>
                )}
        </>
    )
}