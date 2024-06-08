import { Field } from "formik";

type InputProps = {
  label: string;
} & React.ComponentProps<typeof Field>;

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-amber-50/80">{label}</label>
        <div className="border-1 border-amber-50/50 rounded from-black/10 bg-gradient-to-r focus-within:border-amber focus-within:ring-2 focus-within:ring-offset-3 focus-within:ring-amber/50 focus-within:ring-offset-transparent">
          <Field
            {...props}
            className="bg-transparent p-2 outline-none  placeholder-text-sm placeholder-amber-50/50 md:min-w-lg"
          />
        </div>
      </div>
      <small></small>
    </div>
  );
}
