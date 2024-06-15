import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { IoMdCheckmark } from "react-icons/io";
import { TbLayersSelectedBottom } from "react-icons/tb";

type StepButtonProps = {
  position: string;
  title: string;
  hideLine?: boolean;
};

export default function StepButton({
  position,
  title,
  hideLine,
}: StepButtonProps) {
  return (
    <Tab
      className={clsx(
        "text-left flex lt-lg:items-center lt-lg:space-x-4 lg:flex-col focus:outline-none",
        [hideLine ? "" : "lt-lg:flex-1"]
      )}
    >
      {({ selected }) => (
        <>
          <div className="flex space-x-4">
            <div>
              <div
                className={clsx(
                  "border border-green/50 text-green/50 text-black w-8 h-8 flex items-center justify-center rounded-full",
                  {
                    "border-none bg-green ring-1 ring-green  ring-offset-4 ring-offset-black":
                      selected,
                  }
                )}
              >
                {selected ? <IoMdCheckmark className="text-black" /> : position}
              </div>
              {!hideLine && (
                <div
                  className={clsx("ml-4 w-0.4 h-16 bg-green/50 lt-lg:hidden", {
                    "bg-green": selected,
                  })}
                />
              )}
            </div>
            <div className="flex flex-col">
              <p
                className={clsx([
                  selected ? "text-green-200" : "text-green-700",
                ])}
              >
                Step {position}
              </p>
              <p
                className={clsx("lt-lg:hidden", [
                  selected ? "text-green" : "text-green/50 ",
                ])}
              >
                {title}
              </p>
            </div>
          </div>
          {!hideLine && (
            <div
              className={clsx("ml-4 flex-1 h-0.4 bg-green/50  lg:hidden", {
                "bg-green": selected,
              })}
            />
          )}
        </>
      )}
    </Tab>
  );
}
