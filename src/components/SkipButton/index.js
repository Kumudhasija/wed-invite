// src/FloatingSkipButton.js
import React, { useState, useEffect } from 'react';

const FloatingSkipButton = ({ onSkip }) => {
    const [timeLeft, setTimeLeft] = useState(5);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timerId);
        } else {
            setIsButtonEnabled(true); // Enable the button after the timer expires
        }
    }, [timeLeft]);

    const handleSkip = () => {
        onSkip();
    };

    return (
        <div style={styles.container}>
            <button 
                onClick={handleSkip} 
                style={styles.button} 
                disabled={!isButtonEnabled} // Disable button until timer completes
            >
                {isButtonEnabled ? 'Skip' : `Wait (${timeLeft}s)`}
            </button>
        </div>
    );
};

const styles = {
    container: {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: "rgb(24, 23, 21)", // YouTube red
        color: 'white',
        border: 'none',
        borderRadius: '50px', // Rounded edges
        cursor: 'pointer',
        // opacity: isButtonEnabled ? 1 : 0.6,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
    },
    buttonHover: {
        transform: 'scale(1.05)', // Slightly enlarge on hover
    },
};


export default FloatingSkipButton;