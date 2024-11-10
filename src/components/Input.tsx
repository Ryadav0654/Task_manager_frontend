import  { useId, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  type: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className = "", type, ...props }, ref) => {
    const id = useId();
    return (
      <>
        {label ? <label htmlFor={id} className="lg:ml-2 lg:mb-2">{label}</label> : null}
        <input
          type={type}
          className={`text-black outline-none focus:ring-1 focus:ring-gray-500 px-5 ${className} placeholder:text-gray-500`}
          {...props}
          ref={ref}
          id={id}
        />
      </>
    );
  }
);

export default Input;
