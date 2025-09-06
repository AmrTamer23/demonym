import type { CountryInfo, TransformOptions } from "./types";
import { NATIONALITY_TO_COUNTRY_MAP } from "./data";

export function formatResult(
  countryInfo: CountryInfo,
  format: TransformOptions["format"]
): CountryInfo {
  switch (format) {
    case "short":
      return {
        ...countryInfo,
        country: getShortCountryName(countryInfo.country),
      };
    case "code":
      return {
        ...countryInfo,
        country: countryInfo.code,
      };
    default:
      return countryInfo;
  }
}

export function getShortCountryName(fullName: string): string {
  const shortNames: Record<string, string> = {
    "United States": "US",
    "United Kingdom": "UK",
    "South Korea": "S. Korea",
    "North Korea": "N. Korea",
    "South Africa": "S. Africa",
    "New Zealand": "NZ",
    "Czech Republic": "Czechia",
    "Saudi Arabia": "Saudi Arabia",
  };

  return shortNames[fullName] || fullName;
}

export function findFuzzyMatch(input: string): CountryInfo | null {
  const cleaned = input
    .replace(/^(a |an |the )/i, "")
    .replace(/(ian|ean|ese|ish|er|i)$/i, "");

  for (const [key, value] of Object.entries(NATIONALITY_TO_COUNTRY_MAP)) {
    if (key.includes(cleaned) || cleaned.includes(key)) {
      return value;
    }

    const countryLower = value.country.toLowerCase();
    if (countryLower.includes(cleaned) || cleaned.includes(countryLower)) {
      return value;
    }
  }

  return null;
}

export function findFuzzyMatchByCountry(input: string): CountryInfo | null {
  for (const value of Object.values(NATIONALITY_TO_COUNTRY_MAP)) {
    const countryLower = value.country.toLowerCase();
    if (countryLower.includes(input) || input.includes(countryLower)) {
      return value;
    }
  }
  return null;
}
