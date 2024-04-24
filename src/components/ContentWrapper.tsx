interface ConentWrapperProps {
  children: React.ReactNode;
}

const ConentWrapper: React.FC<ConentWrapperProps> = ({ children }) => {
  return <div className="max-w-[1260px] mx-auto px-5">{children}</div>;
};

export default ConentWrapper;
