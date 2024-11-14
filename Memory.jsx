"use client";
import React, { useState, useEffect } from 'react';

export default function Memory() {
  const [boxes, setBoxes] = useState(Array(25).fill(false));
  const [stage, setStage] = useState(1);
  const [currentLights, setCurrentLights] = useState([]); // Track active lights
  const [bg, setBg] = useState(Array(25).fill("bg-gray-700 hover:bg-blue-600"));
  const [clickCount, setClickCount] = useState(0); // Track clicks in current stage

  const generateRandomBoxes = () => {
    const newLights = [];
    const updatedBoxes = Array(25).fill(false);

    // Set random boxes to "active" based on the stage
    for (let i = 0; i < stage + 3; i++) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * 25);
      } while (newLights.includes(randomIndex)); // Avoid duplicates
      newLights.push(randomIndex);
      updatedBoxes[randomIndex] = true;
    }
    setBoxes(updatedBoxes);
    setCurrentLights(newLights);
    setClickCount(0); // Reset click count for the new stage

    // Highlight the correct boxes briefly
    setBg(updatedBoxes.map((box) => (box ? "bg-green-600" : "bg-gray-700")));
    setTimeout(() => {
      setBg(Array(25).fill("bg-gray-700 hover:bg-blue-600"));
    }, 500);
  };

  useEffect(() => {
    generateRandomBoxes();
  }, [stage]);

  const handleBoxClick = (index) => {
    if (currentLights.includes(index)) {
      setBg((prevBg) => {
        const newBg = [...prevBg];
        newBg[index] = "bg-green-600 cursor-auto"; // Correct click
        return newBg;
      });
      setClickCount((prev) => prev + 1);

      // Advance stage if player has successfully clicked all active boxes
      if (clickCount + 1 === currentLights.length) {
        setStage((prevStage) => prevStage + 1);
      }
    } else {
      // Wrong click
      setBg((prevBg) => {
        const newBg = [...prevBg];
        newBg[index] = "bg-red-600"; // Incorrect click
        return newBg;
      });
      setTimeout(() => {
        generateRandomBoxes(); // Reset the grid on wrong click
      }, 1000);
    }
  };

  return (
    <div>
      <div className='text-3xl font-bold text-center pb-5'>Memory Matrix</div>

      <div className="w-96 h-96 grid grid-cols-5 gap-1">
        {boxes.map((item, index) => (
          <button
            key={index}
            className={bg[index]}
            onClick={() => handleBoxClick(index)}
            disabled={bg[index] === "bg-green-600 cursor-auto"} // Disable already clicked correct boxes
          />
        ))}
      </div>

      <div className="text-center text-2xl pt-5">Stage: {stage}</div>
    </div>
  );
}
