import { useState } from "react";
import hogwartsLogo from "../src/assets/hogwarts.png";
import gryffindor from "../src/assets/griffindor.png";
import hufflepuff from "../src/assets/hufflepuff.png";
import ravenclaw from "../src/assets/ravenclaw.png";
import slytherin from "../src/assets/slytherin.png";

const questions = [
  {
    question: "When facing a difficult challenge, you typically:",
    answers: [
      {
        text: "Face it head-on, regardless of the danger",
        house: "gryffindor",
      },
      {
        text: "Analyze all possible approaches before deciding",
        house: "ravenclaw",
      },
      {
        text: "Find clever ways to turn the situation to your advantage",
        house: "slytherin",
      },
      {
        text: "Work steadily and patiently until you overcome it",
        house: "hufflepuff",
      },
    ],
  },
  {
    question: "Your friends describe you as:",
    answers: [
      { text: "Brave and bold", house: "gryffindor" },
      { text: "Wise and witty", house: "ravenclaw" },
      { text: "Resourceful and ambitious", house: "slytherin" },
      { text: "Loyal and dependable", house: "hufflepuff" },
    ],
  },
  {
    question: "Which magical subject excites you the most?",
    answers: [
      { text: "Defence Against the Dark Arts", house: "gryffindor" },
      { text: "Charms", house: "ravenclaw" },
      { text: "Potions", house: "slytherin" },
      { text: "Herbology", house: "hufflepuff" },
    ],
  },
  {
    question: "Pick a magical creature:",
    answers: [
      { text: "Phoenix", house: "gryffindor" },
      { text: "Eagle", house: "ravenclaw" },
      { text: "Basilisk", house: "slytherin" },
      { text: "Niffler", house: "hufflepuff" },
    ],
  },
  {
    question: "What would you do if you found a wallet on the street?",
    answers: [
      {
        text: "Return it to its owner, even if it’s risky",
        house: "gryffindor",
      },
      { text: "Look for clues to find the owner", house: "ravenclaw" },
      { text: "Keep it, finders keepers!", house: "slytherin" },
      { text: "Hand it to the authorities", house: "hufflepuff" },
    ],
  },
  {
    question: "Which quality do you value most?",
    answers: [
      { text: "Courage", house: "gryffindor" },
      { text: "Intelligence", house: "ravenclaw" },
      { text: "Ambition", house: "slytherin" },
      { text: "Patience", house: "hufflepuff" },
    ],
  },
  {
    question: "Which of these would be your ideal common room?",
    answers: [
      { text: "A cozy room by a roaring fire", house: "gryffindor" },
      { text: "A tall tower filled with books", house: "ravenclaw" },
      { text: "A mysterious room under a lake", house: "slytherin" },
      { text: "A sunny basement near the kitchens", house: "hufflepuff" },
    ],
  },
];

const houseData = {
  gryffindor: {
    name: "Gryffindor",
    color: "from-red-900 to-yellow-700",
    textColor: "text-yellow-200",
    image: gryffindor,
    traits: ["Courage", "Bravery", "Determination", "Chivalry", "Nerve"],
    description:
      "Founded by Godric Gryffindor, this house values courage, bravery, and determination above all. Gryffindors are natural leaders who stand up for what's right, even in the face of danger. The house colors are scarlet and gold, and its emblem is the lion.",
  },
  ravenclaw: {
    name: "Ravenclaw",
    color: "from-blue-900 to-blue-400",
    textColor: "text-blue-100",
    image: ravenclaw,
    traits: ["Wisdom", "Wit", "Creativity", "Intelligence", "Individuality"],
    description:
      "Founded by Rowena Ravenclaw, this house values intelligence, learning, and wit. Ravenclaws are known for their wisdom and creativity. The house colors are blue and silver, and its emblem is the eagle.",
  },
  hufflepuff: {
    name: "Hufflepuff",
    color: "from-yellow-400 to-yellow-700",
    textColor: "text-black",
    image: hufflepuff,
    traits: ["Loyalty", "Patience", "Dedication", "Fairness", "Kindness"],
    description:
      "Founded by Helga Hufflepuff, this house values hard work, patience, loyalty, and fair play. Hufflepuffs are known for being dependable and kind. The house colors are yellow and black, and its emblem is the badger.",
  },
  slytherin: {
    name: "Slytherin",
    color: "from-green-900 to-green-400",
    textColor: "text-green-100",
    image: slytherin,
    traits: [
      "Ambition",
      "Cunning",
      "Resourcefulness",
      "Leadership",
      "Self-preservation",
    ],
    description:
      "Founded by Salazar Slytherin, this house values ambition, cunning, and resourcefulness. Slytherins are determined and often achieve their goals. The house colors are green and silver, and its emblem is the serpent.",
  },
};

function App() {
  const [step, setStep] = useState("start");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const goToHome = () => {
    setStep("start");
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  const beginSorting = () => {
    setStep("quiz");
    setCurrentQ(0);
    setAnswers([]);
    setResult(null);
  };

  const selectAnswer = (house) => {
    const newAnswers = [...answers, house];
    setAnswers(newAnswers);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      const count = newAnswers.reduce((acc, h) => {
        acc[h] = (acc[h] || 0) + 1;
        return acc;
      }, {});
      const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
      setResult(sorted[0][0]);
      setStep("result");
    }
  };

  if (step === "start") {
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-2">
        <header className="w-full flex flex-col items-center py-8">
          <img
            src={hogwartsLogo}
            alt="Hogwarts Logo"
            className="w-24 h-24 sm:w-36 sm:h-36 mb-4"
          />
          <h1 className="text-yellow-400 text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-wide drop-shadow-lg">
            HOGWARTS HOUSE SORTING
          </h1>
          <p className="text-white mb-6 sm:mb-8 text-center text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            Discover which of the four Hogwarts houses you truly belong in.
          </p>
        </header>
        <main className="w-full flex flex-col items-center">
          <div className="flex flex-wrap gap-3 sm:gap-6 mb-8 sm:mb-10 justify-center w-full px-2">
            <div className="flex-1 min-w-[150px] bg-red-800 text-yellow-200 py-3 sm:py-5 rounded-xl shadow-lg text-center text-xs sm:text-base">
              <div className="font-extrabold text-lg sm:text-2xl mb-1">
                GRYFFINDOR
              </div>
              <div className="font-semibold">Bravery & Courage</div>
            </div>
            <div className="flex-1 min-w-[150px] bg-green-900 text-green-200 py-3 sm:py-5 rounded-xl shadow-lg text-center text-xs sm:text-base">
              <div className="font-extrabold text-lg sm:text-2xl mb-1">
                SLYTHERIN
              </div>
              <div className="font-semibold">Ambition & Cunning</div>
            </div>
            <div className="flex-1 min-w-[150px] bg-blue-900 text-blue-200 py-3 sm:py-5 rounded-xl shadow-lg text-center text-xs sm:text-base">
              <div className="font-extrabold text-lg sm:text-2xl mb-1">
                RAVENCLAW
              </div>
              <div className="font-semibold">Wisdom & Wit</div>
            </div>
            <div className="flex-1 min-w-[150px] bg-yellow-400 text-black py-3 sm:py-5 rounded-xl shadow-lg text-center text-xs sm:text-base">
              <div className="font-extrabold text-lg sm:text-2xl mb-1">
                HUFFLEPUFF
              </div>
              <div className="font-semibold">Loyalty & Patience</div>
            </div>
          </div>
          <button
            onClick={beginSorting}
            className="bg-yellow-500 text-black px-6 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl font-extrabold shadow-xl hover:bg-yellow-600 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            Begin Sorting
          </button>
        </main>
      </div>
    );
  }

  if (step === "quiz") {
    const q = questions[currentQ];
    return (
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-2">
        <div className="w-full flex flex-col items-center py-8">
          <div className="text-yellow-400 text-2xl sm:text-3xl mb-4 font-extrabold tracking-wide text-center">
            The Sorting Hat Quiz
          </div>
          <div className="w-full max-w-2xl h-2 sm:h-3 bg-gray-700 rounded-full mb-6 sm:mb-8 overflow-hidden">
            <div
              className="h-2 sm:h-3 bg-yellow-400 rounded-full transition-all duration-500"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="text-white text-lg sm:text-2xl mb-6 sm:mb-10 font-semibold tracking-wide text-center max-w-2xl px-2">
            {q.question}
          </div>
          <div className="flex flex-col gap-3 sm:gap-6 w-full max-w-2xl px-2">
            {q.answers.map((ans, idx) => (
              <button
                key={idx}
                onClick={() => selectAnswer(ans.house)}
                className="bg-gray-800 text-white px-4 py-3 sm:px-8 sm:py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition duration-300 font-semibold shadow-md text-base sm:text-lg w-full"
              >
                {ans.text}
              </button>
            ))}
          </div>
          <div className="w-full max-w-2xl text-right text-gray-400 mt-6 sm:mt-8 font-medium tracking-wide text-xs sm:text-base px-2">
            Question {currentQ + 1}/{questions.length}
          </div>
        </div>
      </div>
    );
  }

  if (step === "result" && result) {
    const house = houseData[result];
    return (
      <div
        className={`min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br ${house.color} px-2`}
      >
        <div className="w-full flex flex-col items-center py-10">
          <img
            src={house.image}
            alt={house.name}
            className="w-24 h-24 sm:w-36 sm:h-36 mb-6 sm:mb-8 drop-shadow-xl"
          />
          <h1
            className={`text-3xl sm:text-5xl font-extrabold mb-4 text-center drop-shadow-lg ${house.textColor}`}
          >
            YOU BELONG IN {house.name.toUpperCase()}!
          </h1>
          <p
            className={`text-base sm:text-xl mb-4 sm:mb-6 text-center font-semibold ${house.textColor} max-w-2xl`}
          >
            Where dwell the brave at heart. Their daring, nerve, and chivalry
            set {house.name}s apart.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center w-full px-2">
            {house.traits.map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white bg-opacity-25 border border-white text-white font-semibold tracking-wide shadow text-xs sm:text-base"
              >
                {trait}
              </span>
            ))}
          </div>
          <div className="bg-black bg-opacity-60 text-white rounded-3xl p-4 sm:p-8 max-w-2xl mb-6 sm:mb-10 text-center font-medium tracking-wide shadow text-xs sm:text-base">
            {house.description}
          </div>
          <button
            onClick={goToHome}
            className="bg-yellow-500 text-black px-6 py-3 sm:px-10 sm:py-4 rounded-full text-lg sm:text-xl font-extrabold shadow-xl hover:bg-yellow-600 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md"
          >
            Sort Again
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
