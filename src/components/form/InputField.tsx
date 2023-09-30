import { ComponentType, HTMLProps, InputHTMLAttributes, SVGProps } from "react";

interface InputFieldProps extends HTMLProps<HTMLLabelElement> {
  name: string;
  placeholder?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
  name,
  placeholder,
  Icon,
  inputProps,
  ...props
}: InputFieldProps) => {
  return (
    <label
      {...props}
      htmlFor={name}
      className={`relative text-primary-900 ${props.className}`}
    >
      {Icon && (
        <Icon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-6 stroke-2" />
      )}
      <input
        {...inputProps}
        name={name}
        placeholder={placeholder}
        className={`bg-secondary-900 rounded-3xl text-2xl font-passion text-primary-900 placeholder:text-primary-900 px-6 py-1 pr-14 ${inputProps?.className}`}
      />
    </label>
  );
};

export { InputField };
