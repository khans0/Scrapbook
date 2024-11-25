import React, { useState } from 'react';
import '../Assets/scss/chatstats.scss';

const ChatStats: React.FC = () => {
  const [chatData, setChatData] = useState<any[]>([]);
  const [wordCount, setWordCount] = useState<{ [key: string]: number }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = JSON.parse(event.target?.result as string);
      setChatData(data.messages);

      // Calculate word counts
      const counts: { [key: string]: number } = {};
      data.messages.forEach((msg: any) => {
        const words = msg.content.split(/\s+/);
        words.forEach((word: string) => {
          const normalizedWord = word.toLowerCase();
          counts[normalizedWord] = (counts[normalizedWord] || 0) + 1;
        });
      });
      setWordCount(counts);
    };
    reader.readAsText(file);
  };

  const handleSearch = () => {
    const count = wordCount[searchTerm.toLowerCase()] || 0;
    setSearchResult(count);
  };

  return (
    <div className="chat-stats">
      <h2>Chat Stats</h2>
      <input type="file" accept=".json" onChange={handleFileUpload} />
      <div>
        <h3>Total Messages: {chatData.length}</h3>
        <h3>Total Unique Words: {Object.keys(wordCount).length}</h3>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <p>Occurrences: {searchResult}</p>
      </div>
    </div>
  );
};

export default ChatStats;
