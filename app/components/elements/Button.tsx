type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ className = " px-4 py-2 bg-blue-600 text-white rounded cursor-pointer", children, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
