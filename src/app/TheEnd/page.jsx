import {useRouter} from "next/navigation";
import {router} from "next/client";

export default function Lifestyle() {
    const navigate = useRouter()

    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="font-bold text-4xl sm:text-6xl mb-11">Устал прикол делать(</h1>
        </div>
    );
}