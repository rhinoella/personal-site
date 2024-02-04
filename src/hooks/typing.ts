import { useEffect, useState } from "react"

export const useTypingEffect = (
  text: string,
  keystrokeDuration: number,
) => {
  // Letter index typed
  const [currentLetter, setCurrentLetter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLetter((index) => index + 1);
    }, keystrokeDuration);
    return () => {
      clearInterval(intervalId);
    }
  }, [keystrokeDuration]);

  return (text.substring(0, currentLetter));
}

export const useDeleteEffect = (
  text: string,
  keystrokeDuration: number,
) => {
    const [currentLetter, setCurrentLetter] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentLetter((index) => index + 1);
      }, keystrokeDuration);
      return () => {
        clearInterval(intervalId);
      }
    }, [keystrokeDuration]);
  
    return (text.substring(0, text.length - currentLetter));
}