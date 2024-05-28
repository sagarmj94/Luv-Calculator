import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [showFlowerShower, setShowFlowerShower] = useState(false);

  const [loveScore, setLoveScore] = useState(null);

  const calculateLoveScore = (name1, name2) => {
    let combinedNames = name1.toLowerCase() + name2.toLowerCase();
    let charCount = {};
    for (let char of combinedNames) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    let counts = Object.values(charCount);

    while (counts.length > 2) {
      let temp = [];
      for (let i = 0; i < Math.floor(counts.length / 2); i++) {
        temp.push((counts[i] + counts[counts.length - 1 - i]) % 10);
      }
      if (counts.length % 2 === 1) {
        temp.push(counts[Math.floor(counts.length / 2)]);
      }
      counts = temp;
    }

    return counts.length === 2 ? parseInt(counts.join(""), 10) : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const score = calculateLoveScore(name1, name2);
    setLoveScore(score);
  };

  return (
    <main className="app">
      <header>
        <h1>Love Score Calculator</h1>
      </header>
      <section className="content">
        <form onSubmit={handleSubmit} aria-label="Calculate your love score">
          <label htmlFor="name1">Enter Name 1:</label>
          <input
            id="name1"
            type="text"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            placeholder="Enter Name 1"
          />
          <label htmlFor="name2">Enter Name 2:</label>
          <input
            id="name2"
            type="text"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            placeholder="Enter Name 2"
          />
          <button type="submit">Calculate Love Score</button>
        </form>
        {loveScore !== null && (
          <section aria-live="polite" className="result">
            <p>The Love Score is: {loveScore}</p>
          </section>
        )}
      </section>
      <footer>
        <p>Thank you for using our Love Score Calculator!</p>
      </footer>
    </main>
  );
};

export default App;
