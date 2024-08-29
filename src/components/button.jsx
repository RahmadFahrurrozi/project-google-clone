const Button = (props) => {
  const {
    children = "Button",
    variant = "bg-slate-400",
    textColor = "text-white",
  } = props;
  return (
    <button
      className={`${variant} hover:bg-blue-700 ${textColor} font-medium py-2 px-6 rounded-full transition-all`}
    >
      {children}
    </button>
  );
};
export default Button;
