export function getFile(path: string): string {
  let text = "";

  fetch(path)
    .then(response => response.text())
    .then(data => {
      text = data;
    });

  return text;
}