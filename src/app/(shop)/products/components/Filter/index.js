import {FaFilter} from "react-icons/fa";
import {useEffect, useState} from "react";
import {getCategories} from "@/services/productServices";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import FilterTag from "@/app/(shop)/products/components/FilterTag";

const filterPriceOptions = [
    {id: 2, name: '$0 - $15', value: {min: '', max: 15}},
    {id: 3, name: '$15 - $30', value: {min: 15, max: 30}},
    {id: 4, name: '$30 - $60', value: {min: 30, max: 60}},
    {id: 5, name: '$60+', value: {min: 60, max: ''}},
]

export default function Filter({query, handleFilter}) {
    const [isShowFilter, setIsShowFilter] = useState(false)
    const [categories, setCategories] = useState([])

    const [filterName, setFilterName] = useState(query?.name || '')
    const [filterPrice, setFilterPrice] = useState(null)
    const [filterCategory, setFilterCategory] = useState(null)
    const [otherPrice, setOtherPrice] = useState({
        min: '', max: ''
    })

    const [filterParent] = useAutoAnimate()

    const clearFilter = () => {
        setFilterName('')
        setFilterPrice(null)
        setFilterCategory(null)
    }

    const handleChangeFilterPrice = (value) => {
        if (value?.id === 'other') clearOtherPrice()
        setFilterPrice(value)
    }

    useEffect(() => {
        if (filterPrice?.id === 'other') {
            const nameTag = `$${otherPrice.min || 0}${otherPrice.max ? ' - $' + otherPrice.max : '+'}`
            setFilterPrice({
                id: 'other',
                name: nameTag,
                value: {min: otherPrice.min, max: otherPrice.max}
            })
        }
    }, [otherPrice])

    const clearOtherPrice = () => {
        setOtherPrice({min: '', max: '', nameTag: ''})
    }

    useEffect(() => {
        (async () => {
            const res = await getCategories()
            setCategories(res.data.data)
            if (query?.category_id) {
                const findCate = res.data.data.find(item => item.id === +query.category_id)
                setFilterCategory(findCate ? {id: findCate.id, name: findCate.name} : null)
            }
        })();

        if (query?.min_price || query?.max_price) {
            const min = +query?.min_price || ''
            const max = +query?.max_price || ''
            const findOpt = filterPriceOptions.find(item => item.value.min === min && item.value.max === max)
            if (findOpt) {
                setFilterPrice(findOpt)
            } else {
                setFilterPrice({id: 'other', name: 'Other'})
                setOtherPrice({min, max})
            }
        }
    }, [query])

    const handleApplyFilter = (e) => {
        e.preventDefault()
        const newQuery = {}
        if (filterName) newQuery.name = filterName
        if (filterPrice?.id === 'other') {
            if (otherPrice.min) newQuery.min_price = otherPrice.min
            if (otherPrice.max) newQuery.max_price = otherPrice.max
        } else {
            if (filterPrice?.value?.min) newQuery.min_price = filterPrice.value.min
            if (filterPrice?.value?.max) newQuery.max_price = filterPrice.value.max
        }
        if (filterCategory?.id) newQuery.category_id = filterCategory.id
        handleFilter(newQuery)
    }

    return (
        <div ref={filterParent} className="">
            <div
                className="text-holographic flex items-center gap-4 text-lg border-t border-b h-14 border-text-primary mt-4 px-4">
                <div
                    onClick={() => setIsShowFilter(!isShowFilter)}
                    className="flex cursor-pointer items-center gap-4 border-r pr-4 border-text-primary">
                    <FaFilter/>
                    <div className="">Filter</div>
                </div>
                <div className="text-sm flex items-center gap-2">
                    <FilterTag value={filterName.trim()} deleteValue={() => setFilterName('')}/>
                    <FilterTag value={filterPrice?.name}
                               deleteValue={() => setFilterPrice(null)}/>
                    <FilterTag value={filterCategory?.name}
                               deleteValue={() => setFilterCategory(null)}/>
                </div>
                <div
                    onClick={() => clearFilter()}
                    className="ml-auto cursor-pointer text-base text-gray-500 hover:text-red-500"
                >Clear all
                </div>
            </div>
            {
                isShowFilter && (
                    <form onSubmit={handleApplyFilter} className="grid grid-cols-3 text-gray-400 p-6 text-lg">
                        <div className="col-span-1">
                            <div className="">
                                <div className="">Name</div>
                                <input
                                    type="search"
                                    value={filterName}
                                    onChange={(e) => setFilterName(e.target.value)}
                                    className="ml-4 px-3 py-1.5 bg-text-primary rounded-md mt-2"
                                />
                            </div>
                            <div className="mt-6">
                                <div className="">Price</div>
                                <div className="mt-2 gap-2 pl-4 flex flex-col">
                                    {
                                        filterPriceOptions.map((option) => (
                                            <label key={option.id}>
                                                <input
                                                    value={option.id}
                                                    checked={filterPrice?.id === option.id}
                                                    onChange={() => handleChangeFilterPrice(option)}
                                                    type="radio"
                                                    name="filter-price"
                                                    className="mr-3"
                                                />
                                                <span className="text-base">{option.name}</span>
                                            </label>
                                        ))
                                    }
                                    <label className='relative'>
                                        <input
                                            value='other'
                                            checked={filterPrice?.id === 'other'}
                                            onChange={() => handleChangeFilterPrice({id: 'other', name: 'Other'})}
                                            type="radio"
                                            name="filter-price"
                                            className="mr-3 peer"/>
                                        <span className=" text-base">Other</span>
                                        <span className="peer-[:checked]:flex items-baseline text-sm hidden">
                                    <input
                                        type="number"
                                        value={otherPrice.min}
                                        onChange={(e) => setOtherPrice({...otherPrice, min: e.target.value})}
                                        className="ml-2 max-w-20 p-1.5 bg-text-primary rounded-md mt-2"
                                        placeholder="Min"
                                    />
                                    <span className="mx-2">to</span>
                                    <input
                                        type="number"
                                        value={otherPrice.max}
                                        onChange={(e) => setOtherPrice({...otherPrice, max: e.target.value})}
                                        className="ml-2 max-w-20 p-1.5 bg-text-primary rounded-md mt-2"
                                        placeholder="Max"
                                    />
                                </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 flex flex-col">
                            <div className="">Category</div>
                            <div className="mt-2 pl-4 grid grid-cols-2 gap-2">
                                {
                                    categories.map(item => (
                                        <label key={item.id}>
                                            <input
                                                type="radio"
                                                checked={filterCategory?.id === item.id}
                                                onChange={() => setFilterCategory({
                                                    id: item.id,
                                                    name: item.name
                                                })}
                                                name="filter-category"
                                                className="mr-3"
                                            />
                                            <span className="text-base">{item.name}</span>
                                        </label>
                                    ))
                                }
                            </div>
                            <div className="mt-auto text-right">
                                <button
                                    className="text-holographic bg-text-primary px-4 py-1.5 ring-2 ring-transparent duration-200 hover:ring-primary ring-offset-2 ring-offset-text-primary hover:bg-primary hover:text-white text-base rounded-md">Apply
                                </button>
                            </div>
                        </div>
                    </form>
                )
            }
        </div>
    )
}