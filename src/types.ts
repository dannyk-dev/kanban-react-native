export const TimeDataFiltersList = [
  "today",
  "yesterday",
  "tomorrow",
  "late",
] as const;

type TimeDataFiltersTuple = typeof TimeDataFiltersList;
export type TimeDataFilters = TimeDataFiltersTuple[number];
