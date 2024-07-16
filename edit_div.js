let box = queryselector("div"),
  input = queryselector("input");
input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
});