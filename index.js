const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["@", "#", "$", "%", "^", "&", "*"];
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
const lowercaseLetters = characterCodes.map((code) =>
  String.fromCharCode(code)
);
const uppercaseLetters = lowercaseLetters.map((letter) => letter.toUpperCase());

const generatePassword = (
  length,
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase
) => {
  const availableCharacters = [
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? lowercaseLetters : []),
    ...(hasUppercase ? uppercaseLetters : []),
  ];

  let password = "";
  if (availableCharacters.length === 0) return "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }
  return password;
};
