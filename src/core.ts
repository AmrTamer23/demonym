import type { CountryInfo, TransformOptions } from "./types";
import { NATIONALITY_TO_COUNTRY_MAP } from "./data";
import { formatResult, findFuzzyMatch, findFuzzyMatchByCountry } from "./utils";

export function nationalityToCountry(
  nationality: string,
  options: TransformOptions = {}
): CountryInfo | null {
  const { format = "full", caseSensitive = false, strict = false } = options;

  if (!nationality || typeof nationality !== "string") {
    return null;
  }

  const normalized = caseSensitive
    ? nationality.trim()
    : nationality.trim().toLowerCase();

  if (!normalized) {
    return null;
  }

  const directMatch = NATIONALITY_TO_COUNTRY_MAP[normalized];
  if (directMatch) {
    return formatResult(directMatch, format);
  }

  if (strict) {
    return null;
  }

  const fuzzyMatch = findFuzzyMatch(normalized);
  if (fuzzyMatch) {
    return formatResult(fuzzyMatch, format);
  }

  return null;
}

export function countryToNationality(
  country: string,
  options: Omit<TransformOptions, "format"> = {}
): string | null {
  const { caseSensitive = false, strict = false } = options;

  if (!country || typeof country !== "string") {
    return null;
  }

  const normalized = caseSensitive
    ? country.trim()
    : country.trim().toLowerCase();

  if (!normalized) {
    return null;
  }

  for (const [_, value] of Object.entries(NATIONALITY_TO_COUNTRY_MAP)) {
    const countryName = caseSensitive
      ? value.country
      : value.country.toLowerCase();
    if (countryName === normalized) {
      return value.demonym;
    }
  }

  if (strict) {
    return null;
  }

  const fuzzyMatch = findFuzzyMatchByCountry(normalized);
  return fuzzyMatch ? fuzzyMatch.demonym : null;
}

export function getAllNationalityMappings(): Array<{
  nationality: string;
  country: string;
  code: string;
  demonym: string;
}> {
  const unique = new Map<string, CountryInfo>();

  Object.values(NATIONALITY_TO_COUNTRY_MAP).forEach((info) => {
    unique.set(info.code, info);
  });

  return Array.from(unique.values()).map((info) => ({
    nationality: info.demonym.toLowerCase(),
    country: info.country,
    code: info.code,
    demonym: info.demonym,
  }));
}

export function isValidNationality(nationality: string): boolean {
  if (!nationality || typeof nationality !== "string") {
    return false;
  }

  const normalized = nationality.trim().toLowerCase();

  if (!normalized) {
    return false;
  }

  return (
    normalized in NATIONALITY_TO_COUNTRY_MAP ||
    findFuzzyMatch(normalized) !== null
  );
}
