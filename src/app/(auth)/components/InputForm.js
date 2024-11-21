export default function InputForm({value, setValue, placeholder, type, required}) {
    return (
        <div className="pb-4">
            <input
                required={required}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type || 'text'}
                placeholder={placeholder}
                className="w-full p-4 text-xl bg-white/15 focus:border-[#e84393] outline-[#e84393] border border-[#80f0ff] rounded-md placeholder-gray-600/80 text-gray-900"
            />
        </div>
    )
}
