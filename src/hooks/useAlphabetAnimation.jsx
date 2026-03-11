import { useEffect } from 'react';

const useAlphabetAnimation = (elements, duration) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=[]{}|;:',.<>?/éèê&@ ";

  useEffect(() => {
    const intervalIds = {};

    const animateElement = (element) => {
      let iteration = 0;
      const intervalId = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return element.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if(iteration >= element.dataset.value.length) {
          clearInterval(intervalId);
        }

        iteration += 1 / 3;
      }, 30);

      intervalIds[element.dataset.id] = intervalId;

      setTimeout(() => {
        clearInterval(intervalId);
        delete intervalIds[element.dataset.id];
      }, duration);
    };

    elements.forEach(element => {
      const el = document.querySelector(element);
      if (el) {
        animateElement(el);
      }
    });

    return () => {
      Object.values(intervalIds).forEach(intervalId => clearInterval(intervalId));
    };
  }, [elements, duration]);
};

export default useAlphabetAnimation;