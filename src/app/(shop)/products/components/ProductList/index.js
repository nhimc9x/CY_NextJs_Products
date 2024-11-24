"use client";

import ProductCard from "@/app/(shop)/products/components/ProductCard";
import {useEffect, useRef, useState} from "react";
import {getProducts} from "@/services/productServices";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import Filter from "@/app/(shop)/products/components/Filter";
import {useSearchParams, usePathname, useRouter} from "next/navigation";

export default function ProductList({initialProducts, query, last_page}) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const router = useRouter()
    const containerRef = useRef(null)
    const [parent, enableAnimations] = useAutoAnimate({
        duration: 400,
        easing: 'ease-in-out',
    })

    const [products, setProducts] = useState(initialProducts)
    const [filterQuery, setFilterQuery] = useState(query)
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [updateProducts, setUpdateProducts] = useState(false)

    const getMoreProducts = async (page, query) => {
        try {
            setIsLoading(true)
            const res = await getProducts(page, query)
            setProducts([...products, ...res.data.data])
            setTotalPage(res.data?.last_page)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const getProductsByQuery = async (query) => {
        try {
            setIsLoading(true)
            const res = await getProducts(1, query)
            setProducts([...res.data.data])
            setTotalPage(res.data?.last_page)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleFilter = async (newQuery) => {
        const params = new URLSearchParams(newQuery)
        router.push(`${pathname}?${params.toString()}`)
        setFilterQuery(newQuery)
        setCurrentPage(1)
        await getProductsByQuery(newQuery)
    }

    const handleScroll = () => {
        if (isLoading || updateProducts) return
        if (containerRef.current.getBoundingClientRect().bottom < window.innerHeight) {
            if (currentPage > totalPage) {
                setUpdateProducts(true)
                return
            }
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        if (currentPage > 1) getMoreProducts(currentPage, filterQuery)
    }, [currentPage])

    useEffect(() => {
        if (updateProducts) {
            setTimeout(async () => {
                await getMoreProducts(currentPage, filterQuery)
                setUpdateProducts(false)
            }, 2000)
        }
    }, [updateProducts])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isLoading])

    return (
        <div ref={containerRef} className="pb-16">

            <Filter query={filterQuery} handleFilter={handleFilter}/>

            <div ref={parent} className="px-10 py-16 grid grid-cols-3 gap-6">
                {
                    products.length === 0 ?
                        <div className="text-center min-h-[400px] col-span-3 text-holographic text-xl py-8">No products</div> :
                        products.map((product, index) => (
                            <ProductCard key={index} product={product}/>
                        ))
                }
            </div>
            {
                isLoading && <div
                    className="size-16 rounded-full mx-auto border-4 border-gray-200/10 animate-spin border-t-primary"></div>
            }
        </div>
    )
}