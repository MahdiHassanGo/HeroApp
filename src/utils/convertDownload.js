// utils/formatDownloads.js
export function formatDownloads(n) {
  if (n == null || Number.isNaN(Number(n))) return "—";
  const num = Number(n);

  const units = [
    { value: 1e9, suffix: "B" },
    { value: 1e6, suffix: "M" },
    { value: 1e3, suffix: "K" },
  ];

  for (const u of units) {
    if (num >= u.value) {
      const v = num / u.value;

      // 1 decimal only when needed (e.g., 1.2B), otherwise no decimal (e.g., 5B)
      const text =
        v >= 10 || Number.isInteger(v) ? v.toFixed(0) : v.toFixed(1);

      return `${text}${u.suffix}`;
    }
  }

  return String(num);
}