/* ==========================================================================
   1. БАЗА ДАННЫХ И ПЕРЕМЕННЫЕ СОСТОЯНИЯ
   ========================================================================== */

// Каталог готовых пицц для Главного меню
const catalogPizzas = [
    {
        id: "margherita",
        name: "Маргарита",
        description: "Классическая пицца на томатном соусе с базиликом.",
        composition: "Соус томатный, сыр моцарелла, томаты черри, базилик",
        price: 15,
        weight: 450,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
        vegan: true, hit: false, discount: true, spicy: false
    },
    {
        id: "pepperoni",
        name: "Пепперони",
        description: "Острые колбаски и очень много сыра.",
        composition: "Соус томатный, сыр моцарелла, пепперони",
        price: 19,
        weight: 480,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
        vegan: false, hit: true, discount: false, spicy: true
    },
    {
        id: "four-cheese",
        name: "Четыре сыра",
        description: "Насыщенный сырный вкус на нежном соусе.",
        composition: "Соус Альфредо, моцарелла, чеддер, пармезан, горгонзола",
        price: 24,
        weight: 420,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        vegan: false, hit: true, discount: false, spicy: false
    },
    {
        id: "mushroom",
        name: "Грибная с базиликом",
        description: "Нежный вкус шампиньонов со сливочным соусом.",
        composition: "Соус Альфредо, моцарелла, шампиньоны, базилик",
        price: 17,
        weight: 460,
        image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=500",
        vegan: true, hit: false, discount: true, spicy: false
    },
    {
        id: "vegetarian",
        name: "Овощная Вегетарианская",
        description: "Яркий микс свежих овощей на томатном соусе.",
        composition: "Томаты, болгарский перец, маслины, шампиньоны, соус томатный",
        price: 16,
        weight: 490,
        image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500",
        vegan: true, hit: false, discount: false, spicy: false
    },
    {
        id: "meat-feast",
        name: "Мясной пир",
        description: "Сытная пицца с четырьмя видами нежного мяса.",
        composition: "Бекон, ветчина, колбаски пепперони, куриное филе, соус барбекю",
        price: 22,
        weight: 520,
        image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500",
        vegan: false, hit: true, discount: false, spicy: false
    },
    {
        id: "hawaiian",
        name: "Гавайская",
        description: "Тропическое сочетание ананасов и куриного филе.",
        composition: "Куриное филе, ананасы, сыр моцарелла, белый соус",
        price: 18,
        weight: 480,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500",
        vegan: false, hit: false, discount: false, spicy: false
    },
    {
        id: "diablo",
        name: "Дьябло",
        description: "Ультра-острая пицца с халапеньо для любителей погорячее.",
        composition: "Пепперони, острый перец халапеньо, моцарелла, соус чили",
        price: 20,
        weight: 470,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=500",
        vegan: false, hit: true, discount: false, spicy: true
    },
    {
        id: "carbonara",
        name: "Карбонара",
        description: "Знаменитая паста в формате любимой пиццы.",
        composition: "Сливочный соус, бекон, сыр пармезан, чесночное масло",
        price: 21,
        weight: 460,
        image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500",
        vegan: false, hit: false, discount: false, spicy: false
    },
    {
        id: "bbq-chicken",
        name: "Цыпленок Барбекю",
        description: "Нежное филе цыпленка под ароматным соусом барбекю.",
        composition: "Куриное филе, бекон, красный лук, моцарелла, соус барбекю",
        price: 19,
        weight: 500,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=500",
        vegan: false, hit: false, discount: true, spicy: false
    },
    {
        id: "cheese-chicken",
        name: "Сырный цыпленок",
        description: "Много сыра чеддер и сочного куриного филе.",
        composition: "Куриное филе, сыр чеддер, сырный соус, томаты",
        price: 18,
        weight: 490,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500",
        vegan: false, hit: true, discount: false, spicy: false
    },
    {
        id: "rustic",
        name: "Деревенская",
        description: "Сытная пицца с картофельными дольками и беконом.",
        composition: "Картофель, бекон, соленые огурчики, чесночный соус",
        price: 17,
        weight: 510,
       image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500", 
        vegan: false, hit: false, discount: true, spicy: false
    }
];

// Цены ингредиентов для конструктора переведены в BYN
const prices = {
    sizes: { "25": 10, "30": 14, "35": 18 }, // Базовая цена основы
    dough: { "classic": 2, "thin": 0 },        // Пышное тесто +2 руб, тонкое бесплатно
    ingredients: {
        "cheese": 3,
        "pepperoni": 4,
        "mushrooms": 3,
        "tomatoes": 2,
        "basil": 1.5
    }
};

// Переменные для фильтрации и сортировки
let currentFilter = "all";
let currentSort = "default";

const weights = {
    sizes: { "25": 300, "30": 450, "35": 600 }, // Вес основы
    ingredients: {
        "cheese": 50,
        "pepperoni": 40,
        "mushrooms": 40,
        "tomatoes": 50,
        "basil": 10
    }
};

// Состояние конструктора (то, что выбрано прямо сейчас)
let constructorState = {
    size: "25",
    dough: "classic",
    sauce: null, 
    ingredients: new Set()
};

// Корзина покупок (загружается из локальной памяти браузера или создается пустой)
let cart = JSON.parse(localStorage.getItem("pizza-cart")) || [];

/* ==========================================================================
   2. ЛОГИКА SPA (ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ)
   ========================================================================== */

// Функция скрывает все экраны и показывает выбранный
function switchView(viewId) {
    // Находим все секции экранов
    const sections = document.querySelectorAll(".view-section");
    sections.forEach(section => section.classList.add("hidden"));

    // Показываем нужный экран
    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
        targetSection.classList.remove("hidden");
    }

    // Обновляем активный класс в меню навигации в шапке
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => link.classList.remove("active"));
    
    const activeLink = document.getElementById(`nav-${viewId}`);
    if (activeLink) {
        activeLink.classList.add("active");
    }

    // Если переключились на корзину, перерисовываем её актуальное состояние
    if (viewId === 'cart') {
        renderCart();
    }
}

/* ==========================================================================
   3. ГЕНЕРАЦИЯ КАТАЛОГА ГОТОВЫХ ПИЦЦ (ЭКРАН 1)
   ========================================================================== */

function renderCatalog() {
    const catalogContainer = document.getElementById("pizza-catalog");
    if (!catalogContainer) return;

    catalogContainer.innerHTML = "";

    let filteredPizzas = catalogPizzas.filter(pizza => {
        if (currentFilter === "all") return true;
        return pizza[currentFilter] === true;
    });

    if (currentSort === "asc") {
        filteredPizzas.sort((a, b) => a.price - b.price);
    } else if (currentSort === "desc") {
        filteredPizzas.sort((a, b) => b.price - a.price);
    }

    filteredPizzas.forEach(pizza => {
        const card = document.createElement("div");
        card.className = "pizza-card";

        let badgesHtml = "";
        if (pizza.hit) badgesHtml += `<span class="badge badge-hit">Хит</span>`;
        if (pizza.spicy) badgesHtml += `<span class="badge badge-spicy">Острая</span>`;
        if (pizza.vegan) badgesHtml += `<span class="badge badge-vegan">Веган</span>`;
        if (pizza.discount) badgesHtml += `<span class="badge badge-discount">Скидка</span>`;

        card.innerHTML = `
            <div class="pizza-card-wrapper">
                <div class="badge-container">${badgesHtml}</div>
                <img src="${pizza.image}" alt="${pizza.name}">
            </div>
            <div>
                <h3>${pizza.name}</h3>
                <p>${pizza.description}</p>
                <p class="composition-text">Состав: ${pizza.composition}</p>
                
                <div class="card-options">
                    <select class="card-size-select" onchange="updateCardPrice(this, ${pizza.price})">
                        <option value="25" data-add="0">25 см</option>
                        <option value="30" data-add="4" selected>30 см (+4 руб.)</option>
                        <option value="35" data-add="8">35 см (+8 руб.)</option>
                    </select>
                    <!-- Переименовали "Пышное" в "Традиционное" для единства стилей -->
                    <select class="card-dough-select" onchange="updateCardPrice(this, ${pizza.price})">
                        <option value="thin" data-add="0" selected>Тонкое</option>
                        <option value="classic" data-add="2">Традиционное (+2 руб.)</option>
                    </select>
                </div>
            </div>
            <div>
                <div class="price card-price-value">${pizza.price + 4} руб.</div>
                <button class="cta-button" style="padding: 10px 25px; font-size: 14px;" onclick="addReadyPizzaToCart('${pizza.id}', this)">В корзину</button>
            </div>
        `;
        catalogContainer.appendChild(card);
    });
}

// Динамический пересчет цены прямо внутри карточки
function updateCardPrice(selectElement, basePrice) {
    const card = selectElement.closest(".pizza-card");
    const sizeSelect = card.querySelector(".card-size-select");
    const doughSelect = card.querySelector(".card-dough-select");
    
    // Считываем надбавку из атрибутов data-add выбранных опций
    const sizeAdd = parseFloat(sizeSelect.options[sizeSelect.selectedIndex].dataset.add);
    const doughAdd = parseFloat(doughSelect.options[doughSelect.selectedIndex].dataset.add);
    
    const finalPrice = basePrice + sizeAdd + doughAdd;
    card.querySelector(".card-price-value").textContent = `${finalPrice} руб.`;
}

function initMenuFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentFilter = this.dataset.filter; // Обновляем категорию
            renderCatalog(); // Перерисовываем
        });
    });
}

function handleSortChange(sortValue) {
    currentSort = sortValue;
    renderCatalog();
}

/* ==========================================================================
   4. ЛОГИКА РАБОТЫ КОНСТРУКТОРА ПИЦЦЫ (Элементы управления и анимация)
   ========================================================================== */

// Инициализация кнопок выбора теста, размера и соуса в конструкторе
function initConstructorControls() {
    // Слушаем клики по кнопкам выбора размера и теста
    const step1Buttons = document.querySelectorAll(".row button, .todo-app button");
    
    // Но так как у нас кнопки создаются динамически или статически,
    // мы просто вешаем обработчики на наши опции.
}

// Функция добавления/удаления ингредиентов
function toggleIngredient(ingredient) {
    if (completedTasks().includes(ingredient)) {
        // ...
    }
}

// Главная функция обновления превью и калькуляции цены
function updatePizzaPreview() {
    let price = 0;
    let weight = 0;

    // Расчет параметров в зависимости от размера теста
    const size = document.querySelector('input[name="size"]:checked')?.value || "30";
    const thickness = document.querySelector('input[name="thickness"]:checked')?.value || "traditional";

    if (size === "25") { price += 200; weight = 300; }
    else if (size === "30") { e = 30; price += 300; weight = 450; } // Средняя
    else { price += 400; weight = 600; } // Большая

    // Считаем добавленные соусы и сыры
    // ... расчет цены на основе ингредиентов ...
}

// Динамическое добавление ингредиентов на холст и расчет цены

function setupConstructor() {
    // Отслеживаем клики по кнопкам выбора размера (25/30/35)
    document.querySelectorAll(".size-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            constructorState.size = this.dataset.size;
            
            const preview = document.getElementById("pizza-preview");
            if (constructorState.size === "25") preview.style.transform = "scale(0.85)";
            else if (constructorState.size === "30") preview.style.transform = "scale(1)";
            else preview.style.transform = "scale(1.15)";
            
            calculatePizza();
        });
    });

    // Отслеживаем клики по типу теста
    document.querySelectorAll(".dough-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            document.querySelectorAll(".dough-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            constructorState.dough = this.dataset.dough;
            calculatePizza();
        });
    });

    // Отслеживаем клики по выбору соуса (С возможностью ОТМЕНЫ выбора)
    document.querySelectorAll(".sauce-select-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const sauceLayer = document.getElementById("layer-sauce");

            // Если кликнули на соус, который УЖЕ выбран — убираем соус вообще
            if (this.classList.contains("active")) {
                this.classList.remove("active");
                constructorState.sauce = null; // Сбрасываем соус в памяти
                sauceLayer.classList.add("hidden"); // Убираем с превью
            } else {
                // Иначе переключаем на выбранный соус
                document.querySelectorAll(".sauce-select-btn").forEach(b => b.classList.remove("active"));
                this.classList.add("active");
                constructorState.sauce = this.dataset.sauce;
                sauceLayer.classList.remove("hidden");
            }
            
            calculatePizza();
        });
    });

    // Отслеживаем переключение ингредиентов (начинок)
    document.querySelectorAll(".ingredient-toggle-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const ing = this.dataset.ingredient;
            this.classList.toggle("active");

            if (constructorState.ingredients.has(ing)) {
                constructorState.ingredients.delete(ing);
                document.getElementById(`layer-${ing}`).classList.add("hidden");
            } else {
                constructorState.ingredients.add(ing);
                document.getElementById(`layer-${ing}`).classList.remove("hidden");
            }
            calculatePizza();
        });
    });

    calculatePizza(); // Первичный расчет при загрузке
}

// Функция расчета цены и веса
function calculatePizza() {
    let totalPrice = prices.sizes[constructorState.size];
    let totalWeight = weights.sizes[constructorState.size];

    // Добавка за традиционное тесто
    totalPrice += prices.dough[constructorState.dough];

    // Добавки за каждый выбранный ингредиент
    constructorState.ingredients.forEach(ing => {
        totalPrice += prices.ingredients[ing];
        totalWeight += weights.ingredients[ing];
    });

    // Динамически перекрашиваем соус в зависимости от значения
    const sauceLayer = document.getElementById("layer-sauce");
    if (!constructorState.sauce) {
        sauceLayer.classList.add("hidden"); // Если соус сброшен — скрываем его
    } else {
        sauceLayer.classList.remove("hidden");
        if (constructorState.sauce === "tomato") {
            sauceLayer.style.backgroundColor = "rgba(224, 43, 43, 0.85)"; // Красный
        } else if (constructorState.sauce === "alfredo") {
            sauceLayer.style.backgroundColor = "rgba(253, 246, 226, 0.95)"; // Сливочный белый
        } else if (constructorState.sauce === "barbecue") {
            sauceLayer.style.backgroundColor = "rgba(102, 34, 34, 0.9)"; // Темно-коричневый
        }
    }

    // Если выбран сыр, автоматически показываем базовый сырный слой
    const cheeseLayer = document.getElementById("layer-cheese");
    if (constructorState.ingredients.has("cheese")) {
        cheeseLayer.classList.remove("hidden");
    } else {
        cheeseLayer.classList.add("hidden");
    }

    // Обновляем данные на экране
    document.getElementById("pizza-price").textContent = `Цена: ${totalPrice} руб.`;
    document.getElementById("pizza-weight").textContent = `Вес: ${totalWeight} г`;
}

/* ==========================================================================
   5. РАБОТА С КОРЗИНОЙ ПОКУПОК (ДОБАВЛЕНИЕ, РЕНДЕР, СЧЁТЧИКИ)
   ========================================================================== */

// Сохранение корзины в локальную память браузера
function saveCart() {
    localStorage.setItem("pizza-cart", JSON.stringify(cart));
    updateHeaderCartIndicator();
}

// Обновление индикатора корзины в шапке (сумма и количество)
function updateHeaderCartIndicator() {
     const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    document.getElementById("cart-count").textContent = totalCount;
    document.getElementById("cart-total-header").textContent = `${totalPrice} руб.`;
}

// Добавление кастомной собранной пиццы в корзину
function addCustomPizzaToCart() {
    let totalPrice = prices.sizes[constructorState.size] + prices.dough[constructorState.dough];
    
    // Переводчик соусов на русский язык
    const sauceTranslations = {
        tomato: "Томатный",
        alfredo: "Альфредо",
        barbecue: "Барбекю"
    };
    
    // Если соус не выбран (null), пишем "Без соуса" вместо "null" (Исправление бага)
    const sauceName = sauceTranslations[constructorState.sauce] || "Без соуса";

    let descriptionList = [
        `${constructorState.size} см`,
        constructorState.dough === "classic" ? "Традиционное тесто" : "Тонкое тесто",
        `Соус: ${sauceName}`
    ];

    constructorState.ingredients.forEach(ing => {
        totalPrice += prices.ingredients[ing];
        const names = { cheese: "Моцарелла", pepperoni: "Пепперони", mushrooms: "Шампиньоны", tomatoes: "Томаты", basil: "Базилик" };
        descriptionList.push(names[ing]);
    });

    const customPizzaItem = {
        id: "custom_" + Date.now(),
        name: "Кастомная пицца",
        description: descriptionList.join(", "),
        price: totalPrice,
        quantity: 1,
        // ИНТЕГРИРУЕМ ВЕКТОРНУЮ ПИЦЦУ (Слайс) — теперь картинка никогда не сломается
        image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffb300'><path d='M12 2L2 22h20L12 2z'/><circle cx='12' cy='14' r='2' fill='%23ff5945'/><circle cx='9' cy='18' r='1.5' fill='%23ff5945'/><circle cx='15' cy='18' r='1.5' fill='%23ff5945'/><path d='M2 22c5-2 15-2 20 0' stroke='%23c58b3e' stroke-width='2' fill='none'/></svg>"
    };

    cart.push(customPizzaItem);
    saveCart();
    resetConstructor();
    switchView("cart");
}

// Добавление готовой пиццы из каталога меню
function addReadyPizzaToCart(pizzaId, buttonElement) {
    const card = buttonElement.closest(".pizza-card");
    const sizeSelect = card.querySelector(".card-size-select");
    const doughSelect = card.querySelector(".card-dough-select");
    
    const selectedSize = sizeSelect.value;
    const selectedDoughText = doughSelect.value === "classic" ? "Традиционное" : "Тонкое";
    
    const pizzaTemplate = catalogPizzas.find(p => p.id === pizzaId);
    if (!pizzaTemplate) return;

    const sizeAdd = parseFloat(sizeSelect.options[sizeSelect.selectedIndex].dataset.add);
    const doughAdd = parseFloat(doughSelect.options[doughSelect.selectedIndex].dataset.add);
    const finalPrice = pizzaTemplate.price + sizeAdd + doughAdd;

    const itemDescription = `${selectedSize} см, ${selectedDoughText} тесто, Состав: ${pizzaTemplate.composition}`;
    const cartItemId = `${pizzaId}_${selectedSize}_${doughSelect.value}`;

    const existingItem = cart.find(item => item.id === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: cartItemId,
            name: pizzaTemplate.name,
            description: itemDescription,
            price: finalPrice,
            quantity: 1,
            image: pizzaTemplate.image
        });
    }
    saveCart();
    alert(`Пицца "${pizzaTemplate.name}" (${selectedSize} см) добавлена в корзину!`);
}

// Сброс конструктора в базовое состояние после добавления в корзину
function resetConstructor() {
    constructorState = {
        size: "25",
        dough: "classic",
        sauce: null, // Заменили "tomato" на null
        ingredients: new Set()
    };

    // Сбрасываем активные классы кнопок в HTML
    document.querySelectorAll(".size-btn, .dough-btn, .sauce-select-btn, .ingredient-toggle-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // Возвращаем базовые активные кнопки по умолчанию
    document.querySelector('.size-btn[data-size="25"]').classList.add("active");
    document.querySelector('.dough-btn[data-dough="classic"]').classList.add("active");
    
    // Скрываем все наложенные слои ингредиентов на холсте
    document.querySelectorAll(".pizza-layer").forEach(layer => {
        if (!layer.classList.contains("layer-dough")) {
            layer.classList.add("hidden");
        }
    });

    // Возвращаем масштаб превью к базовому
    document.getElementById("pizza-preview").style.transform = "scale(0.85)";

    calculatePizza();
}

// Отрисовка списка товаров в корзине (ЭКРАН 3)
function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (!cartContainer) return;

    cartContainer.innerHTML = ""; // Очищаем

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-cart-text" style="text-align: center; color: #888; padding: 20px 0;">Ваша корзина пока пуста. Загляните в меню или конструктор!</p>`;
        document.getElementById("cart-total-price").textContent = "0 руб."; 
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div class="quantity-control">
                <button class="qty-btn" onclick="changeQuantity('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="item-price">${item.price * item.quantity} руб.</div>
            <button class="delete-item-btn" onclick="removeItem('${item.id}')">&times;</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById("cart-total-price").textContent = `${totalPrice} руб.`;
}

// ==========================================================================
// МАСКА ТЕЛЕФОНА И ДРУГИЕ ИНИЦИАЛИЗАЦИИ (Вне функций, в общем потоке кода)
// ==========================================================================

// Находим поле телефона один раз при загрузке скрипта
const phoneInput = document.getElementById("user-phone");
if (phoneInput) {
    phoneInput.addEventListener("input", function (e) {
        let input = e.target.value.replace(/\D/g, ""); // Очищаем всё, кроме цифр
        if (input.length === 0) {
            e.target.value = "";
            return;
        }
        // Белорусский код всегда должен начинаться с 375
        if (!input.startsWith("375")) {
            input = "375" + input;
        }
        let formatted = "+375 ";
        if (input.length > 3) {
            formatted += "(" + input.substring(3, 5);
        }
        if (input.length > 5) {
            formatted += ") " + input.substring(5, 8);
        }
        if (input.length > 8) {
            formatted += "-" + input.substring(8, 10);
        }
        if (input.length > 10) {
            formatted += "-" + input.substring(10, 12);
        }
        e.target.value = formatted.substring(0, 19); // Ограничиваем длину маски
    });
}

// Изменение количества товара в корзине (+ / -)
function changeQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
        removeItem(itemId);
    } else {
        saveCart();
        renderCart();
    }
}

// Удаление товара из корзины
function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCart();
}

/* ==========================================================================
   6. ОФОРМЛЕНИЕ ЗАКАЗА (ОКНО УСПЕХА И МАСКИ)
   ========================================================================== */

// Функция отправки формы заказа
function handleCheckout(event) {
   event.preventDefault(); // Предотвращаем перезагрузку страницы

    if (cart.length === 0) {
        alert("Ваша корзина пуста. Нечего отправлять!");
        return;
    }

    const nameInput = document.getElementById("user-name").value.trim();
    const phoneInput = document.getElementById("user-phone").value.trim();
    const addressInput = document.getElementById("user-address").value.trim();

    // 1. Проверка имени (только русские/английские буквы, от 2 до 50 символов)
    const nameRegex = /^[А-Яа-яЁёA-Za-z\s]{2,50}$/;
    if (!nameRegex.test(nameInput)) {
        alert("Пожалуйста, введите корректное имя (только буквы, от 2 до 50 символов)!");
        return;
    }

    // 2. Проверка телефона (полная бел. маска должна содержать ровно 19 символов)
    if (phoneInput.length < 19) {
        alert("Пожалуйста, введите полный номер телефона в формате +375 (XX) XXX-XX-XX!");
        return;
    }

    // 3. Проверка адреса на "бред" (минимум 10 символов для подробного адреса)
    if (addressInput.length < 10) {
        alert("Пожалуйста, введите подробный адрес доставки (улица, дом, квартира — минимум 10 символов)!");
        return;
    }

    // Если всё верно — генерируем заказ
    const randomOrderId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("order-id").textContent = `#${randomOrderId}`;

    // Открываем модальное окно успешного оформления
    document.getElementById("order-success-modal").classList.remove("hidden");

    // Полностью очищаем корзину после успешной покупки
    cart = [];
    saveCart();
    document.getElementById("checkout-form").reset(); // Очищаем поля формы
}

function closeSuccessModal() {
    document.getElementById("order-success-modal").classList.add("hidden");
    switchView("menu"); // Перенаправляем пользователя на главную страницу
}

/* ==========================================================================
   7. ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
   ========================================================================== */
window.addEventListener("DOMContentLoaded", () => {
    renderCatalog();             // Строим меню готовых пицц
    setupConstructor();          // Инициализируем весь конструктор пиццы
    updateHeaderCartIndicator(); // Загружаем начальные цифры корзины в шапке
    initMenuFilters();
});

// Запуск обработчиков конструктора при старте
function setupConstructorEvents() {
    setupConstructor();
}