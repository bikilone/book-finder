import DataService from "./dataservice";

export function trim(data) {
  if (data.length > 50) {
    return data.slice(0, 40) + "...";
  } else return data;
}
export function trimAuthors(data) {
  if (data.length > 1) {
    return trim(data.join(", "));
  } else return trim(data);
}
