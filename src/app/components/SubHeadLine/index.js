export default function SubHeadLine({title}) {
    return (
        <div className="flex items-center justify-center gap-8 mt-12 mb-20">
            <div className="h-[1px] bg-text-primary w-20"></div>
            <div className="text-lg uppercase font-medium text-gray-400">{title}</div>
            <div className="h-[1px] bg-text-primary w-20"></div>
        </div>
    )
}