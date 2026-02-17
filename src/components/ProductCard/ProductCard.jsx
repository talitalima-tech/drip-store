import React from 'react';

export default function ProductCard({ image, name, price, priceDiscount }) {
  const formatBRL = (value) =>
    typeof value === 'number'
      ? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : value;

  return (
    <div className="w-full max-w-[292px] flex flex-col gap-[12px] cursor-pointer group sm:max-w-full">
      <div className="w-full h-[321px] bg-neutral-lightGray3 rounded-[4px] flex items-center justify-center overflow-hidden relative shadow-[0_4px_10px_rgba(0,0,0,0.03)] sm:h-[180px]">
        <img
          src={image}
          alt={name}
          className="w-[248px] h-[134px] object-contain rotate-[-30deg] transition-transform duration-300 group-hover:scale-110 sm:w-[80%] sm:h-auto"
        />
      </div>
      <div className="text-[16px] text-neutral-darkGray2 font-normal">{name}</div>
      {!priceDiscount ? (
        <div className="text-[24px] font-bold text-neutral-darkGray sm:text-[18px]">{formatBRL(price)}</div>
      ) : (
        <div className="flex items-center gap-[12px]">
          <div className="text-[24px] font-bold text-neutral-darkGray sm:text-[18px]">
            {formatBRL(priceDiscount)}
          </div>
          <div className="text-[24px] text-neutral-lightGray line-through sm:text-[18px]">
            {formatBRL(price)}
          </div>
        </div>
      )}
    </div>
  );
}
