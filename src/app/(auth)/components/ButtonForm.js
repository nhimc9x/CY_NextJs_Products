export default function ButtonForm({title, type}) {
    return (
        <button
            type={type || 'submit'}
            className="w-full bg-[#80f0ff]/20 hover:bg-transparent p-4 text-xl hover:tracking-widest border border-[#80f0ff] font-medium rounded-md relative group overflow-hidden hover:border-[#e84393] text-[#80f0ff] duration-500"
        >
            <span
                className="absolute group-hover:size-[400px] ease-in-out size-0 duration-300 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e84393]/20"></span>
            <span>{title || 'Button'}</span>
        </button>
    )
}