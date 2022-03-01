function jumble(arr: JSX.Element[]): JSX.Element[] {
  const jumbled: JSX.Element[] = [];
  while (jumbled.length < arr.length) {
    const i = Math.floor(Math.random() * arr.length);
    if (!jumbled.includes(arr[i])) {
      jumbled.push(arr[i]);
    }
  }
  return jumbled;
}

export default jumble;
