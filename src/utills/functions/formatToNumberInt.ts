export function processCurrency(value: string) {
  const digits = value.replace(/\D/g, "");
  return Math.floor(parseInt(digits || "0", 10) / 100);
}
