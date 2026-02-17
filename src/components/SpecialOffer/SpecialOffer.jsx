function SpecialOffer() {
  return (
    <div className="w-full bg-neutral-white my-[80px] max-[768px]:my-[40px]">
      <section className="w-full max-w-[1440px] h-[553px] mx-auto flex items-center justify-between px-[104px] relative max-[768px]:flex-col max-[768px]:w-[375px] max-[768px]:h-[701px] max-[768px]:px-[20px] max-[768px]:py-[60px] max-[768px]:my-[40px] max-[768px]:justify-center max-[768px]:text-center">
        <div className="flex-1 relative h-full flex items-center justify-center max-[768px]:w-full max-[768px]:h-auto">
          <div className="w-[466px] h-[466px] bg-gradient-to-b from-[rgba(66,0,255,0.25)] to-transparent rounded-full absolute z-[1] max-[768px]:w-[250px] max-[768px]:h-[250px]" />
          <img
            className="relative z-[2] w-[573px] h-[330px] object-contain max-[768px]:w-full max-[768px]:max-w-[335px] max-[768px]:h-auto"
            src="/special-offer-banner.png"
            alt="Air Jordan Exclusive"
          />
        </div>
        <div className="flex-1 pl-[60px] z-[3] max-[768px]:pl-0 max-[768px]:mb-[40px] max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center">
          <p className="text-primary font-bold text-[14px] tracking-[0.75px] mb-[12px]">Oferta especial</p>
          <h2 className="text-[48px] leading-[50px] text-neutral-darkGray2 font-extrabold mb-[20px] max-[768px]:text-[32px] max-[768px]:leading-[36px]">
            Air Jordan edição de colecionador
          </h2>
          <p className="text-neutral-darkGray2 text-[16px] leading-[28px] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
          <button className="bg-primary text-neutral-white px-[40px] py-[12px] rounded-[8px] font-bold text-[16px] transition hover:brightness-110 hover:scale-[1.02]">
            Ver Oferta
          </button>
        </div>
      </section>
    </div>
  );
}

export default SpecialOffer;
