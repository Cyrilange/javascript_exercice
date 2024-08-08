function rev_print(str) {
  let i = str.length - 1;
  let reversed = "";

  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}

console.log(rev_print("hello world, is it all in reversed"));
