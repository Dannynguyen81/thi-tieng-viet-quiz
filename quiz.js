/* ==========================================================================
   QUIZ LOGIC ENGINE - VIETNAMESE QUIZ APP
   ========================================================================== */

// App State
let activeQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // { questionId: selectedOption }
let flaggedQuestions = new Set();
let timerInterval = null;
let startTime = null;
let elapsedTime = 0; // in seconds
let quizMode = "exam"; // "exam" or "practice"
let selectedCategory = "all";
let questionCountLimit = 20;
let reportingQuestionId = null;

// DOM Elements
const bodyEl = document.body;
const themeToggleBtn = document.getElementById("theme-toggle-btn");

// Screens
const lobbyScreen = document.getElementById("lobby-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// Lobby Controls
const categorySelector = document.getElementById("category-selector");
const questionCountSelect = document.getElementById("question-count");
const testModeSelect = document.getElementById("test-mode");
const startQuizBtn = document.getElementById("start-quiz-btn");

// Quiz Controls
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const timerText = document.getElementById("timer-text");
const questionBadge = document.getElementById("question-badge");
const flagBtn = document.getElementById("flag-btn");
const questionTextEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtnMid = document.getElementById("finish-btn-mid");
const submitQuizBtn = document.getElementById("submit-quiz-btn");
const navGrid = document.getElementById("nav-grid");

// Instant Feedback (Practice Mode)
const instantFeedbackEl = document.getElementById("instant-feedback");
const feedbackStatusEl = document.getElementById("feedback-status");
const showExplainBtnInstant = document.getElementById("show-explain-btn-instant");
const explanationBoxInstant = document.getElementById("explanation-box-instant");
const correctAnsHeaderInstant = document.getElementById("correct-ans-header-instant");
const explanationTextInstant = document.getElementById("explanation-text-instant");

// Result Controls
const scorePercentEl = document.getElementById("score-percent");
const scoreFractionEl = document.getElementById("score-fraction");
const statTimeEl = document.getElementById("stat-time");
const statCorrectEl = document.getElementById("stat-correct");
const statIncorrectEl = document.getElementById("stat-incorrect");
const statCategoryEl = document.getElementById("stat-category");
const restartBtn = document.getElementById("restart-btn");
const goHomeBtn = document.getElementById("go-home-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
const reviewListContainer = document.getElementById("review-list-container");

// Modal Elements
const reportModal = document.getElementById("report-modal");
const reportQIdEl = document.getElementById("report-q-id");
const closeModalBtn = document.getElementById("close-modal-btn");
const reportTypeSelect = document.getElementById("report-type");
const reportContentTextarea = document.getElementById("report-content");
const submitReportBtn = document.getElementById("submit-report-btn");

/* ==========================================================================
   INITIALIZATION & THEME MANAGER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    registerEvents();
});

function initTheme() {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        bodyEl.classList.add("dark-theme");
        themeToggleBtn.querySelector("i").className = "fa-solid fa-sun";
    } else {
        bodyEl.classList.remove("dark-theme");
        themeToggleBtn.querySelector("i").className = "fa-solid fa-moon";
    }
}

function toggleTheme() {
    bodyEl.classList.toggle("dark-theme");
    const isDark = bodyEl.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggleBtn.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

/* ==========================================================================
   EVENT REGISTRATION
   ========================================================================== */
function registerEvents() {
    // Theme Toggle
    themeToggleBtn.addEventListener("click", toggleTheme);

    // Lobby Category selection
    categorySelector.addEventListener("click", (e) => {
        const card = e.target.closest(".category-card");
        if (!card) return;
        
        // Remove active class from all
        categorySelector.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
        // Add active to selected
        card.classList.add("active");
        selectedCategory = card.dataset.category;
    });

    // Start Quiz
    startQuizBtn.addEventListener("click", startQuiz);

    // Quiz Controls
    prevBtn.addEventListener("click", goToPrevQuestion);
    nextBtn.addEventListener("click", goToNextQuestion);
    flagBtn.addEventListener("click", toggleFlagQuestion);
    
    // Submit Quiz Buttons
    submitQuizBtn.addEventListener("click", confirmSubmitQuiz);
    finishBtnMid.addEventListener("click", confirmSubmitQuiz);

    // Results Actions
    restartBtn.addEventListener("click", () => {
        startQuiz();
    });
    goHomeBtn.addEventListener("click", () => {
        switchScreen(lobbyScreen);
    });

    // Review Filters
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderReviewList(btn.dataset.filter);
        });
    });

    // Instant Explanation Toggle
    showExplainBtnInstant.addEventListener("click", () => {
        if (explanationBoxInstant.style.display === "none") {
            explanationBoxInstant.style.display = "block";
            showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-chevron-up"></i> Ẩn giải thích`;
        } else {
            explanationBoxInstant.style.display = "none";
            showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-info"></i> Xem giải thích đáp án`;
        }
    });

    // Modal Close
    closeModalBtn.addEventListener("click", () => {
        reportModal.style.display = "none";
    });
    window.addEventListener("click", (e) => {
        if (e.target === reportModal) {
            reportModal.style.display = "none";
        }
    });
    submitReportBtn.addEventListener("click", submitErrorReport);
}

// Utility to switch screens
function switchScreen(targetScreen) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
        s.style.display = "none";
    });
    targetScreen.style.display = "block";
    // Trigger reflow for transition
    targetScreen.offsetHeight;
    targetScreen.classList.add("active");
}

/* ==========================================================================
   QUIZ CONTROLLER METHODS
   ========================================================================== */
function startQuiz() {
    // 1. Gather configs
    const countVal = questionCountSelect.value;
    questionCountLimit = countVal === "all" ? Infinity : parseInt(countVal, 10);
    quizMode = testModeSelect.value;

    // 2. Filter questions based on category
    let pool = [];
    if (selectedCategory === "all") {
        pool = [...questions];
    } else {
        pool = questions.filter(q => q.category === selectedCategory);
    }

    if (pool.length === 0) {
        alert("Hiện không có câu hỏi nào trong chuyên đề này!");
        return;
    }

    // 3. Shuffle pool and slice
    shuffleArray(pool);
    activeQuestions = pool.slice(0, Math.min(pool.length, questionCountLimit));

    // 4. Reset state variables
    currentIndex = 0;
    userAnswers = {};
    flaggedQuestions.clear();
    elapsedTime = 0;

    // 5. Build Quiz UI
    renderNavigationGrid();
    loadQuestion(0);
    switchScreen(quizScreen);

    // 6. Start Timer
    if (timerInterval) clearInterval(timerInterval);
    startTime = Date.now();
    updateTimerUI();
    timerInterval = setInterval(() => {
        elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        updateTimerUI();
    }, 1000);
}

function updateTimerUI() {
    const mins = Math.floor(elapsedTime / 60).toString().padStart(2, "0");
    const secs = (elapsedTime % 60).toString().padStart(2, "0");
    timerText.textContent = `${mins}:${secs}`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/* ==========================================================================
   QUESTION RENDERER
   ========================================================================== */
function loadQuestion(index) {
    currentIndex = index;
    const q = activeQuestions[index];

    // Progress Bar
    const totalQ = activeQuestions.length;
    progressText.textContent = `Câu hỏi ${index + 1} / ${totalQ}`;
    progressFill.style.width = `${((index + 1) / totalQ) * 100}%`;

    // Question Details
    questionBadge.textContent = `Câu ${q.id.split("_")[1] || index + 1}`;
    questionTextEl.textContent = q.question;

    // Set Flag Button state
    if (flaggedQuestions.has(q.id)) {
        flagBtn.classList.add("flagged");
        flagBtn.querySelector("i").className = "fa-solid fa-bookmark";
    } else {
        flagBtn.classList.remove("flagged");
        flagBtn.querySelector("i").className = "fa-regular fa-bookmark";
    }

    // Render Options
    optionsContainer.innerHTML = "";
    const selectedAns = userAnswers[q.id];

    Object.keys(q.options).forEach(key => {
        const optionText = q.options[key];
        
        const optionItem = document.createElement("div");
        optionItem.className = "option-item";
        if (selectedAns === key) {
            optionItem.classList.add("selected");
        }
        optionItem.dataset.option = key;

        optionItem.innerHTML = `
            <div class="option-marker">${key}</div>
            <div class="option-text">${escapeHtml(optionText)}</div>
        `;

        optionItem.addEventListener("click", () => handleSelectOption(key));
        optionsContainer.appendChild(optionItem);
    });

    // In Practice Mode: Check if already answered, and show explanation/feedback
    if (quizMode === "practice") {
        if (selectedAns) {
            showPracticeFeedback(q, selectedAns);
        } else {
            instantFeedbackEl.style.display = "none";
            explanationBoxInstant.style.display = "none";
        }
    } else {
        instantFeedbackEl.style.display = "none";
    }

    // Handle Navigation Buttons
    prevBtn.disabled = index === 0;
    
    if (index === totalQ - 1) {
        nextBtn.style.display = "none";
        finishBtnMid.style.display = "inline-flex";
    } else {
        nextBtn.style.display = "inline-flex";
        finishBtnMid.style.display = "none";
    }

    // Update active class on navigation grid
    document.querySelectorAll(".question-nav-btn").forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("current");
        } else {
            btn.classList.remove("current");
        }
    });
}

function handleSelectOption(optionKey) {
    const q = activeQuestions[currentIndex];
    
    // In practice mode, lock the answer once submitted
    if (quizMode === "practice" && userAnswers[q.id]) {
        return;
    }

    // Record answer
    userAnswers[q.id] = optionKey;

    // Update choices UI
    document.querySelectorAll(".option-item").forEach(item => {
        if (item.dataset.option === optionKey) {
            item.classList.add("selected");
        } else {
            item.classList.remove("selected");
        }
    });

    // Mark as answered in sidebar nav
    const navBtn = document.getElementById(`nav-btn-${currentIndex}`);
    if (navBtn) {
        navBtn.classList.add("answered");
    }

    // Handle Practice Mode Feedback
    if (quizMode === "practice") {
        showPracticeFeedback(q, optionKey);
    }
}

function showPracticeFeedback(q, selectedAns) {
    const isCorrect = selectedAns === q.correctAnswer;
    instantFeedbackEl.style.display = "block";
    
    if (isCorrect) {
        feedbackStatusEl.className = "feedback-status correct";
        feedbackStatusEl.innerHTML = `<i class="fa-solid fa-circle-check"></i> Bạn đã trả lời đúng!`;
    } else {
        feedbackStatusEl.className = "feedback-status incorrect";
        feedbackStatusEl.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Câu trả lời chưa chính xác.`;
    }

    // Fill Explanation Data
    correctAnsHeaderInstant.textContent = `Đáp án đúng là: ${q.correctAnswer}`;
    explanationTextInstant.innerHTML = q.explanation;
    explanationBoxInstant.style.display = "none"; // Hide by default, let user toggle
    showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-info"></i> Xem giải thích đáp án`;

    // Hook report error button
    const reportBtn = instantFeedbackEl.querySelector(".report-err-btn");
    reportBtn.onclick = () => {
        openReportModal(q.id);
    };
}

function toggleFlagQuestion() {
    const q = activeQuestions[currentIndex];
    const navBtn = document.getElementById(`nav-btn-${currentIndex}`);
    
    if (flaggedQuestions.has(q.id)) {
        flaggedQuestions.delete(q.id);
        flagBtn.classList.remove("flagged");
        flagBtn.querySelector("i").className = "fa-regular fa-bookmark";
        if (navBtn) navBtn.classList.remove("flagged");
    } else {
        flaggedQuestions.add(q.id);
        flagBtn.classList.add("flagged");
        flagBtn.querySelector("i").className = "fa-solid fa-bookmark";
        if (navBtn) navBtn.classList.add("flagged");
    }
}

function goToPrevQuestion() {
    if (currentIndex > 0) {
        loadQuestion(currentIndex - 1);
    }
}

function goToNextQuestion() {
    if (currentIndex < activeQuestions.length - 1) {
        loadQuestion(currentIndex + 1);
    }
}

/* ==========================================================================
   SIDEBAR NAVIGATION GRID
   ========================================================================== */
function renderNavigationGrid() {
    navGrid.innerHTML = "";
    activeQuestions.forEach((q, idx) => {
        const btn = document.createElement("button");
        btn.id = `nav-btn-${idx}`;
        btn.className = "question-nav-btn";
        btn.textContent = idx + 1;
        
        btn.addEventListener("click", () => {
            loadQuestion(idx);
        });
        
        navGrid.appendChild(btn);
    });
}

/* ==========================================================================
   QUIZ SUBMIT & GRADING
   ========================================================================== */
function confirmSubmitQuiz() {
    const answeredCount = Object.keys(userAnswers).length;
    const totalCount = activeQuestions.length;
    
    let msg = `Bạn chắc chắn muốn nộp bài thi chứ?`;
    if (answeredCount < totalCount) {
        msg = `Bạn mới làm được ${answeredCount} / ${totalCount} câu hỏi. Bạn vẫn muốn nộp bài chứ?`;
    }

    if (confirm(msg)) {
        submitQuiz();
    }
}

function submitQuiz() {
    if (timerInterval) clearInterval(timerInterval);

    // Calculate score
    let correctCount = 0;
    activeQuestions.forEach(q => {
        if (userAnswers[q.id] === q.correctAnswer) {
            correctCount++;
        }
    });

    const totalCount = activeQuestions.length;
    const incorrectCount = totalCount - correctCount;
    const scorePercent = Math.round((correctCount / totalCount) * 100);

    // Update Result UI
    scorePercentEl.textContent = `${scorePercent}%`;
    scoreFractionEl.textContent = `${correctCount} / ${totalCount} câu đúng`;
    
    // Format Time Taken
    const mins = Math.floor(elapsedTime / 60);
    const secs = elapsedTime % 60;
    statTimeEl.textContent = `${mins} phút ${secs} giây`;
    statCorrectEl.textContent = correctCount;
    statIncorrectEl.textContent = incorrectCount;
    
    let categoryName = selectedCategory;
    if (selectedCategory === "all") categoryName = "Đề thi tổng hợp";
    statCategoryEl.textContent = categoryName;

    // Render detailed review
    renderReviewList("all");

    // Switch screen to Results
    switchScreen(resultScreen);
}

/* ==========================================================================
   DETAILED REVIEW LIST RENDERER
   ========================================================================== */
function renderReviewList(filter) {
    reviewListContainer.innerHTML = "";

    activeQuestions.forEach((q, idx) => {
        const userAns = userAnswers[q.id];
        const isCorrect = userAns === q.correctAnswer;

        // Apply filters
        if (filter === "correct" && !isCorrect) return;
        if (filter === "incorrect" && isCorrect) return;

        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";

        let statusHtml = "";
        if (userAns === undefined) {
            statusHtml = `<span class="result-status-tag incorrect"><i class="fa-solid fa-triangle-exclamation"></i> Chưa trả lời</span>`;
        } else if (isCorrect) {
            statusHtml = `<span class="result-status-tag correct"><i class="fa-solid fa-circle-check"></i> Trả lời đúng</span>`;
        } else {
            statusHtml = `<span class="result-status-tag incorrect"><i class="fa-solid fa-circle-xmark"></i> Trả lời sai</span>`;
        }

        let optionsHtml = "";
        Object.keys(q.options).forEach(key => {
            const optText = q.options[key];
            let itemClass = "review-option-item";
            
            if (key === q.correctAnswer) {
                itemClass += " correct"; // Mark correct choice in green
            } else if (userAns === key && !isCorrect) {
                itemClass += " wrong-choice"; // Mark user wrong choice in red
            }

            optionsHtml += `
                <div class="${itemClass}">
                    <div class="review-option-marker">${key}</div>
                    <div>${escapeHtml(optText)}</div>
                </div>
            `;
        });

        reviewItem.innerHTML = `
            <div class="review-q-header">
                <span class="review-q-badge">Câu ${idx + 1} (${q.category})</span>
                ${statusHtml}
            </div>
            <div class="review-q-text">${escapeHtml(q.question)}</div>
            <div class="review-options">
                ${optionsHtml}
            </div>
            <button class="btn btn-secondary review-explain-toggle-btn" id="toggle-explain-btn-${q.id}">
                <i class="fa-solid fa-circle-info"></i> Xem giải thích đáp án
            </button>
            <div class="review-explanation-content" id="review-explain-box-${q.id}" style="display: none;">
                <h4>Đáp án đúng: ${q.correctAnswer}</h4>
                <strong>Lí giải chi tiết:</strong>
                <p>${q.explanation}</p>
                <button class="btn btn-danger btn-sm" id="report-err-btn-${q.id}">
                    <i class="fa-solid fa-triangle-exclamation"></i> Báo lỗi câu hỏi
                </button>
            </div>
        `;

        reviewListContainer.appendChild(reviewItem);

        // Bind toggle explanation event
        const toggleBtn = reviewItem.querySelector(`#toggle-explain-btn-${q.id}`);
        const explainBox = reviewItem.querySelector(`#review-explain-box-${q.id}`);
        
        toggleBtn.addEventListener("click", () => {
            if (explainBox.style.display === "none") {
                explainBox.style.display = "block";
                toggleBtn.innerHTML = `<i class="fa-solid fa-circle-chevron-up"></i> Ẩn giải thích`;
            } else {
                explainBox.style.display = "none";
                toggleBtn.innerHTML = `<i class="fa-solid fa-circle-info"></i> Xem giải thích đáp án`;
            }
        });

        // Bind report error event
        const reportBtn = reviewItem.querySelector(`#report-err-btn-${q.id}`);
        reportBtn.addEventListener("click", () => {
            openReportModal(q.id);
        });
    });

    if (reviewListContainer.children.length === 0) {
        reviewListContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 20px;">Không tìm thấy câu hỏi nào thỏa mãn bộ lọc!</p>`;
    }
}

/* ==========================================================================
   REPORT ERROR SYSTEM (SIMULATED)
   ========================================================================== */
function openReportModal(qId) {
    reportingQuestionId = qId;
    reportQIdEl.textContent = `Mã câu hỏi: ${qId}`;
    reportTypeSelect.selectedIndex = 0;
    reportContentTextarea.value = "";
    reportModal.style.display = "block";
}

function submitErrorReport() {
    const errorType = reportTypeSelect.value;
    const content = reportContentTextarea.value.trim();

    if (!content) {
        alert("Vui lòng nhập mô tả chi tiết lỗi!");
        return;
    }

    // Simulated API request
    console.log(`[Error Report Submitted] Question ID: ${reportingQuestionId}, Type: ${errorType}, Content: ${content}`);
    
    // Show user success toast
    alert(`Cảm ơn bạn đã phản hồi lỗi câu hỏi ${reportingQuestionId}! Ban quản trị sẽ nhanh chóng kiểm tra và khắc phục lỗi này.`);
    
    // Close modal
    reportModal.style.display = "none";
}

/* ==========================================================================
   HELPER UTILITIES
   ========================================================================== */
function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
