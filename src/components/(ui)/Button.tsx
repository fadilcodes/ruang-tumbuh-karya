import React from 'react'

type ButtonProps = {
  children: React.ReactNode; // Tipe untuk children (bisa teks, elemen, dll)
  className?: string;         // Tipe untuk className (tanda '?' berarti opsional)
} & React.ButtonHTMLAttributes<HTMLButtonElement>; // Ini Bintangnya!


function Button({ children, className, ...props }: ButtonProps) {
    const baseStyles = 'font-bold py-1 px-7 focus:outline-none focus:shadow-outline';
  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button
