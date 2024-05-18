const Groq = require('groq-sdk');
require('dotenv').config();

const groq = new Groq((api_key = process.env.GROQ_API_KEY));

formHandler = async (req, res) => {
  try {
    // Get the user's question and selected model from the form
    const question = req.body.question;
    const model = req.body.model || "llama3-70b-8192"; // Default model if none selected

    // Call the Groq API with the user's question and selected model
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
      model: model,
    });

    // Get the response from the Groq API
    const response = completion.choices[0]?.message?.content || "";

    // Send the response back to the client
    res.send(response);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
};

module.exports = formHandler;