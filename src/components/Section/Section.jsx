const Section = ({ title, titleAlign = "left", link, children }) => {
  const headerClasses =
    titleAlign === "center"
      ? "flex items-center mb-[24px] justify-center"
      : "flex items-center mb-[24px] justify-between";
  const titleClasses =
    titleAlign === "center"
      ? "text-[24px] text-[#474747] font-semibold m-0 text-center w-full"
      : "text-[24px] text-[#474747] font-semibold m-0 text-left";

  return (
    <section className="my-[48px] px-[16px]">
      <div className={headerClasses}>
        {title && <h2 className={titleClasses}>{title}</h2>}
        {link && titleAlign !== "center" && (
          <a
            href={link.href}
            className="text-[18px] text-primary no-underline font-medium hover:underline"
          >
            {link.text}
          </a>
        )}
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
};

export default Section;
