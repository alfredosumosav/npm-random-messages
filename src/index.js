const messages = [
  "Alfredo",
  "Ana",
  "Diego",
  "Laura",
  "Jessica",
  "Caroline",
  "Pauline",
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };
