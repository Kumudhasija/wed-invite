import React, { useState } from 'react';
import './index.css'; // Ensure to import your CSS file
import stampImage from '../../assests/logo2.png'; // Import the stamp image
import letterImage from '../../assests/invite.jpg'; // Import the letter image
import backgroundImage from '../../assests/bg.jpg';
import i2 from '../../assests/i2.png';
import i3 from '../../assests/i3.png';

const Envelope = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLetterDisplayed, setIsLetterDisplayed] = useState(false);

    const toggleEnvelope = () => {
        if (!isOpen) {
            setIsOpen(true);
            setTimeout(() => {
                setIsLetterDisplayed(true);
            }, 2000); // Show letter after 2 seconds
        } else {
            setIsOpen(false);
            setIsLetterDisplayed(false);
        }
    };

    const closeOverlay = () => {
        setIsLetterDisplayed(false);
        setIsOpen(false); // Close the envelope when the close button is clicked
    };

    const handleClick = (section) => {
        switch (section) {
            case 'Section 2':
                window.location.href = 'https://maps.app.goo.gl/Km1PNUgLKroNXxRa9'; 
                break;
            case 'Section 3':
                window.location.href = 'https://kwikpic-in.app.link/SlIQBYcESNb?groupCode=XYZ0Z8&adminToken=XYZ0Z8aFXBnlFY'; 
                break;
            default:
                break;
        }
    };

    return (
        <div className="envelope-wrapper">
            <div 
                className="background-image" 
                style={{ backgroundImage: `url(${backgroundImage})` }} 
            />
            <div
                id="envelope"
                className={isOpen ? 'open' : 'close'}
                onClick={toggleEnvelope}
            >
                <div className="front flap"></div>
                <div className="front pocket"></div>
                <div className="letter">
                    <img
                        src={letterImage}
                        alt="Letter"
                        className="letter-image"
                    />
                </div>
                <div className="hearts">
                    <div className="heart a1"></div>
                    <div className="heart a2"></div>
                    <div className="heart a3"></div>
                    <div className="heart a4"></div>
                    <div className="heart a5"></div>
                    <div className="heart a6"></div>
                </div>
                <div>
                <img
                    src={stampImage}
                    alt="Open Envelope"
                    className="stamp"
                />
                </div>
            </div>
            {isLetterDisplayed && (
                <div className={`letter-overlay active`}>
                    <button className="close-button" onClick={closeOverlay}>×</button>
                    <img
                        src={letterImage}
                        alt="Full Letter"
                        className="letter-overlay-image"
                    />
                    <div className="clickable-divs">
  
                        <div className="clickable-div div2" 
                        style={{ backgroundImage: `url(${i2})` }}
                        onClick={() => handleClick('Section 2')}>

                        </div>
                        <div className="clickable-div div3" 
                        style={{ backgroundImage: `url(${i3})` }}
                        onClick={() => handleClick('Section 3')}>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Envelope;
