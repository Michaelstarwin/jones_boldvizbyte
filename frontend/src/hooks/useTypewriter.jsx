import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 50, delay = 1000) => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let timeout;

        if (isTyping) {
            if (displayText.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayText(text.slice(0, displayText.length + 1));
                }, speed);
            } else {
                setIsTyping(false);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isTyping, text, speed]);

    return displayText;
};
