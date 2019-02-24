export function trim(data) {
  if (data.length > 60) {
    return data.slice(0, 50) + "...";
  } else return data;
}
export function trimAuthors(data) {
  if (data.length > 1) {
    return trim(data.join(", "));
  } else return trim(data);
}
