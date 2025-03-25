"use client";
import {router} from "next/client";
import {useRouter} from "next/navigation";


export default function Tired() {
    const navigate = useRouter()

    const returnBack = () => {
        navigate.push('/Lifestyle')
    }
    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="font-bold text-4xl sm:text-6xl mb-11">Устал прикол делать</h1>
            <button className='text-2xl border text-white border-amber-200 p-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 ' onClick={returnBack}>Поржать еще раз</button>
        </div>
    );
}