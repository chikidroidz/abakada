import { useState } from "react";

function Abakada() {
  const [vowels, setVowels] = useState(["A", "E", "I", "O", "U"]);
  const [prefix, setPrefix] = useState("");
  const [combinations, setCombinations] = useState(vowels);
  const [inputValue, setInputValue] = useState("");

  const shuffleVowels = () => {
    const shuffled = [...vowels].sort(() => Math.random() - 0.5);
    setVowels(shuffled);
    setCombinations(shuffled.map((vowel) => prefix + vowel));
  };

  const applyPrefix = () => {
    const trimmed = inputValue.trim().toUpperCase();
    setPrefix(trimmed);
    setCombinations(vowels.map((vowel) => trimmed + vowel));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white px-4">
      <h1 className="text-6xl font-extrabold mt-12 mb-8 text-center drop-shadow-lg">
        Solana <span className="text-yellow-400">ABAKADA</span>
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-6xl px-4 mb-10">
        {combinations.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-800 border border-gray-600 rounded-xl h-48 shadow-lg transform hover:scale-105 transition-transform duration-200"
          >
            <p className="text-7xl font-bold text-yellow-300">{item}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center mb-12">
        <input
          type="text"
          placeholder="Enter prefix (e.g. S)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-gray-200 text-gray-900 text-3xl h-16 rounded-md px-6 w-80 focus:outline-none focus:ring-4 focus:ring-yellow-400 placeholder-gray-500"
        />
        <button
          onClick={applyPrefix}
          className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-3xl h-16 px-8 rounded-md transition-colors duration-200"
        >
          Apply Prefix
        </button>
        <button
          onClick={shuffleVowels}
          className="bg-gray-600 hover:bg-gray-500 text-white text-3xl font-semibold h-16 px-8 rounded-md transition-colors duration-200"
        >
          Randomize
        </button>
      </div>
    </div>
  );
}

export default Abakada;
