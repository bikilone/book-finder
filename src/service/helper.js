export default function trim(data) {
  if (data.length > 100) {
    return data.slice(0, 90) + "...";
  } else return data;
}
