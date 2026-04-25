// 1. Находим в документе поле ввода и список, чтобы работать с ними
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// 2. Функция, которая срабатывает при нажатии на кнопку "Добавить"
function addTask() {
    if (inputBox.value === '') {
        // Если поле пустое, выводим предупреждение
        alert("Вы должны что-то написать!");
    } else {
        // Создаем новый элемент списка (li)
        let li = document.createElement("li");
        // ВМЕСТО li.innerHTML используем textContent для безопасности
        li.textContent = inputBox.value;
        // Добавляем этот элемент в наш список на странице
        listContainer.appendChild(li);

        // Создаем иконку "крестика" (span) для удаления задачи
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Это специальный код символа крестика (умножения)
        li.appendChild(span);
    }
    // Очищаем поле ввода после добавления
    inputBox.value = "";
    saveData();
    updateCounter();
}

// 3. Обработчик кликов внутри всего списка задач
listContainer.addEventListener("click", function(e) {
    // Если кликнули по самому тексту задачи (LI)
    if (e.target.tagName === "LI") {
        // Переключаем класс "checked" (зачеркивание и смена иконки)
        e.target.classList.toggle("checked");
        saveData();
        updateCounter();
    } 
    // Если кликнули по крестику (SPAN)
    else if (e.target.tagName === "SPAN") {
        // Удаляем всю задачу (родительский элемент крестика)
        e.target.parentElement.remove();
        saveData();
        updateCounter();
    }
}, false);

// Функция для сохранения данных в память браузера
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Функция для отображения данных при открытии сайта
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    updateCounter();
}

// Слушатель нажатия клавиш на поле ввода
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask(); // Если нажат Enter, вызываем функцию добавления
    }
});

// Счетчик
function updateCounter() {
    const totalTasks = listContainer.getElementsByTagName("li").length;
    const completedTasks = listContainer.getElementsByClassName("checked").length;
    
    document.getElementById("total-count").textContent = totalTasks;
    document.getElementById("completed-count").textContent = completedTasks;
}

// Вызываем функцию показа задач сразу при загрузке скрипта
showTask();