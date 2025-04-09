import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Calculator() {
  const [formData, setFormData] = useState({
    Math: "",
    Physics: "",
    Chemistry: "",
    Biology: "",
    CS: "",
    Commerce: "",
  });
  const [recommendation, setRecommendation] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/predict", formData);
      setRecommendation(response.data.recommended_stream);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(to bottom, #4DD0C4, #ffffff)", // Gradient background
      }}
    >
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl border-t-8 border-teal-400"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          🎓 College Stream Predictor
        </h1>

        {/* Note for Users */}
        <p className="text-sm text-gray-700 text-center bg-teal-100 p-3 rounded-md mb-6 shadow-md">
          🔹 If you don’t have a subject, enter <strong>0</strong>.  
          🔹 Enter marks out of <strong>100</strong>.
        </p>

        {/* Horizontal Cards Layout */}
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-6 justify-center">
          {Object.keys(formData).map((key) => (
            <motion.div
              key={key}
              className="bg-teal-50 p-4 rounded-xl shadow-md w-52 text-center border border-teal-300 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <label className="block text-gray-800 font-semibold">{key} Marks</label>
              <input
                type="number"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                required
                placeholder="Enter marks (0-100)"
                min="0"
                max="100"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring focus:ring-teal-400 focus:outline-none bg-white shadow-sm"
              />
            </motion.div>
          ))}
        </form>

        {/* Submit Button (Always Visible) */}
        <div className="mt-6 flex justify-center">
          <motion.button
            type="submit"
            onClick={handleSubmit}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-teal-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Recommendation
          </motion.button>
        </div>

        {/* Display Recommendation */}
        {recommendation && (
          <motion.div
            className="mt-6 text-center text-xl font-bold text-teal-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            🎯 Recommended Stream: {recommendation}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Calculator;