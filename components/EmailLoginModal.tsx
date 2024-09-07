import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

interface EmailLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (email: string) => void;
}

const EmailLoginModal: React.FC<EmailLoginModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="rounded-lg bg-white p-8">
                <h2 className="mb-4 text-2xl font-bold text-slate-800">Enter your email</h2>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                />
                <div className="flex justify-end gap-2">
                    <Button
                        onClick_={onClose}
                        cta="Cancel"
                        color="secondary"
                    />
                    <Button
                        onClick_={() => onSubmit(email)}
                        cta="Submit"
                    />
                </div>
            </div>
        </div>
    );
};

export default EmailLoginModal;