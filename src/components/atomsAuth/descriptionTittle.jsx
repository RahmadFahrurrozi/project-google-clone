export default function DescriptionTittle({ children, className = "" }) {
  return <p className={`text-base ${className}`}>{children}</p>;
}
