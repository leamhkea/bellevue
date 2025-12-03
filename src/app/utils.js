import { parse } from "date-fns";
import { da } from "date-fns/locale";

/**
 * Parse dates for et item eller en liste af items
 * @param {Array|Object} input 
 * @param {Object} options 
 * @returns {Array} 
 */
export function parseDates(input, options = {}) {
  const { addLatestDate = false, onlyFuture = false } = options;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (Array.isArray(input) && addLatestDate) {
    // input er items
    return input
      .map((item) => {
        if (!Array.isArray(item.fullDates)) return null;

        const parsedDates = item.fullDates
          .map((entry) => {
            if (!entry?.date) return null;
            const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
            if (isNaN(d)) return null;
            d.setHours(0, 0, 0, 0);
            return d;
          })
          .filter(Boolean);

        if (parsedDates.length === 0) return null;

        const latestDate = new Date(
          Math.max(...parsedDates.map((d) => d.getTime()))
        );

        return {
          ...item,
          latestDate,
        };
      })
      .filter(Boolean);
  }

  if (Array.isArray(input) && !addLatestDate) {
    // input er fullDates
    const parsedDates = input
      .map((entry) => {
        if (!entry?.date) return null;
        const d = parse(entry.date, "dd/MM/yyyy", new Date(), { locale: da });
        if (isNaN(d)) return null;
        d.setHours(0, 0, 0, 0);
        return d;
      })
      .filter(Boolean);

    const filteredDates = onlyFuture
      ? parsedDates.filter((d) => d.getTime() >= today.getTime())
      : parsedDates;

    // fjern dubletter
    return Array.from(
      new Map(filteredDates.map((d) => [d.getTime(), d])).values()
    );
  }

  return [];
}
