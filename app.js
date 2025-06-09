const textInput = document.getElementById('text-input');
  const wordsCount = document.getElementById('words-count');
  const charsCount = document.getElementById('characters-count');
  const sentencesCount = document.getElementById('sentences-count');
  const readingTime = document.getElementById('reading-time');

  function updateCounts() {
    const text = textInput.value.trim();

    // Word count (split by whitespace, filter empty)
    const wordsArray = text.length ? text.split(/\s+/).filter(w => w.length > 0) : [];
    const wordNum = wordsArray.length;

    // Characters count excluding spaces
    const charsNum = text.replace(/\s/g, '').length;

    // Sentence count (count .!? as sentence ends)
    const sentenceNum = (text.match(/[.!?]+/g) || []).length;

    // Reading time estimate (200 words per minute)
    const readTime = wordNum > 0 ? Math.ceil(wordNum / 200) : 0;

    // Update DOM
    wordsCount.firstChild.textContent = wordNum;
    charsCount.firstChild.textContent = charsNum;
    sentencesCount.firstChild.textContent = sentenceNum;
    readingTime.firstChild.textContent = readTime + ' min';
  }

  // Initial count (empty)
  updateCounts();

  // Update as user types
  textInput.addEventListener('input', updateCounts);