// const fromStorage = localStorage.getItem('todo')
// if (fromStorage) document.querySelector('.todo__items').innerHTML = fromStorage

const addTask = document.querySelector(".todo__input")
const removeTask = document.querySelector(".todo__items")

function add() {
	console.log("выполянется add()")
	const inputText = document.querySelector('.todo__text')
	if (!inputText.value.length) return
	document.querySelector('.todo__items').insertAdjacentHTML('beforeend', create(inputText.value))
	inputText.value = ''
}

function create(text) {
	console.log("выполянется create(text)")
	return `<span class="todo__item"><label class="todo__task">
	<input type="checkbox" name="checkbox" class="todo__item">
	${text}
	</label></span>`
}

function save() {
	localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML)
}

addTask.addEventListener('click', function(event) {
	console.log("прослушка на добавление повешена")
	if (event.target.classList.contains('todo__add')) {
		add()
		save()
		console.log("задача добавлена")
	}})

removeTask.addEventListener('click', function(event) {
	console.log("прослушка на удаление повешена")
	if (event.target.classList.contains('todo__item-check')) {
		event.target.closest('.todo__item').remove()
		save()
		console.log("задача выполнена и удалена")
	}})

//TODO фикс добавления по пробелу, а не по клику на кнопку, фикс удаления добавленных задач