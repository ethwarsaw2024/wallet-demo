import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
    return (
        <div className="mb-4">
            {label && (
                <label className="mb-2 block text-sm font-bold text-slate-700">
                    {label}
                </label>
            )}
            <input
                {...props}
                className="w-full rounded border border-slate-300 bg-white px-3 py-2 text-slate-800 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
            />
        </div>
    );
};

export default Input;