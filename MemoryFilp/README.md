# 🃏 Memory Flip Card Game

A classic **Memory Matching Game** where players flip cards to find matching pairs. This project demonstrates key JavaScript concepts like event handling, DOM manipulation, timers, and data persistence using `localStorage`.

---

## 🚀 Features

* 🃏 Flip cards with smooth animations
* 🔍 Match pairs logic with instant feedback
* ⏱️ Countdown timer (speed challenge)
* 📊 Move counter & matched pairs tracker
* 🔁 Restart & hard reset functionality
* 💾 Save best score and last score using `localStorage`
* 🎯 “New Best Score” indicator
* 🎮 Responsive design for mobile & desktop

---

## 🧠 Concepts Covered

### 1. Flip Cards with Click Events

* Handle card clicks using `addEventListener`
* Track first and second card selection
* Prevent invalid or rapid clicks using a `busy` flag

### 2. DOM Updates (Match / Mismatch)

* Use `classList` to visually mark matches
* Animate mismatches and flip cards back
* Update UI counters dynamically

### 3. Timers (Auto Flip + Game Timer)

* `setTimeout` for flipping back unmatched cards
* `setInterval` for countdown timer
* Track and clear timeouts during reset

### 4. Restart / Reset Functionality

* Reset board, timer, and game state
* Restart with animated countdown
* Hard reset clears saved data

### 5. localStorage for Scores

* Save best score across sessions
* Store last game score
* Maintain leaderboard-style data (optional)

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & animations
* **JavaScript (ES6)** – Game logic

---

## 📁 Project Structure

memory-flip-card-game/
│
├── index.html       # Main HTML file
├── style.css        # Styles and animations
├── script.js        # Game logic
└── README.md        # Documentation

---

## 🎮 How to Play

1. Click **Start** to begin the game
2. Flip two cards at a time
3. If cards match:

   * ✅ They stay flipped
4. If cards don’t match:

   * ❌ They flip back after a short delay
5. Match all pairs before time runs out
6. Try to finish in **minimum moves** for best score

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/memory-flip-card-game.git
```

2. Navigate to the folder:

```bash
cd memory-flip-card-game
```

3. Open `index.html` in your browser.

---

## 💡 Key Functions Overview

### Flip Card Logic

```javascript
function onCardClick(card){
    if (busy || card === firstCard || card.classList.contains('matched')) return;

    card.classList.add('flipped');

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCard = card;
        checkForMatch();
    }
}
```

---

### Match Handling

```javascript
if (firstCard.dataset.value === secondCard.dataset.value) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
}
```

---

### Timer Logic

```javascript
timerId = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
        endGame(false);
    }
}, 1000);
```

---

### Save Best Score

```javascript
localStorage.setItem('memoryBest', score);
```

---

## 📊 Game Flow

Start Game
↓
Shuffle Cards
↓
User Flips Two Cards
↓
Match?
├── Yes → Keep Flipped
└── No  → Flip Back (after delay)
↓
All Pairs Matched?
├── Yes → Win Game 🎉
└── No  → Continue
↓
Time Over?
├── Yes → Game Over ❌

---

## 🔥 Future Enhancements

* 🎵 Sound effects for flips and matches
* 🏆 Global leaderboard system
* 🎨 Themes (dark mode, custom card designs)
* 🤝 Multiplayer mode
* 📱 Mobile app version

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgment

This project is perfect for practicing:

* DOM manipulation
* Event handling
* Game logic design
* State management
* Browser storage APIs

---