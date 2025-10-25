import React, { useState, useEffect } from "react";

const PlayGameButton = () => {
  const [showGame, setShowGame] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [tapVisible, setTapVisible] = useState(false);
  const [tapStyle, setTapStyle] = useState({});
  const [startTime, setStartTime] = useState(null);
  const [todayDiscount, setTodayDiscount] = useState(getStoredDiscount());

  // --- LOCAL STORAGE HANDLER ---
  function getStoredDiscount() {
    const data = JSON.parse(localStorage.getItem("gameDiscount"));
    const today = new Date().toISOString().split("T")[0];
    if (data && data.date === today) return data;
    return null;
  }

  const saveDiscount = (value, used = false) => {
    const today = new Date().toISOString().split("T")[0];
    const data = { date: today, discount: value, used };
    localStorage.setItem("gameDiscount", JSON.stringify(data));
    setTodayDiscount(data);
  };

  // --- CHECKS ---
  const checkIfCanPlay = () => {
    const data = getStoredDiscount();
    if (data && data.date === new Date().toISOString().split("T")[0]) {
      if (data.used) {
        alert("🎯 You’ve already used your discount today! Come back tomorrow 😄");
      } else {
        alert("🎮 You’ve already played today! You can’t play again until tomorrow.");
      }
      return false;
    }
    return true;
  };

  // --- START GAME ---
  const startGame = () => {
    if (!checkIfCanPlay()) return;

    setShowGame(true);
    setGameStarted(false);
    setTapVisible(false);

    const delay = Math.random() * 2000 + 1000;
    setTimeout(() => {
      const randomTop = Math.random() * 60 + 20;
      const randomLeft = Math.random() * 60 + 20;
      const randomColor = `hsl(${Math.random() * 360}, 80%, 55%)`;

      setTapStyle({
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        backgroundColor: randomColor,
      });

      setTapVisible(true);
      setGameStarted(true);
      setStartTime(Date.now());
    }, delay);
  };

  // --- HANDLE TAP ---
  const handleTap = () => {
    if (!gameStarted) return;

    const reactionTime = (Date.now() - startTime) / 1000;
    let earnedDiscount = 0;

    if (reactionTime <= 0.75) earnedDiscount = 15;
    else if (reactionTime <= 1.5) earnedDiscount = 10;
    else if (reactionTime <= 2.5) earnedDiscount = 5;

    setShowGame(false);
    setGameStarted(false);

    // ✅ Only save the discount as available, do NOT apply directly
    saveDiscount(earnedDiscount, false);

    if (earnedDiscount > 0) {
      alert(`⚡ You tapped in ${reactionTime.toFixed(2)}s and earned ${earnedDiscount}% discount! 🎉`);
    } else {
      alert(`😢 You tapped in ${reactionTime.toFixed(2)}s — no discount this time!`);
      saveDiscount(0, true); // mark as used if no win
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={todayDiscount && todayDiscount.used ? () => alert("🎯 You’ve already used your discount today!") : startGame}
        className={`mt-[20px] px-7 py-4 rounded-full font-medium transition-all ${
          todayDiscount && todayDiscount.discount > 0 ? "bg-green-500 hover:bg-green-600 text-white" : "bg-orange-500 hover:bg-orange-600 text-white"
        }`}
      >
        {todayDiscount
          ? todayDiscount.used
            ? `✅ ${todayDiscount.discount}% Used Today`
            : `🎮 Play Game to Earn Discount`
          : "🎮 Play Game to Win Discount"}
      </button>

      {/* --- GAME POPUP --- */}
      {showGame && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="relative bg-white p-6 rounded-2xl shadow-lg w-[500px] h-[500px] flex flex-col items-center justify-center text-center">
            {!tapVisible && <p className="text-lg font-semibold text-gray-700">Wait for “TAP NOW!”...</p>}
            {tapVisible && (
              <button
                onClick={handleTap}
                className="absolute px-3 py-3 text-white font-bold rounded-full shadow-md hover:scale-110 transition-transform"
                style={tapStyle}
              >
                TAP NOW!
              </button>
            )}
            <button
              onClick={() => setShowGame(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayGameButton;
