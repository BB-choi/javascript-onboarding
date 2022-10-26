function problem2(cryptogram) {
  let encryptedString = cryptogram;
  let decryptedString = "";

  for (let i = 0; i < encryptedString.length; i++) {
    const currentChar = encryptedString[i];
    const nextChar = encryptedString[i + 1];

    if (currentChar === nextChar) {
      i++;
      continue;
    }

    decryptedString += currentChar;
  }

  return decryptedString;
}

module.exports = problem2;
