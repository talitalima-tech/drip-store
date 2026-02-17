const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-[20px]">
      <h4 className="text-[14px] text-[#474747] mb-[10px]">{title}</h4>
      {options.map((option, index) => (
        <div key={index} className="flex items-center gap-[10px] mb-[8px]">
          <input
            className="w-[22px] h-[22px] cursor-pointer accent-primary"
            type={inputType}
            id={option.text}
            name={title}
          />
          <label className="text-[14px] text-[#474747] cursor-pointer" htmlFor={option.text}>
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterGroup;
