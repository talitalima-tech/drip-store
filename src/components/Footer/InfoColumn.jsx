const InfoColumn = ({ title, informations }) => {
  return (
    <div className="text-[#cccccc] text-[16px]">
      <h3 className="text-white text-[18px] font-semibold mb-[20px]">{title}</h3>
      <ul className="list-none p-0 m-0">
        {informations.map((item, index) => (
          <li key={index} className="mb-[14px]">
            <a href={item.link} className="no-underline text-[#cccccc] leading-[26px] hover:text-white">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoColumn;
