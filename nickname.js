const vowels = ['a', 'o', 'u', 'i', 'e', 'а', 'о' , 'у', 'э', 'ы', 'я', 'ё', 'ю', 'е', 'и'];

function generateNickname(str) {
  const len = vowels.includes(str[2].toLowerCase()) ? 4 : 3;
  return str.slice(0, len);
}
