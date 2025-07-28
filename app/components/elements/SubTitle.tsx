type TitleProps = {
  children: React.ReactNode;
};

const SubTitle = ({ children }: TitleProps) => {
  return <div className="font-bold text-2xl mt-5">{children}</div>;
};

export default SubTitle;
