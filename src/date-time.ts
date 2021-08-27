export const toDateString = (date) => {
  const monthIdx = date.getMonth() + 1;
  return `${date.getFullYear()}-${monthIdx.toString().padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}`.toString();
};

export const toTimeString = (date) => {
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};
