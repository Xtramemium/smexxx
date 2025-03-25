'use client';
import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function Home() {
  const navigate = useRouter()


  const redirectToLifestyle = () => {
    navigate.push('/Lifestyle')
  }

  const redirectToInteresting = () => {
    navigate.push('/Interesting')
  }

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="font-bold text-4xl sm:text-6xl mb-11">Привет!</h1>
      <main className="flex flex-row items-center text-center">
          <div className="text-lg sm:text-2xl">Этот сайт <p className='text-2xl text-rose-700'>очень</p> секретный просим вас подтвердить, что вы Алина</div>
      </main>

        <div className='mt-10 text-2xl flex flex-row gap-4'>
          <button className="text-white hover:text-green-300 transition-colors duration-300" onClick={redirectToLifestyle}>Я - Алина</button>
          <button className="text-white hover:text-red-400 transition-colors duration-300" onClick={redirectToInteresting}>Нет, я не Алина</button>
        </div>
    </div>
  );
}
