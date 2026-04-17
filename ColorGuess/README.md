# 🎨 Color Guessing Game

An interactive web-based game where players guess the correct color based on an RGB value. This project is designed to strengthen core JavaScript concepts such as event handling, DOM manipulation, randomness, and data persistence.

---

## 🚀 Features

* 🎯 Guess the correct RGB color from multiple options
* 🎲 Random color generation for every round
* 🔁 New round functionality
* 📊 Current streak & best streak tracking
* 💾 Persistent best streak using `localStorage`
* 🎚️ Difficulty modes:

  * Easy (3 colors)
  * Hard (6 colors)
* 🎨 Dynamic UI feedback (correct/wrong selection)

---

## 🧠 Concepts Covered

### 1. Multiple Event Listeners

* Efficient handling of clicks on multiple color boxes using `forEach`
* Clean and scalable event management

### 2. Dynamic Style Manipulation

* Changing colors, text, and UI dynamically using JavaScript
* Visual feedback for user actions

### 3. Arrays & Random Values

* Generating random RGB colors
* Selecting random correct answers
* Managing color options using arrays

### 4. Local Storage

* Saving best streak across sessions
* Retrieving stored data on page load

---

## 🛠️ Tech Stack

* **HTML5** – Structure of the game
* **CSS3** – Styling and layout
* **JavaScript (ES6)** – Game logic and interactivity

---

## 📁 Project Structure

```
color-guessing-game/
│
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # Game logic
└── README.md        # Project documentation
```

---

## 🎮 How to Play

1. A target RGB value (e.g., `RGB(255, 128, 64)`) is displayed.
2. You’ll see multiple colored boxes.
3. Click the box that matches the RGB value.
4. If correct:

   * 🎉 Streak increases
   * All boxes change to correct color
5. If wrong:

   * ❌ Streak resets
   * Selected box fades out
6. Click **New Round** to continue.

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/color-guessing-game.git
```

2. Navigate to the project folder:

```bash
cd color-guessing-game
```

3. Open `index.html` in your browser.

---

## 💡 Key Functions Overview

### Generate Random Color

```javascript
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
```

### Handle User Click

```javascript
function handleColorClick(event) {
    const clickedColor = event.target.style.backgroundColor;
    if (clickedColor === correctColor) {
        handleCorrectGuess();
    } else {
        handleWrongGuess(event.target);
    }
}
```

### Save Best Streak

```javascript
localStorage.setItem('colorGameBestStreak', bestStreak);
```

---

## 📊 Game Flow

```
Start Game
   ↓
Generate Random Colors
   ↓
Pick Correct Answer
   ↓
User Clicks Color
   ↓
Correct? ── Yes → Increase Streak
   │
   └── No → Reset Streak
   ↓
Next Round
```

---

## 🔥 Future Enhancements

* ⏱️ Timer-based gameplay
* 🏆 Leaderboard system
* 🎵 Sound effects
* 🌐 Multiplayer mode
* 📱 Mobile app version

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the project
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

## 🙌 Acknowledgment

This project is a great way to practice:

* DOM manipulation
* Event handling
* Game logic design
* Clean UI/UX interactions

---