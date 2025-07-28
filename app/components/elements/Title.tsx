type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <div className="font-bold text-3xl mb-5">{children}</div>;
};

export default Title;
