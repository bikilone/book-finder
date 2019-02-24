export function trim(data) {
  if (data.length > 100) {
    return data.slice(0, 90) + "...";
  } else return data;
}
export function trimAuthors(data) {
  if (data.length > 1) {
    return trim(data.join(", "));
  } else return trim(data);
}
