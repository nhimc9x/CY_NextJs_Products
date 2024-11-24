import {IoIosClose} from "react-icons/io";

export default function FilterTag({value, deleteValue}) {
    if (!value) return null
    return (
        <div className="pr-2 pl-4 gap-3 py-1.5 bg-text-primary flex items-center rounded-full">
            <span>{value}</span>
            <IoIosClose
                onClick={deleteValue}
                className="text-xl cursor-pointer text-white hover:bg-red-500 rounded-full"/>
        </div>
    )
}