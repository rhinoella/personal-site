import { useState } from "react"

export const useTypingEffect = (
  text,
  keystrokeDuration,
) => {
  // Letter index typed
  const [currentLetter, setCurrentLetter] = useState(0);
}