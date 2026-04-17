# 🔨 Whack-a-Mole Game

A fun and interactive **arcade-style browser game** where moles randomly pop up and the player must click them quickly to score points. This project demonstrates core **JavaScript concepts**, DOM manipulation, and browser storage.

---

## 🚀 Features

* 🎯 Random mole appearances (dynamic difficulty)
* 🖱️ Click detection for accurate hit/miss tracking
* 📊 Real-time score and timer updates
* 💾 High score saved using **localStorage**
* 🎨 Smooth animations using CSS transitions
* ⏱️ 30-second game loop
* 📱 Responsive design (mobile-friendly)

---

## 🧠 Concepts Covered

### 1. Random Intervals

* Uses `setTimeout()` with `Math.random()`
* Creates unpredictable mole appearances

### 2. Click Detection

* Detects valid clicks only when mole is visible
* Prevents cheating using `event.isTrusted`

### 3. Score Management

* Real-time score updates
* Game state handling (start, end, reset)

### 4. Dynamic CSS Classes

* `classList.add()` / `remove()` for animations
* Smooth UI transitions

### 5. localStorage

* Saves highest score across sessions
* Enhances replayability

---

## 🏗️ Project Structure

```
📁 whack-a-mole/
│── index.html     # Structure of the game
│── style.css      # Styling and animations
│── script.js      # Game logic
```

---

## ⚙️ How It Works

1. Click **Start Game**
2. Moles appear randomly in holes
3. Click the mole before it disappears
4. Each hit increases score
5. Game ends after 30 seconds
6. Highest score is saved automatically

---

## 🧩 Core Logic Example

```javascript
function popUp() {
    if (!gameActive) return;
    
    const time = randomTime(500, 1500);
    const hole = randomHole();
    const mole = hole.querySelector('.mole');
    
    mole.classList.add('up');
    
    setTimeout(function() {
        mole.classList.remove('up');
        if (gameActive) popUp();
    }, time);
}
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling & animations
* **JavaScript (Vanilla)** – Game logic

---

## 📈 Future Improvements

* 🔊 Add sound effects
* 🧠 Difficulty levels (easy / medium / hard)
* 🌍 Online leaderboard (backend integration)
* 🎮 Power-ups and combo system
* ⚡ Faster animations with requestAnimationFrame

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/whack-a-mole.git

# Open project folder
cd whack-a-mole

# Run in browser
open index.html
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a pull request

---
