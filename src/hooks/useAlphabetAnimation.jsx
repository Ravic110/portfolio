import { useEffect } from 'react';

const useAlphabetAnimation = (elements, duration) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=[]{}|;:',.<>?/éèê&@ ";

  useEffect(() => {
    const intervalIds = {};

    const animateElement = (element) => {
      if (!element.dataset.value) return;
      let iteration = 0;
      const intervalId = setInterval(() => {
        element.innerText = element.dataset.value
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return element.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        iteration += 1 / 3;

        if (iteration >= element.dataset.value.length) {
          element.innerText = element.dataset.value;
          clearInterval(intervalId);
          delete intervalIds[element.dataset.id];
        }
      }, 30);

      intervalIds[element.dataset.id] = intervalId;
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