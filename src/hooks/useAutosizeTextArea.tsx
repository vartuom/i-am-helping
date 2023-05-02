import { useEffect } from "react";

// Updates the height of a <textarea> when the value changes.
const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string
) => {
  useEffect(() => {
    if (textAreaRef) {
      // We need to reset the height momentarily to get the correct scrollHeight for the textarea
      // Нам нужно на мгновение сбросить высоту, чтобы получить правильную высоту прокрутки для текстовой области
      textAreaRef.style.height = "190px";
      //значение опытным путем подобрано под конкретную ситуацию, если как в примере поставить 0, но при начале ввода символов, размер элемента уменьшается.
      const scrollHeight = textAreaRef.scrollHeight;

      // We then set the height directly, outside of the render loop
      // Затем мы устанавливаем высоту непосредственно, вне цикла рендеринга
      // Trying to set this with state or a ref will product an incorrect value.
      // Попытка установить это с помощью state или ref приведет к получению неправильного значения.
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;

//https://medium.com/@oherterich/creating-a-textarea-with-dynamic-height-using-react-and-typescript-5ed2d78d9848
