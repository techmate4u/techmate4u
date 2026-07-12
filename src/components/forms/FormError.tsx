interface FormErrorProps {
  message?: string;
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-red-500 font-semibold tracking-wide text-left">
      {message}
    </p>
  );
}
