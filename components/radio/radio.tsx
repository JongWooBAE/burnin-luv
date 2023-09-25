import { useContext } from "react";
import { RadioContext } from "./radioContext";

export default function Radio({ children, id, value, name }) {
  const group = useContext(RadioContext);
  return (
    <label
      className={
        value == "캐스팅"
          ? "flex w-[calc(33.3vw-13.3px)] sm:w-[calc(210px-13.3px)] justify-center border-x"
          : "flex w-[calc(33.3vw-13.3px)] sm:w-[calc(210px-13.3px)] justify-center"
      }
    >
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={group.value !== undefined ? value === group.value : undefined}
        onChange={(e) => group.onChange && group.onChange(e.target.value)}
        className={"hidden peer"}
      />
      <label
        htmlFor={id}
        className={
          value == "공연정보"
            ? "cursor-pointer w-full py-1.5 text-[16px] peer-checked:text-white peer-checked:bg-slate-800 peer-checked:font-semibold peer-disabled:bg-slate-100 peer-disabled:text-gray-400 flex justify-center rounded-l-xl"
            : value == "롤링페이퍼"
            ? "cursor-pointer w-full py-1.5 text-[16px] peer-checked:text-white peer-checked:bg-slate-800 peer-checked:font-semibold peer-disabled:bg-slate-100 peer-disabled:text-gray-400 flex justify-center rounded-r-xl"
            : "cursor-pointer w-full py-1.5 text-[16px] peer-checked:text-white peer-checked:bg-slate-800 peer-checked:font-semibold peer-disabled:bg-slate-100 peer-disabled:text-gray-400 flex justify-center"
        }
      >
        {children}
      </label>
    </label>
  );
}
