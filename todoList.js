const fromStorage = localStorage.getItem('todo')
if (fromStorage) document.querySelector('.todo__items').innerHTML = fromStorage
const addTask = document.querySelector(".todo__input");
const removeTask = document.querySelector(".todo__items");

function add() {
  const inputText = document.querySelector(".todo__text");
  if (!inputText.value.length) return;
  document
    .querySelector(".todo__items")
    .insertAdjacentHTML("beforeend", create(inputText.value));
  inputText.value = "";
}

function create(text) {
  return `<span class="todo__item"><label class="todo__task"><input type="checkbox" name="checkbox" class="todo__item-check">${text}</label></span>`;
}

function save() {
  localStorage.setItem(
    "todo",
    document.querySelector(".todo__items").innerHTML
  );
}

addTask.addEventListener("click", function (event) {
  if (event.target.closest(".todo__add")) {
    add();
    save();
  }
});

removeTask.addEventListener("click", function (event) {
  if (event.target.closest(".todo__item-check")) {
    event.target.closest(".todo__item").remove();
    save();
  }
});
