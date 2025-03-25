'use client';
import {useRouter} from "next/navigation";
import {router} from "next/client";
import Link from "next/link";

export default function Lifestyle() {
    const navigate = useRouter()

    const returnDoesntMatter = () => {
        navigate.push('/Tired')
    }



    const navigateToBrunetes = () => {
        navigate.push('/Lifestyle')
    }

    const navigateToGlamour = () => {
        navigate.push('/Glamour')
    }


    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="font-bold text-4xl sm:text-6xl mb-11">Найс, выбери пожалуйста категорию</h1>

            <ul className='mt-10 text-2xl flex flex-row gap-14'>
                <li className='border border-cyan-50 p-3 rounded-lg'>
                    <Link className="text-black hover:text-white transition-colors duration-300" href="https://www.kinopoisk.ru/series/5906201/?utm_referrer=www.google.com">Блонды</Link>
                </li>
                <li className='border border-fuchsia-500 p-3 rounded-lg'>
                    <Link className="text-white hover:text-fuchsia-400 transition-colors duration-300" href='https://ru.wikipedia.org/wiki/%D0%93%D0%BB%D0%B0%D0%BC%D1%83%D1%80'>Гламур</Link>
                </li>
                <li className='border border-cyan-50 p-3 rounded-lg'>
                    <Link className="text-white bg-black hover:transition-colors duration-300  hover:text-black" href='https://horo.mail.ru/prediction/leo/today/'>Брюнетки</Link>
                </li>
                <li className='border border-cyan-50 p-3 rounded-lg'>
                    <button className="text-white hover:text-cyan-300 transition-colors duration-300" onClick={returnDoesntMatter}>Неважно??</button>
                </li>
            </ul>
        </div>
    );
}
