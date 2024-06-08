import { Field } from "formik";

type InputProps = {
  label: string;
} & React.ComponentProps<typeof Field>;

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col space-y-1">
        <label className="text-sm text-amber-50/80">{label}</label>
        <div className="border-1 rounded border-amber-50/50 bg-gradient-to-r from-black/10 focus-within:ring-2 focus-within:border-amber focus-within:ring-amber/50 focus-within:ring-offset-3 focus-within:ring-offset-transparent">
          <Field
            {...props}
            className="p-2 bg-transparent placeholder-amber-50/50 placeholder-text-sm outline-none md:min-w-xs"
          />
        </div>
      </div>
      <small></small>
    </div>
  );
}
