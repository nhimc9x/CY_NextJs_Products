"use client";

import {useEffect, useState} from "react";
import {useAutoAnimate} from "@formkit/auto-animate/react";

export default function BrandList() {
    const [list, setList] = useState([
        {
            id: 1,
            src: 'https://www.designrush.com/uploads/users/customer-2/image_1505933355_8f62f6c907fb830b0b6c93c58dc1b98f.png',
        },
        {
            id: 2,
            src: 'https://dbl-static.usercontent.prism.gg/icons/355076051174424576/664b84dfc8b3c04bddb87986de85a6c0.png?size=256',
        },
        {
            id: 3,
            src: 'https://server-avatar.nimostatic.tv/201907081562587247030_1599512126145_avatar.png',
        },
        {
            id: 4,
            src: 'https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700',
        },
        {
            id: 5,
            src: 'https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 6,
            src: 'https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 7,
            src: 'https://www.zarla.com/images/walmart-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 8,
            src: 'https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 9,
            src: 'https://www.zarla.com/images/olympics-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 10,
            src: 'https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 15,
            src: 'https://www.zarla.com/images/bmw-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 16,
            src: 'https://www.zarla.com/images/mercedes-benz-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 17,
            src: 'https://www.zarla.com/images/walmart-logo-2400x2400-20220513.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 18,
            src: 'https://www.zarla.com/images/ebay-logo-2400x2400-20223105.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 19,
            src: 'https://www.zarla.com/images/olympics-logo-2400x2400-20220519.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 20,
            src: 'https://www.zarla.com/images/starbucks-logo-2400x2400-20220513-2.png?crop=1:1,smart&width=150&dpr=2',
        },
        {
            id: 21,
            src: 'https://www.designrush.com/uploads/users/customer-2/image_1505933355_8f62f6c907fb830b0b6c93c58dc1b98f.png',
        },
        {
            id: 22,
            src: 'https://dbl-static.usercontent.prism.gg/icons/355076051174424576/664b84dfc8b3c04bddb87986de85a6c0.png?size=256',
        },
        {
            id: 23,
            src: 'https://server-avatar.nimostatic.tv/201907081562587247030_1599512126145_avatar.png',
        },
        {
            id: 24,
            src: 'https://img.pikbest.com/png-images/20241022/stealth-masked-hacker-gaming-logo-for-gamers_10991543.png!bw700',
        },
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            setList((prevImages) => {
                return [...prevImages].sort(() => Math.random() - 0.5);
            });
        }, 3600);

        return () => clearInterval(interval);
    }, []);

    const [parent] = useAutoAnimate({
        duration: 700,
        easing: 'ease-in-out',
    })

    return (
        <div
            ref={parent}
            className="grid sm:grid-cols-5 xs:grid-cols-4 grid-cols-3 gap-6 justify-center px-8">
            {list.map((item) => (
                <div
                    key={item.id}
                    className="md:size-24 size-20 justify-self-center">
                    <img src={item.src} className="w-full mx-auto" alt="logo"/>
                </div>
            ))}
        </div>
    )
}