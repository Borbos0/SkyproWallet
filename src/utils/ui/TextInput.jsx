import { baseClasses, normalBorder, errorBorder } from './formClasses';

const TextInput = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  hasError = false,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseClasses} ${hasError ? errorBorder : normalBorder}`}
      />
      {hasError && (
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600">
          *
        </span>
      )}
    </div>
  );
};

export default TextInput;
