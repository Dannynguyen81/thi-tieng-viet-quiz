/* ==========================================================================
   QUIZ LOGIC ENGINE - VIETNAMESE QUIZ APP
   ========================================================================== */

// App State
let activeQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // { questionId: selectedOptionOrText }
let flaggedQuestions = new Set();
let timerInterval = null;
let startTime = null;
let elapsedTime = 0; // in seconds
let quizMode = "exam"; // "exam" or "practice"
let selectedCategory = "all";
let questionCountLimit = 20;
let reportingQuestionId = null;

// Essay Mode State
let activeEssayExam = null;
let essayUserAnswers = {}; // { questionId: typedText }
let essayScores = {}; // { questionId: scoreValue }
let essayTimerInterval = null;
let essayElapsedTime = 0;
let essayStartTime = null;

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

// Essay selectors
const tabQuizMode = document.getElementById("tab-quiz-mode");
const tabEssayMode = document.getElementById("tab-essay-mode");
const quizLobbyConfig = document.getElementById("quiz-lobby-config");
const essayLobbyConfig = document.getElementById("essay-lobby-config");
const essayExamList = document.getElementById("essay-exam-list");

const essayQuizScreen = document.getElementById("essay-quiz-screen");
const essayExamTitle = document.getElementById("essay-exam-title");
const essayExamSource = document.getElementById("essay-exam-source");
const essayTimerText = document.getElementById("essay-timer-text");
const essaySubmitBtn = document.getElementById("essay-submit-btn");
const essayExitBtn = document.getElementById("essay-exit-btn");

const essayResultScreen = document.getElementById("essay-result-screen");
const essayTotalScore = document.getElementById("essay-total-score");
const essayTeacherComment = document.getElementById("essay-teacher-comment");
const essayRestartBtn = document.getElementById("essay-restart-btn");
const essayGoHomeBtn = document.getElementById("essay-go-home-btn");

/* ==========================================================================
   INITIALIZATION & THEME MANAGER
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    registerEvents();
});

function initTheme() {
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
        
        categorySelector.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
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
            showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-chevron-up"></i> Ẩn lời giải mẫu`;
        } else {
            explanationBoxInstant.style.display = "none";
            showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-info"></i> Xem lời giải mẫu & lí giải`;
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

    // Essay Mode Event listeners
    if (tabQuizMode) {
        tabQuizMode.addEventListener("click", () => switchLobbyTab("quiz"));
    }
    if (tabEssayMode) {
        tabEssayMode.addEventListener("click", () => switchLobbyTab("essay"));
    }
    if (essaySubmitBtn) {
        essaySubmitBtn.addEventListener("click", confirmSubmitEssay);
    }
    if (essayRestartBtn) {
        essayRestartBtn.addEventListener("click", restartEssayExam);
    }
    if (essayExitBtn) {
        essayExitBtn.addEventListener("click", () => {
            if (confirm("Em có chắc chắn muốn thoát khỏi phòng thi không? Toàn bộ bài làm hiện tại sẽ bị xóa.")) {
                if (essayTimerInterval) clearInterval(essayTimerInterval);
                switchLobbyTab("essay");
                switchScreen(lobbyScreen);
            }
        });
    }
    if (essayGoHomeBtn) {
        essayGoHomeBtn.addEventListener("click", () => {
            if (essayTimerInterval) clearInterval(essayTimerInterval);
            switchLobbyTab("essay");
            switchScreen(lobbyScreen);
        });
    }
}

function switchScreen(targetScreen) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
        s.style.display = "none";
    });
    targetScreen.style.display = "block";
    targetScreen.offsetHeight;
    targetScreen.classList.add("active");
}

/* ==========================================================================
   QUIZ CONTROLLER METHODS
   ========================================================================== */
function startQuiz() {
    const countVal = questionCountSelect.value;
    questionCountLimit = countVal === "all" ? Infinity : parseInt(countVal, 10);
    quizMode = testModeSelect.value;

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

    shuffleArray(pool);
    activeQuestions = pool.slice(0, Math.min(pool.length, questionCountLimit));

    currentIndex = 0;
    userAnswers = {};
    flaggedQuestions.clear();
    elapsedTime = 0;

    renderNavigationGrid();
    loadQuestion(0);
    switchScreen(quizScreen);

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
    const type = q.type || "multiple_choice";

    // Progress Bar
    const totalQ = activeQuestions.length;
    progressText.textContent = `Câu hỏi ${index + 1} / ${totalQ}`;
    progressFill.style.width = `${((index + 1) / totalQ) * 100}%`;

    // Question Details
    questionBadge.textContent = `Câu ${q.id.split("_")[1] || index + 1}`;
    questionTextEl.innerHTML = escapeHtml(q.question).replace(/\n/g, "<br>");

    // Set Flag Button state
    if (flaggedQuestions.has(q.id)) {
        flagBtn.classList.add("flagged");
        flagBtn.querySelector("i").className = "fa-solid fa-bookmark";
    } else {
        flagBtn.classList.remove("flagged");
        flagBtn.querySelector("i").className = "fa-regular fa-bookmark";
    }

    // Render Options Container
    optionsContainer.innerHTML = "";
    const selectedAns = userAnswers[q.id];

    if (type === "essay") {
        // Essay Layout (Textarea)
        const userText = selectedAns || "";
        optionsContainer.innerHTML = `
            <div class="essay-container" style="width: 100%;">
                <textarea id="essay-response" rows="8" placeholder="Nhập câu trả lời tự luận chi tiết của bạn vào đây..." style="width: 100%; font-family: inherit; font-size: 1rem; padding: 15px; border-radius: var(--border-radius-md); border: 1.5px solid var(--card-border); background: var(--card-bg); color: var(--text-main); outline: none; transition: border-color var(--transition-speed);">${escapeHtml(userText)}</textarea>
            </div>
        `;
        
        const textarea = document.getElementById("essay-response");
        
        // Save automatically on typing
        textarea.addEventListener("input", () => {
            const val = textarea.value;
            userAnswers[q.id] = val;
            const navBtn = document.getElementById(`nav-btn-${currentIndex}`);
            if (navBtn) {
                if (val.trim() !== "") {
                    navBtn.classList.add("answered");
                } else {
                    navBtn.classList.remove("answered");
                }
            }
            if (quizMode === "practice") {
                showPracticeFeedbackEssay(q, val.trim());
            }
        });
    } else {
        // Multiple Choice Layout
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
    }

    // Handle Practice Mode Feedback
    if (quizMode === "practice") {
        if (selectedAns && selectedAns.trim() !== "") {
            if (type === "essay") {
                showPracticeFeedbackEssay(q, selectedAns.trim());
            } else {
                showPracticeFeedback(q, selectedAns);
            }
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
    
    if (quizMode === "practice" && userAnswers[q.id]) {
        return;
    }

    userAnswers[q.id] = optionKey;

    document.querySelectorAll(".option-item").forEach(item => {
        if (item.dataset.option === optionKey) {
            item.classList.add("selected");
        } else {
            item.classList.remove("selected");
        }
    });

    const navBtn = document.getElementById(`nav-btn-${currentIndex}`);
    if (navBtn) {
        navBtn.classList.add("answered");
    }

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

    correctAnsHeaderInstant.textContent = `Đáp án đúng là: ${q.correctAnswer}`;
    explanationTextInstant.innerHTML = q.explanation;
    explanationBoxInstant.style.display = "none"; 
    showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-info"></i> Xem giải thích đáp án`;

    const reportBtn = instantFeedbackEl.querySelector(".report-err-btn");
    reportBtn.onclick = () => openReportModal(q.id);
}

function showPracticeFeedbackEssay(q, val) {
    if (!val || val.trim() === "") {
        instantFeedbackEl.style.display = "none";
        return;
    }
    instantFeedbackEl.style.display = "block";
    
    feedbackStatusEl.className = "feedback-status correct";
    feedbackStatusEl.innerHTML = `<i class="fa-solid fa-pen-fancy"></i> Đã ghi nhận bài làm tự luận của bạn.`;

    correctAnsHeaderInstant.textContent = `Lời giải mẫu & lí giải gợi ý:`;
    explanationTextInstant.innerHTML = q.explanation;
    explanationBoxInstant.style.display = "none"; 
    showExplainBtnInstant.innerHTML = `<i class="fa-solid fa-circle-info"></i> Xem lời giải mẫu & lí giải`;

    const reportBtn = instantFeedbackEl.querySelector(".report-err-btn");
    reportBtn.onclick = () => openReportModal(q.id);
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
    const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k] && userAnswers[k].trim() !== "").length;
    const totalCount = activeQuestions.length;
    
    let msg = `Bạn chắc chắn muốn nộp bài thi chứ?`;
    if (answeredCount < totalCount) {
        msg = `Bạn mới làm được ${answeredCount} / ${totalCount} câu. Bạn vẫn muốn nộp bài chứ?`;
    }

    if (confirm(msg)) {
        submitQuiz();
    }
}

function submitQuiz() {
    if (timerInterval) clearInterval(timerInterval);

    let correctMcCount = 0;
    let totalMcCount = 0;
    let answeredEssayCount = 0;
    let totalEssayCount = 0;

    activeQuestions.forEach(q => {
        const type = q.type || "multiple_choice";
        const userAns = userAnswers[q.id];

        if (type === "essay") {
            totalEssayCount++;
            if (userAns && userAns.trim() !== "") {
                answeredEssayCount++;
            }
        } else {
            totalMcCount++;
            if (userAns === q.correctAnswer) {
                correctMcCount++;
            }
        }
    });

    const incorrectMcCount = totalMcCount - correctMcCount;
    
    // Calculate percentage based on MC questions if present
    let scorePercent = 0;
    if (totalMcCount > 0) {
        scorePercent = Math.round((correctMcCount / totalMcCount) * 100);
    } else {
        // If essay only, show completion percentage
        scorePercent = totalEssayCount > 0 ? Math.round((answeredEssayCount / totalEssayCount) * 100) : 100;
    }

    // Update Result UI
    scorePercentEl.textContent = `${scorePercent}%`;
    
    if (totalMcCount > 0 && totalEssayCount > 0) {
        scoreFractionEl.textContent = `${correctMcCount}/${totalMcCount} trắc nghiệm | ${answeredEssayCount}/${totalEssayCount} tự luận`;
    } else if (totalMcCount > 0) {
        scoreFractionEl.textContent = `${correctMcCount} / ${totalMcCount} câu trắc nghiệm đúng`;
    } else {
        scoreFractionEl.textContent = `Đã hoàn thành ${answeredEssayCount} / ${totalEssayCount} câu tự luận`;
    }
    
    const mins = Math.floor(elapsedTime / 60);
    const secs = elapsedTime % 60;
    statTimeEl.textContent = `${mins} phút ${secs} giây`;
    statCorrectEl.textContent = correctMcCount;
    statIncorrectEl.textContent = incorrectMcCount;
    
    let categoryName = selectedCategory;
    if (selectedCategory === "all") categoryName = "Đề thi tổng hợp";
    statCategoryEl.textContent = categoryName;

    renderReviewList("all");
    switchScreen(resultScreen);
}

/* ==========================================================================
   DETAILED REVIEW LIST RENDERER
   ========================================================================== */
function renderReviewList(filter) {
    reviewListContainer.innerHTML = "";

    activeQuestions.forEach((q, idx) => {
        const userAns = userAnswers[q.id];
        const type = q.type || "multiple_choice";
        const isCorrect = userAns === q.correctAnswer;

        // Apply filters (for essay questions, they bypass correct/incorrect filters unless they are unanswered)
        if (type !== "essay") {
            if (filter === "correct" && !isCorrect) return;
            if (filter === "incorrect" && isCorrect) return;
        } else {
            // Essay questions filter
            const hasAnswer = userAns && userAns.trim() !== "";
            if (filter === "correct" && !hasAnswer) return;
            // Incorrect filter filters out answered essays, keeping only unanswered ones
            if (filter === "incorrect" && hasAnswer) return;
        }

        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";

        let statusHtml = "";
        let contentHtml = "";

        if (type === "essay") {
            // Essay Review Template
            const hasAnswer = userAns && userAns.trim() !== "";
            if (!hasAnswer) {
                statusHtml = `<span class="result-status-tag incorrect"><i class="fa-solid fa-triangle-exclamation"></i> Chưa làm tự luận</span>`;
            } else {
                statusHtml = `<span class="result-status-tag correct" style="color: var(--primary);"><i class="fa-solid fa-file-pen"></i> Tự luận (Tự đối chiếu)</span>`;
            }

            contentHtml = `
                <div class="review-options" style="grid-template-columns: 1fr; margin-bottom: 12px;">
                    <div class="review-option-item" style="background: rgba(0, 0, 0, 0.03); border-color: var(--card-border); padding: 15px; display: block;">
                        <strong style="display: block; font-size: 0.85rem; color: var(--text-muted); margin-bottom: 5px;">Bài làm của bạn:</strong>
                        <div style="white-space: pre-wrap; font-size: 0.95rem; line-height: 1.5; font-style: italic;">${userAns ? escapeHtml(userAns) : "(Để trống)"}</div>
                    </div>
                </div>
                <button class="btn btn-secondary review-explain-toggle-btn" id="toggle-explain-btn-${q.id}">
                    <i class="fa-solid fa-circle-info"></i> Xem bài mẫu & lời giải
                </button>
                <div class="review-explanation-content" id="review-explain-box-${q.id}" style="display: none;">
                    <h4 style="color: var(--primary);">Lời giải gợi ý & Bài mẫu:</h4>
                    <p style="white-space: pre-line; line-height: 1.6; font-size: 0.95rem;">${q.explanation}</p>
                    <button class="btn btn-danger btn-sm" id="report-err-btn-${q.id}">
                        <i class="fa-solid fa-triangle-exclamation"></i> Báo lỗi câu hỏi
                    </button>
                </div>
            `;
        } else {
            // Multiple Choice Review Template
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
                    itemClass += " correct"; 
                } else if (userAns === key && !isCorrect) {
                    itemClass += " wrong-choice"; 
                }

                optionsHtml += `
                    <div class="${itemClass}">
                        <div class="review-option-marker">${key}</div>
                        <div>${escapeHtml(optText)}</div>
                    </div>
                `;
            });

            contentHtml = `
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
        }

        reviewItem.innerHTML = `
            <div class="review-q-header">
                <span class="review-q-badge">Câu ${idx + 1} (${q.category})</span>
                ${statusHtml}
            </div>
            <div class="review-q-text">${escapeHtml(q.question).replace(/\n/g, "<br>")}</div>
            ${contentHtml}
        `;

        reviewListContainer.appendChild(reviewItem);

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

    console.log(`[Error Report Submitted] Question ID: ${reportingQuestionId}, Type: ${errorType}, Content: ${content}`);
    alert(`Cảm ơn bạn đã phản hồi lỗi câu hỏi ${reportingQuestionId}! Ban quản trị sẽ nhanh chóng kiểm tra và khắc phục lỗi này.`);
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

/* ==========================================================================
   ESSAY / READING & WRITING LOGIC ENGINE
   ========================================================================== */

function switchLobbyTab(tab) {
    if (tab === "quiz") {
        tabQuizMode.classList.add("active");
        tabEssayMode.classList.remove("active");
        quizLobbyConfig.classList.add("active");
        quizLobbyConfig.style.display = "block";
        essayLobbyConfig.classList.remove("active");
        essayLobbyConfig.style.display = "none";
    } else {
        tabQuizMode.classList.remove("active");
        tabEssayMode.classList.add("active");
        quizLobbyConfig.classList.remove("active");
        quizLobbyConfig.style.display = "none";
        essayLobbyConfig.classList.add("active");
        essayLobbyConfig.style.display = "block";
        renderEssayExamsList();
    }
}

function renderEssayExamsList() {
    if (!essayExamList) return;
    essayExamList.innerHTML = "";
    
    readingWritingExams.forEach((exam) => {
        const completedKey = `completed_essay_${exam.id}`;
        const scoreKey = `score_essay_${exam.id}`;
        const isCompleted = localStorage.getItem(completedKey) === "true";
        const savedScore = localStorage.getItem(scoreKey);

        const card = document.createElement("div");
        card.className = `essay-card${isCompleted ? ' completed' : ''}`;
        card.innerHTML = `
            <div>
                <h3>${escapeHtml(exam.title)}</h3>
                <span class="source-badge">${escapeHtml(exam.source)}</span>
            </div>
            <div class="essay-card-footer">
                ${isCompleted && savedScore ? `<span class="score-badge"><i class="fa-solid fa-star"></i> ${savedScore}/15.0đ</span>` : '<span></span>'}
                <button class="btn btn-primary btn-sm btn-start-essay" data-id="${exam.id}">
                    <i class="fa-solid fa-pen"></i> Làm bài
                </button>
            </div>
        `;
        
        card.querySelector(".btn-start-essay").addEventListener("click", (e) => {
            e.stopPropagation();
            startEssayExam(exam.id);
        });
        
        card.addEventListener("click", () => {
            startEssayExam(exam.id);
        });

        essayExamList.appendChild(card);
    });
}

function isPoemExam(examId) {
    const poemIds = ["RW_EX1", "RW_EX3", "RW_EX4", "RW_EX5", "RW_EX7", "RW_EX9", "RW_EX10"];
    return poemIds.includes(examId);
}

function formatPassageHtml(exam) {
    if (isPoemExam(exam.id)) {
        const titleMatch = exam.passage.match(/<strong>(.*?)<\/strong>/);
        const authorMatch = exam.passage.match(/<em>(.*?)<\/em>/);
        const title = titleMatch ? titleMatch[1] : exam.title;
        const author = authorMatch ? authorMatch[1] : "";
        
        let cleanText = exam.passage.replace(/<strong>.*?<\/strong>/, "").replace(/<em>.*?<\/em>/, "").trim();
        const rawLines = cleanText.split("\n");
        
        let linesHtml = "";
        rawLines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed === "") {
                linesHtml += `<div class="ln">&nbsp;</div>`;
            } else {
                linesHtml += `<div class="ln">${trimmed}</div>`;
            }
        });
        
        return `
            <div class="essay-poem-box">
                <div class="tt">${title}</div>
                <div class="by">${author ? `(Tác giả: ${author})` : ""}</div>
                ${linesHtml}
            </div>
        `;
    } else {
        const titleMatch = exam.passage.match(/<strong>(.*?)<\/strong>/);
        let cleanText = exam.passage;
        if (titleMatch) {
            cleanText = exam.passage.replace(/<strong>.*?<\/strong>/, "").trim();
        }
        const title = titleMatch ? titleMatch[1] : exam.title;
        
        return `
            <div class="essay-passage-box">
                <strong style="display:block; text-align:center; font-size:1.2rem; margin-bottom:12px; font-family:'Outfit', sans-serif;">${title}</strong>
                <div>${cleanText.replace(/\n/g, "<br>")}</div>
            </div>
        `;
    }
}

function startEssayExam(examId) {
    const exam = readingWritingExams.find(e => e.id === examId);
    if (!exam) return;
    
    activeEssayExam = exam;
    essayUserAnswers = {};
    essayScores = {};
    essayElapsedTime = 0;
    
    // Calculate docHieu and lamVan scores
    let docHieuScore = 0;
    let lamVanScore = 0;
    exam.questions.forEach((q, idx) => {
        if (idx === exam.questions.length - 1) {
            lamVanScore += q.maxScore;
        } else {
            docHieuScore += q.maxScore;
        }
    });

    const docHieuStr = docHieuScore.toFixed(1).replace(".", ",");
    const lamVanStr = lamVanScore.toFixed(1).replace(".", ",");
    
    // Set titles
    essayExamTitle.textContent = exam.title;
    essayExamSource.textContent = `Đọc hiểu ${docHieuStr}đ · Làm văn ${lamVanStr}đ · ${exam.source}`;
    
    // Build vertical flow in container
    const contentContainer = document.getElementById("essay-secbody-content");
    contentContainer.innerHTML = "";
    
    // 1. Subheading Đọc hiểu
    const sub1 = document.createElement("div");
    sub1.className = "essay-sub";
    sub1.innerHTML = `1. ĐỌC HIỂU (${docHieuStr}đ)`;
    contentContainer.appendChild(sub1);
    
    // 2. Passage/Poem box
    const passageBox = document.createElement("div");
    passageBox.innerHTML = formatPassageHtml(exam);
    contentContainer.appendChild(passageBox);
    
    // 3. Questions
    exam.questions.forEach((q, idx) => {
        if (idx === exam.questions.length - 1) {
            // Subheading Làm văn
            const sub2 = document.createElement("div");
            sub2.className = "essay-sub";
            sub2.innerHTML = `2. LÀM VĂN (${lamVanStr}đ)`;
            contentContainer.appendChild(sub2);
            
            // Writing wrapper
            const qWrap = document.createElement("div");
            qWrap.className = "essay-q-wrapper";
            qWrap.innerHTML = `
                <div class="essay-passage-box">${q.text}</div>
                <div class="essay-q-title">Bài viết của em:</div>
                <textarea class="essay-textarea-f" id="essay-ans-${q.id}" placeholder="Nhập bài viết tự luận của em tại đây..." rows="12"></textarea>
            `;
            contentContainer.appendChild(qWrap);
        } else {
            // Reading question wrapper
            const qWrap = document.createElement("div");
            qWrap.className = "essay-q-wrapper";
            
            const qLabel = q.label || `Câu ${idx + 1}`;
            const maxScoreStr = q.maxScore.toFixed(1).replace(".", ",");
            
            qWrap.innerHTML = `
                <div class="essay-q-title">${qLabel}. (${maxScoreStr}đ) ${q.text}</div>
                <textarea class="essay-textarea-f" id="essay-ans-${q.id}" placeholder="Nhập câu trả lời của em tại đây..." rows="4"></textarea>
            `;
            contentContainer.appendChild(qWrap);
        }
    });
    
    // Start timer
    if (essayTimerInterval) clearInterval(essayTimerInterval);
    essayStartTime = Date.now();
    updateEssayTimerUI();
    essayTimerInterval = setInterval(() => {
        essayElapsedTime = Math.floor((Date.now() - essayStartTime) / 1000);
        updateEssayTimerUI();
    }, 1000);
    
    switchScreen(essayQuizScreen);
}

function updateEssayTimerUI() {
    const mins = Math.floor(essayElapsedTime / 60).toString().padStart(2, "0");
    const secs = (essayElapsedTime % 60).toString().padStart(2, "0");
    essayTimerText.textContent = `${mins}:${secs}`;
}

function confirmSubmitEssay() {
    if (!confirm("Em có chắc chắn muốn nộp bài thi Đọc hiểu và Làm văn này không?")) return;
    
    if (essayTimerInterval) clearInterval(essayTimerInterval);
    
    // Collect answers
    activeEssayExam.questions.forEach(q => {
        const txtarea = document.getElementById(`essay-ans-${q.id}`);
        essayUserAnswers[q.id] = txtarea ? txtarea.value.trim() : "";
        essayScores[q.id] = 0; // Initialize scores to 0
    });
    
    showEssayResults();
}

function showEssayResults() {
    renderEssayGradingLayout();
    updateEssayScoreDisplay();
    switchScreen(essayResultScreen);
}

function renderEssayGradingLayout() {
    const layoutContainer = document.getElementById("essay-grading-layout-content");
    layoutContainer.innerHTML = "";
    
    // 1. Passage/Poem Box at the top
    const passageBox = document.createElement("div");
    passageBox.innerHTML = formatPassageHtml(activeEssayExam);
    layoutContainer.appendChild(passageBox);
    
    // 2. Grading container for all questions
    const gradingContainer = document.createElement("div");
    gradingContainer.className = "essay-grading-panel";
    
    activeEssayExam.questions.forEach((q, idx) => {
        const gradeCard = document.createElement("div");
        gradeCard.className = "essay-grade-card";
        
        const studentAns = essayUserAnswers[q.id] || "(Em không trả lời câu hỏi này)";
        const maxScoreStr = q.maxScore.toFixed(1).replace(".", ",");
        
        gradeCard.innerHTML = `
            <div class="essay-q-card-header">
                <span class="essay-q-badge">${q.label || `Câu ${idx + 1}`}</span>
                <span class="essay-q-score">Điểm tối đa: ${maxScoreStr}đ</span>
            </div>
            <div class="essay-q-text" style="margin-bottom:15px;">${q.text}</div>
            
            <div class="compare-grid">
                <div class="compare-box student">
                    <h5><i class="fa-solid fa-user"></i> Bài làm của em:</h5>
                    <div>${escapeHtml(studentAns).replace(/\n/g, '<br>')}</div>
                </div>
                <div class="compare-box teacher">
                    <h5><i class="fa-solid fa-user-tie"></i> Đáp án gợi ý (Giáo viên):</h5>
                    <div>${q.modelAnswer.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="compare-box rubric">
                    <h5><i class="fa-solid fa-list-check"></i> Hướng dẫn chấm điểm:</h5>
                    <div>${q.rubric.replace(/\n/g, '<br>')}</div>
                </div>
            </div>
            
            <div class="grading-slider-container">
                <span class="slider-label"><i class="fa-solid fa-star-half-stroke"></i> Cho điểm câu này:</span>
                <div class="slider-input-group">
                    <input type="range" id="grade-slider-${q.id}" min="0" max="${q.maxScore}" step="0.25" value="0">
                    <span class="slider-score-badge" id="grade-badge-${q.id}">0.00 / ${q.maxScore}</span>
                </div>
            </div>
        `;
        
        gradingContainer.appendChild(gradeCard);
        
        // Add event listener to slider
        const slider = gradeCard.querySelector(`#grade-slider-${q.id}`);
        const badge = gradeCard.querySelector(`#grade-badge-${q.id}`);
        slider.addEventListener("input", (e) => {
            const val = parseFloat(e.target.value);
            essayScores[q.id] = val;
            badge.textContent = `${val.toFixed(2)} / ${q.maxScore}`;
            updateEssayScoreDisplay();
        });
    });
    
    layoutContainer.appendChild(gradingContainer);
}

function updateEssayScoreDisplay() {
    let total = 0;
    activeEssayExam.questions.forEach(q => {
        total += essayScores[q.id] || 0;
    });
    
    essayTotalScore.textContent = total.toFixed(2);
    
    // Generate comment based on teacher's 20 years experience persona
    let comment = "";
    if (total >= 13.0) {
        comment = "Chúc mừng em! Bài làm của em thể hiện năng lực cảm thụ văn học rất tốt, tư duy sắc bén và khả năng diễn đạt lưu loát, giàu cảm xúc. Đoạn văn nghị luận có lập luận chặt chẽ và sáng tạo. Hãy tiếp tục phát huy phong độ này trong kỳ thi chính thức nhé! Thầy/Cô rất tự hào về em.";
    } else if (total >= 10.5) {
        comment = "Bài làm rất khá! Em đã hiểu rõ yêu cầu đề bài, trả lời chính xác các câu hỏi đọc hiểu và biết cách xây dựng đoạn văn làm văn có bố cục rõ ràng. Nếu chú ý chau chuốt thêm từ ngữ, tăng tính liên kết câu và đưa thêm cảm xúc cá nhân vào bài làm, điểm số của em sẽ còn cao hơn nữa. Cố lên em!";
    } else if (total >= 7.5) {
        comment = "Em làm bài ở mức trung bình khá. Các ý trả lời đọc hiểu cơ bản đã có nhưng chưa thật sự đầy đủ và sâu sắc. Đoạn văn làm văn còn hơi ngắn hoặc diễn đạt đôi chỗ còn lặp từ, lỗi chính tả. Em cần đọc kỹ văn bản hơn, lập dàn ý sơ lược trước khi viết để bài làm mạch lạc hơn nhé.";
    } else {
        comment = "Em cần nỗ lực nhiều hơn. Các câu trả lời đọc hiểu còn sơ sài và chưa đi vào trọng tâm đề bài. Đoạn văn viết còn chưa đảm bảo dung lượng và cấu trúc cơ bản. Hãy chăm chỉ đọc sách, luyện tập viết đoạn văn hàng ngày và tham khảo kỹ các bài văn mẫu của Thầy/Cô để tiến bộ hơn nhé. Thầy/Cô tin em sẽ làm tốt hơn ở lần sau!";
    }
    
    essayTeacherComment.textContent = comment;
    
    // Save state
    const completedKey = `completed_essay_${activeEssayExam.id}`;
    const scoreKey = `score_essay_${activeEssayExam.id}`;
    localStorage.setItem(completedKey, "true");
    localStorage.setItem(scoreKey, total.toFixed(2));
    
    // Re-render lobby lists to update completed badges/scores
    renderEssayExamsList();
}

function restartEssayExam() {
    if (confirm("Em có muốn làm lại đề thi này từ đầu không? Toàn bộ bài làm hiện tại sẽ bị xóa.")) {
        startEssayExam(activeEssayExam.id);
    }
}
