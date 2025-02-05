import { ButtonHTMLAttributes } from "react";

interface SimpleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export function SimpleButton({ label}: SimpleButtonProps) {
    return (
        <button
            className="border border-blue-900 text-white px-6 py-4 rounded-[15px] bg-transparent transition flex items-center whitespace-nowrap w-min"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="mr-2 w-4 h-4"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
            </svg>
            {label}
        </button>
    );
}
