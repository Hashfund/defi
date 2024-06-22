import Image from "next/image";
import { useRef } from "react";
import { useFormikContext } from "formik";

import { MdAccountCircle, MdAdd, MdAddCircle } from "react-icons/md";

type AvatarProps = {
  name: string;
};

export default function AvatarInput({ name }: AvatarProps) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const { values, setFieldValue } = useFormikContext<{ [key: string]: File }>();

  return (
    <div className="m-auto">
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(event) => {
          const files = event.target.files;
          if (files && files.length > 0) setFieldValue(name, files.item(0));
        }}
      />
      <div
        className="bg-secondary/10 p-2 rounded-full cursor-pointer"
        onClick={() => fileRef.current?.click()}
      >
        <div className="relative">
          {values[name] ? (
            <Image
              src={URL.createObjectURL(values[name])}
              alt="Preview"
              width={32}
              height={32}
              className="rounded-full"
            />
          ) : (
            <MdAccountCircle className="text-white/75 text-4xl" />
          )}
          <div className="absolute -top-2 -right-2 bg-amber  text-black rounded-full">
            <MdAdd className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
