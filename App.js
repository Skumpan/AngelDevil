const handleSubmit = async () => {
  try {
    const res = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    setResponse(res.data.choices[0].message.content);
  } catch (error) {
    console.error('Error fetching data from OpenAI API:', error);
    setResponse('Något gick fel. Försök igen.');
  }
};
