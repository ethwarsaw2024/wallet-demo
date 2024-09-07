import { useState, useEffect } from 'react';

export function useMyWallet() {
  const [wallet, setWallet] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const login = () => {
    setShowModal(true);
  };

  const handleEmailSubmit = async (email: string) => {
    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send OTP' + response.text + 'koza');
      }

      console.log('OTP sent to email:', email);
      setAuthenticated(false);
      setShowModal(false);
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  useEffect(() => {
    // Add your wallet logic here
  }, []);

  return { wallet, authenticated, login, showModal, setShowModal, handleEmailSubmit };
}
