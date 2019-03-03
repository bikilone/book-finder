export function trim(data, num = 40) {
  if (data.length > 50) {
    return data.slice(0, num) + "...";
  } else return data;
}
export function trimAuthors(data) {
  if (data.length > 1) {
    return trim(data.join(", "));
  } else return trim(data);
}

export function trimDescription(data) {
  data
    .replace("<p>", "")
    .replace("</p>", "")
    .replace("<i>");
}
