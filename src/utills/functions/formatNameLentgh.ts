export function formatName(name: string) {
  if (name.length > 25) {
    return `${name.slice(0, 25)}...`;
  }
  return name;
}
