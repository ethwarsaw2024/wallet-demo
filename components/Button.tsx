'use client';

type buttonProps = {
  cta: string;
  onClick_: () => void;
  disabled?: boolean;
  color?: 'primary' | 'secondary'; // New prop for color
};

const Button = ({ cta, onClick_, disabled, color = 'primary' }: buttonProps) => {
  const baseClasses = "rounded px-10 py-2 text-white transition-all enabled:hover:cursor-pointer enabled:active:scale-90 disabled:opacity-80";
  const colorClasses = color === 'primary'
    ? "bg-slate-800 hover:bg-slate-900 active:bg-slate-900"
    : "bg-gray-500 hover:bg-gray-600 active:bg-gray-600";

  return (
    <button
      className={`${baseClasses} ${colorClasses}`}
      onClick={onClick_}
      disabled={disabled}
    >
      {cta}
    </button>
  );
};

export default Button;
