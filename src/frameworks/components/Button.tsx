type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  const baseStyle =
    "px-6 py-3 rounded-xl font-medium transition transform duration-300 shadow hover:scale-105 active:scale-95 focus:outline-none";

  const variants = {
    primary: "bg-warmBrown text-blush hover:bg-cozyText",
    secondary: "bg-butter text-cozyText hover:bg-teaGreen",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
