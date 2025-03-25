'use client';
import {useRouter} from "next/navigation";

import {router} from "next/client";

export default function Interesting() {
    const navigate = useRouter()

    const returnBack = () => {
        navigate.push('/')
    }
    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="font-bold text-4xl sm:text-6xl mb-11">Чо интересно стало?))</h1>

            <button className='text-2xl border text-white border-amber-200 p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 ' onClick={returnBack}>Попробуем еще раз</button>
        </div>
    );
}