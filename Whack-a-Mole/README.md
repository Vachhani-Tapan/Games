# 🔨 Whack-a-Mole Game

A fun and interactive **arcade-style browser game** where moles randomly pop up and the player must click them quickly to score points. This project demonstrates core **JavaScript concepts**, DOM manipulation, and browser storage.

---

## 🎮 Game Preview

![Image](https://images.openai.com/static-rsc-4/lCv3v8IyWjATpZ2jECsloFXRXCg2aD4nHdpvUvXv6jNXSqbttOuJfpB-DtiN5B0QaNYjes0tdDNo9IY_vBkAeia_BBHW5MZ4c5Ikp19BJYJGMuqOeVLPQSDLmUTBDF963lZCmkvCcRsVWdUfiVNtS3ZyKPio74cRM1OBby2cnGc96b4pvAJabB8wbymRTiIu?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/hko5KERcV4RTJHp-OCbYbCL8Yy1DqXA7Vcbnr7K40YQzYm7RiZG_VJNJh03b1MT0CrQFr9EPeh6hNQDTTCf-4dnBV1M2euN7WTqYMGtaJEc4_hHdqnmhzjSsjIzdY2hYY4ZHHsxs0YYuKoQ6JmsfxZIILBE3d0OSG2E0xKrW8nzvOCP7r3v2cYT2rHylTfIn?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/iZP1L4uHN9AzXZvG7sIu2KJrNfcrOztF6wQWLznfrVS5fJXpVFWms6w6kZGSdt43IZT2yxdpFvwJ60iLoIdGC97O25BCuFuVrIIXfvgaubP9QpACVxVYqA2VLgoJAiFNkGVcd0v1ZpoXtzuIzGH_-g_z3OSrRHJGEXf9fygeRIJmhyQ8rxs0GqHel9JklST7?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/kfre3oBI-H-T0Bzb6fyg2aqiY37FSxvIowTYYL9LeBZKJwcfIRHPLHALbk5vRQtZMswWj10pBK-8P2P69DkqaFRziDtbzYCCV_A2xTJI2mYRkp4c2L7D443gDRzMpg9ZqYPnsMYrslXEvoxpXyo9tBiZNsmORCVJGcCoffoq3RX8XkKDinVpeAgh-GOVGxlj?purpose=fullsize)

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