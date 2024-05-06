const Text = ({ children, className }) => {
  return <p className={`${className} text-lg font-normal`}>{children}</p>;
};

export default Text;
