import { useState, useEffect } from 'react';
import sneakerImage from '../../assets/White-Sneakers-PNG.png';
import fireIcon from '../../assets/fire.png';
import dotsImage from '../../assets/dots.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { desc: 'Descontos imperdíveis em tênis Nike para você renovar seu estilo com conforto e tecnologia.' },
    { desc: 'Aproveite as melhores ofertas da semana com frete grátis para todo o Brasil em compras Nike.' },
    { desc: 'Conheça a nova coleção Air Max com preços exclusivos que você só encontra aqui na Digital Store.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 2000); // Muda a cada 2 segundos
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[681px] bg-neutral-lightGray3 overflow-hidden flex items-center">
      <div className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-[100px] relative">
        <div className="w-[550px] z-[10]">
          <span className="text-warning font-bold text-[16px] block mb-[10px]">Melhores ofertas personalizadas</span>
          <h1 className="text-[64px] font-extrabold leading-[1.1] text-neutral-darkGray mb-[20px]">
            Queima de <br />
            estoque Nike 
            <img src={fireIcon} alt="Fogo" className="w-[50px] h-[50px] inline-block align-middle ml-[15px] relative -top-[5px]" />
          </h1>
          <p className="text-[18px] leading-[28px] text-neutral-darkGray3 mb-[40px] min-h-[56px]" key={currentSlide}>
            {slides[currentSlide].desc}
          </p>
          <button className="bg-[#FF2D95] text-white py-[14px] px-[60px] rounded-[8px] font-bold text-[16px] transition hover:brightness-110">
            Ver Ofertas
          </button>
        </div>
        <div className="relative w-[733px] h-[431px]">
          <img src={sneakerImage} className="w-full rotate-[-19.34deg] relative z-[2]" alt="Tênis Nike" />
          <img src={dotsImage} className="absolute -top-[40px] -right-[50px] w-[140px] z-[1] opacity-80" alt="Pontos decorativos" />
        </div>
      </div>
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex gap-[12px] z-[15]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
            className={`w-[12px] h-[12px] rounded-full border-0 transition ${index === currentSlide ? 'bg-primary' : 'bg-[#CCCCCC]'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
