
export function toVideoDuration(givenTime) {
  const group = [];

  const hours = Math.floor(givenTime / 3600);
  const minutes = Math.floor((givenTime % 3600) / 60);
  const seconds = Math.floor((givenTime % 3600) % 60);

  if (hours > 0) { group.push((hours > 9) ? hours : '0' + hours); }
  group.push((minutes > 9) ? minutes : '0' + minutes);
  group.push((seconds > 9) ? seconds : '0' + seconds);

  return group.join(':');
}

export function compareNumbers(a, b) {
  return a - b;
}
