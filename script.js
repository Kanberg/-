// --- БАЗА ДАННЫХ ВОПРОСОВ ---
// Структура: Объект с массивами вопросов для каждой темы.
// Для добавления 45 вопросов копируйте объекты внутри массивов.
const quizData = {
    // Тема 1: Артикли (по таблице "Артикль (der Artikel)" и "Таблица падежных форм")
    articles: [
        {
            question: "Какой определенный артикль соответствует среднему роду (ср.р.) в Nominativ?",
            options: ["der", "das", "die", "ein"],
            correctIndex: 1,
            explanation: "Согласно таблице, определенный артикль среднего рода в единственном числе - das."
        },
        {
            question: "Какой неопределенный артикль женского рода (ж.р.) в Dativ?",
            options: ["einer", "einem", "eine", "eines"],
            correctIndex: 0,
            explanation: "В таблице падежных форм (Dat. - кому? чему?) неопределенный артикль женского рода имеет форму 'einer'."
        },
        {
            question: "Какую форму принимает определенный артикль множественного числа в Genitiv (чей?)?",
            options: ["den", "der", "des", "die"],
            correctIndex: 1,
            explanation: "Во множественном числе (Мн.ч.) в падеже Genitiv определенный артикль имеет форму 'der'."
        },
        {
            question: "Какой определенный артикль мужского рода (м.р.) в Akkusativ (кого? что?)?",
            options: ["dem", "des", "den", "der"],
            correctIndex: 2,
            explanation: "В падеже Akkusativ определенный артикль мужского рода меняется на 'den'."
        }
        // ДОБАВЬТЕ СЮДА ОСТАЛЬНЫЕ 41 ВОПРОС ПО АНАЛОГИИ
    ],

    // Тема 2: Склонение существительных (по таблицам сильного, слабого и женского склонения)
    nounsSingular: [
        {
            question: "Какое окончание получает большинство существительных мужского рода и все среднего (кроме das Herz) в Genitiv (сильное склонение)?",
            options: ["-(e)n", "-(e)s", "не меняется", "-er"],
            correctIndex: 1,
            explanation: "Сильное склонение: в Genitiv добавляется окончание -(e)s (например, des Lehrers, des Hauses)."
        },
        {
            question: "Как склоняется слово 'der Mensch' (слабое склонение) в Dativ?",
            options: ["dem Mensch", "dem Menschen", "dem Mensches", "den Mensch"],
            correctIndex: 1,
            explanation: "Слабое склонение: существительные получают окончание -(e)n во всех падежах, кроме Nominativ. Правильно: dem Menschen."
        },
        {
            question: "Меняется ли форма существительных женского рода (например, die Mutter) при склонении в единственном числе?",
            options: ["Да, в Genitiv добавляется -s", "Да, в Dativ добавляется -n", "Нет, падежные окончания отсутствуют"],
            correctIndex: 2,
            explanation: "Согласно таблице 'Женское склонение', существительные женского рода в единственном числе падежных окончаний не имеют."
        },
        {
            question: "Какую форму имеет существительное особого типа склонения 'das Herz' в Genitiv?",
            options: ["des Herz", "des Herzens", "des Herzen", "des Herzes"],
            correctIndex: 1,
            explanation: "Особый тип: 'das Herz' в Genitiv имеет форму 'des Herzens'."
        }
        // ДОБАВЬТЕ СЮДА ОСТАЛЬНЫЕ 41 ВОПРОС ПО АНАЛОГИИ
    ],

    // Тема 3: Образование множественного числа
    nounsPlural: [
        {
            question: "Как образуется множественное число от слова 'der Tisch'?",
            options: ["die Tische (суффикс -e)", "die Tischen (суффикс -en)", "die Tischs (суффикс -s)", "die Tischer (суффикс -er)"],
            correctIndex: 0,
            explanation: "В таблице указано: der Tisch — die Tische (добавляется суффикс -e)."
        },
        {
            question: "Как образуется множественное число от слова 'der Vater'?",
            options: ["die Vater (без изменений)", "die Vätern", "die Väter (умлаут корневой гласной)"],
            correctIndex: 2,
            explanation: "Множественное число образуется только с помощью умлаута корневой гласной: der Vater — die Väter."
        },
        {
            question: "Каким способом образуется множественное число 'das Buch' — 'die Bücher'?",
            options: ["Только суффикс", "Только умлаут", "Сочетание разных средств (умлаут + суффикс -er)"],
            correctIndex: 2,
            explanation: "Здесь используется сочетание средств: корневая гласная получает умлаут (u -> ü) и добавляется суффикс -er."
        },
        {
            question: "Какое окончание получают существительные множественного числа в Dativ (если не имеют его в Nominativ)?",
            options: ["-s", "-e", "-(e)n", "не меняются"],
            correctIndex: 2,
            explanation: "Согласно таблице склонения во множественном числе, в Dativ добавляется окончание -(e)n (например, den Söhnen)."
        }
        // ДОБАВЬТЕ СЮДА ОСТАЛЬНЫЕ 41 ВОПРОС ПО АНАЛОГИИ
    ],

    // Тема 4: Склонение прилагательных (Сильное склонение)
    adjectives: [
        {
            question: "Какое окончание имеет прилагательное в сильном склонении в Nominativ, м.р. (например, 'groß__ Erfolg')?",
            options: ["-e", "-en", "-es", "-er"],
            correctIndex: 3,
            explanation: "В Nominativ мужского рода при сильном склонении прилагательное получает окончание -er (großer Erfolg)."
        },
        {
            question: "Какое окончание имеет прилагательное в сильном склонении в Akkusativ, ср.р. (например, 'groß__ Haus')?",
            options: ["-e", "-es", "-en", "-em"],
            correctIndex: 1,
            explanation: "В Akkusativ среднего рода окончание -es (großes Haus)."
        },
        {
            question: "Выберите правильное окончание для Dativ множественного числа (например, 'groß__ Freunden'):",
            options: ["-e", "-en", "-er", "-em"],
            correctIndex: 1,
            explanation: "В Dativ множественного числа при сильном склонении прилагательное получает окончание -en (großen Freunden)."
        },
        {
            question: "Какое окончание у прилагательного в Genitiv женского рода ('groß__ Freude')?",
            options: ["-e", "-en", "-er", "-em"],
            correctIndex: 2,
            explanation: "В Genitiv женского рода окончание прилагательного -er (großer Freude)."
        }
        // ДОБАВЬТЕ СЮДА ОСТАЛЬНЫЕ 41 ВОПРОС ПО АНАЛОГИИ
    ]
};

// --- ЛОГИКА ПРИЛОЖЕНИЯ ---

let currentTopic = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

// Элементы DOM
const screens = {
    selection: document.getElementById('topic-selection'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const ui = {
    topicTitle: document.getElementById('current-topic-title'),
    questionCounter: document.getElementById('question-counter'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    explanationBox: document.getElementById('explanation-box'),
    explanationText: document.getElementById('explanation-text'),
    nextBtn: document.getElementById('next-btn'),
    scorePoints: document.getElementById('score-points'),
    totalPoints: document.getElementById('total-points')
};

// Инициализация кнопок выбора темы
document.querySelectorAll('.topic-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const topicId = e.target.getAttribute('data-topic');
        const topicName = e.target.innerText;
        startQuiz(topicId, topicName);
    });
});

// Навигация
ui.nextBtn.addEventListener('click', loadNextQuestion);
document.getElementById('restart-topic-btn').addEventListener('click', () => startQuiz(currentTopic, ui.topicTitle.innerText));
document.getElementById('home-btn').addEventListener('click', showTopicSelection);

// Переключение экранов
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Запуск теста
function startQuiz(topicId, topicName) {
    currentTopic = topicId;
    currentQuestions = quizData[topicId];
    currentQuestionIndex = 0;
    score = 0;
    
    ui.topicTitle.innerText = topicName;
    ui.totalPoints.innerText = currentQuestions.length;
    
    showScreen('quiz');
    displayQuestion();
}

// Отображение вопроса
function displayQuestion() {
    ui.explanationBox.classList.add('hidden');
    ui.optionsContainer.innerHTML = '';
    
    const q = currentQuestions[currentQuestionIndex];
    ui.questionCounter.innerText = `Вопрос ${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    ui.questionText.innerText = q.question;
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option;
        btn.addEventListener('click', () => handleAnswer(index, btn));
        ui.optionsContainer.appendChild(btn);
    });
}

// Обработка ответа
function handleAnswer(selectedIndex, btnElement) {
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === q.correctIndex;
    
    // Блокируем все кнопки после ответа
    const allButtons = ui.optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // Подсвечиваем правильный ответ
        allButtons[q.correctIndex].classList.add('correct');
    }
    
    // Показываем объяснение
    ui.explanationText.innerText = q.explanation;
    ui.explanationBox.classList.remove('hidden');
}

// Переход к следующему вопросу
function loadNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

// Экран результатов
function showResults() {
    ui.scorePoints.innerText = score;
    showScreen('result');
}

// Возврат на главную
function showTopicSelection() {
    showScreen('selection');
}

