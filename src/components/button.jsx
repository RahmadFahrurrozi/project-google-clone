const Button = (props) => {
  const { children = "Button", variant = "bg-slate-400" } = props;
  return (
    <button
      className={`${variant} hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all`}
    >
      {children}
    </button>
  );
};
export default Button;
