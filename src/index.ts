import type { CountryInfo, TransformOptions } from "./types";

/**
 * Comprehensive mapping of nationalities to countries
 * Includes common variations, historical names, and aliases
 */
const NATIONALITY_TO_COUNTRY_MAP: Record<string, CountryInfo> = {
  // Major countries with common variations
  american: { country: "United States", code: "US", demonym: "American" },
  us: { country: "United States", code: "US", demonym: "American" },
  usa: { country: "United States", code: "US", demonym: "American" },
  "united states": {
    country: "United States",
    code: "US",
    demonym: "American",
  },

  british: { country: "United Kingdom", code: "GB", demonym: "British" },
  uk: { country: "United Kingdom", code: "GB", demonym: "British" },
  english: { country: "United Kingdom", code: "GB", demonym: "British" },
  scottish: { country: "United Kingdom", code: "GB", demonym: "British" },
  welsh: { country: "United Kingdom", code: "GB", demonym: "British" },
  "northern irish": {
    country: "United Kingdom",
    code: "GB",
    demonym: "British",
  },

  chinese: { country: "China", code: "CN", demonym: "Chinese" },
  china: { country: "China", code: "CN", demonym: "Chinese" },
  prc: { country: "China", code: "CN", demonym: "Chinese" },

  indian: { country: "India", code: "IN", demonym: "Indian" },
  india: { country: "India", code: "IN", demonym: "Indian" },

  japanese: { country: "Japan", code: "JP", demonym: "Japanese" },
  japan: { country: "Japan", code: "JP", demonym: "Japanese" },

  german: { country: "Germany", code: "DE", demonym: "German" },
  germany: { country: "Germany", code: "DE", demonym: "German" },

  french: { country: "France", code: "FR", demonym: "French" },
  france: { country: "France", code: "FR", demonym: "French" },

  italian: { country: "Italy", code: "IT", demonym: "Italian" },
  italy: { country: "Italy", code: "IT", demonym: "Italian" },

  spanish: { country: "Spain", code: "ES", demonym: "Spanish" },
  spain: { country: "Spain", code: "ES", demonym: "Spanish" },

  canadian: { country: "Canada", code: "CA", demonym: "Canadian" },
  canada: { country: "Canada", code: "CA", demonym: "Canadian" },

  australian: { country: "Australia", code: "AU", demonym: "Australian" },
  australia: { country: "Australia", code: "AU", demonym: "Australian" },
  aussie: { country: "Australia", code: "AU", demonym: "Australian" },

  brazilian: { country: "Brazil", code: "BR", demonym: "Brazilian" },
  brazil: { country: "Brazil", code: "BR", demonym: "Brazilian" },

  mexican: { country: "Mexico", code: "MX", demonym: "Mexican" },
  mexico: { country: "Mexico", code: "MX", demonym: "Mexican" },

  russian: { country: "Russia", code: "RU", demonym: "Russian" },
  russia: { country: "Russia", code: "RU", demonym: "Russian" },

  "north korean": {
    country: "North Korea",
    code: "KP",
    demonym: "North Korean",
  },
  "north korea": {
    country: "North Korea",
    code: "KP",
    demonym: "North Korean",
  },

  "south korean": {
    country: "South Korea",
    code: "KR",
    demonym: "South Korean",
  },
  korean: { country: "South Korea", code: "KR", demonym: "South Korean" },
  "south korea": {
    country: "South Korea",
    code: "KR",
    demonym: "South Korean",
  },

  // European countries
  dutch: { country: "Netherlands", code: "NL", demonym: "Dutch" },
  netherlands: { country: "Netherlands", code: "NL", demonym: "Dutch" },
  holland: { country: "Netherlands", code: "NL", demonym: "Dutch" },

  swiss: { country: "Switzerland", code: "CH", demonym: "Swiss" },
  switzerland: { country: "Switzerland", code: "CH", demonym: "Swiss" },

  austrian: { country: "Austria", code: "AT", demonym: "Austrian" },
  austria: { country: "Austria", code: "AT", demonym: "Austrian" },

  belgian: { country: "Belgium", code: "BE", demonym: "Belgian" },
  belgium: { country: "Belgium", code: "BE", demonym: "Belgian" },

  norwegian: { country: "Norway", code: "NO", demonym: "Norwegian" },
  norway: { country: "Norway", code: "NO", demonym: "Norwegian" },

  swedish: { country: "Sweden", code: "SE", demonym: "Swedish" },
  sweden: { country: "Sweden", code: "SE", demonym: "Swedish" },

  danish: { country: "Denmark", code: "DK", demonym: "Danish" },
  denmark: { country: "Denmark", code: "DK", demonym: "Danish" },

  finnish: { country: "Finland", code: "FI", demonym: "Finnish" },
  finland: { country: "Finland", code: "FI", demonym: "Finnish" },

  polish: { country: "Poland", code: "PL", demonym: "Polish" },
  poland: { country: "Poland", code: "PL", demonym: "Polish" },

  portuguese: { country: "Portugal", code: "PT", demonym: "Portuguese" },
  portugal: { country: "Portugal", code: "PT", demonym: "Portuguese" },

  greek: { country: "Greece", code: "GR", demonym: "Greek" },
  greece: { country: "Greece", code: "GR", demonym: "Greek" },

  czech: { country: "Czech Republic", code: "CZ", demonym: "Czech" },
  "czech republic": { country: "Czech Republic", code: "CZ", demonym: "Czech" },
  czechoslovakian: { country: "Czech Republic", code: "CZ", demonym: "Czech" },

  hungarian: { country: "Hungary", code: "HU", demonym: "Hungarian" },
  hungary: { country: "Hungary", code: "HU", demonym: "Hungarian" },

  romanian: { country: "Romania", code: "RO", demonym: "Romanian" },
  romania: { country: "Romania", code: "RO", demonym: "Romanian" },

  bulgarian: { country: "Bulgaria", code: "BG", demonym: "Bulgarian" },
  bulgaria: { country: "Bulgaria", code: "BG", demonym: "Bulgarian" },

  croatian: { country: "Croatia", code: "HR", demonym: "Croatian" },
  croatia: { country: "Croatia", code: "HR", demonym: "Croatian" },

  serbian: { country: "Serbia", code: "RS", demonym: "Serbian" },
  serbia: { country: "Serbia", code: "RS", demonym: "Serbian" },

  ukrainian: { country: "Ukraine", code: "UA", demonym: "Ukrainian" },
  ukraine: { country: "Ukraine", code: "UA", demonym: "Ukrainian" },

  irish: { country: "Ireland", code: "IE", demonym: "Irish" },
  ireland: { country: "Ireland", code: "IE", demonym: "Irish" },

  // Middle East & Africa
  palestinian: { country: "Palestine", code: "PS", demonym: "Palestinian" },
  palestine: { country: "Palestine", code: "PS", demonym: "Palestinian" },

  jordanian: { country: "Jordan", code: "JO", demonym: "Jordanian" },
  jordan: { country: "Jordan", code: "JO", demonym: "Jordanian" },

  lebanese: { country: "Lebanon", code: "LB", demonym: "Lebanese" },
  lebanon: { country: "Lebanon", code: "LB", demonym: "Lebanese" },

  syrian: { country: "Syria", code: "SY", demonym: "Syrian" },
  syria: { country: "Syria", code: "SY", demonym: "Syrian" },

  iraqi: { country: "Iraq", code: "IQ", demonym: "Iraqi" },
  iraq: { country: "Iraq", code: "IQ", demonym: "Iraqi" },

  afghan: { country: "Afghanistan", code: "AF", demonym: "Afghan" },
  afghanistan: { country: "Afghanistan", code: "AF", demonym: "Afghan" },

  iranian: { country: "Iran", code: "IR", demonym: "Iranian" },
  iran: { country: "Iran", code: "IR", demonym: "Iranian" },
  persian: { country: "Iran", code: "IR", demonym: "Iranian" },

  turkish: { country: "Turkey", code: "TR", demonym: "Turkish" },
  turkey: { country: "Turkey", code: "TR", demonym: "Turkish" },

  saudi: { country: "Saudi Arabia", code: "SA", demonym: "Saudi" },
  "saudi arabian": { country: "Saudi Arabia", code: "SA", demonym: "Saudi" },
  "saudi arabia": { country: "Saudi Arabia", code: "SA", demonym: "Saudi" },

  emirati: { country: "United Arab Emirates", code: "AE", demonym: "Emirati" },
  uae: { country: "United Arab Emirates", code: "AE", demonym: "Emirati" },
  "united arab emirates": {
    country: "United Arab Emirates",
    code: "AE",
    demonym: "Emirati",
  },

  qatari: { country: "Qatar", code: "QA", demonym: "Qatari" },
  qatar: { country: "Qatar", code: "QA", demonym: "Qatari" },

  bahraini: { country: "Bahrain", code: "BH", demonym: "Bahraini" },
  bahrain: { country: "Bahrain", code: "BH", demonym: "Bahraini" },

  kuwaiti: { country: "Kuwait", code: "KW", demonym: "Kuwaiti" },
  kuwait: { country: "Kuwait", code: "KW", demonym: "Kuwaiti" },

  omani: { country: "Oman", code: "OM", demonym: "Omani" },
  oman: { country: "Oman", code: "OM", demonym: "Omani" },

  egyptian: { country: "Egypt", code: "EG", demonym: "Egyptian" },
  egypt: { country: "Egypt", code: "EG", demonym: "Egyptian" },

  "south african": {
    country: "South Africa",
    code: "ZA",
    demonym: "South African",
  },
  "south africa": {
    country: "South Africa",
    code: "ZA",
    demonym: "South African",
  },

  nigerian: { country: "Nigeria", code: "NG", demonym: "Nigerian" },
  nigeria: { country: "Nigeria", code: "NG", demonym: "Nigerian" },

  kenyan: { country: "Kenya", code: "KE", demonym: "Kenyan" },
  kenya: { country: "Kenya", code: "KE", demonym: "Kenyan" },

  moroccan: { country: "Morocco", code: "MA", demonym: "Moroccan" },
  morocco: { country: "Morocco", code: "MA", demonym: "Moroccan" },

  algerian: { country: "Algeria", code: "DZ", demonym: "Algerian" },
  algeria: { country: "Algeria", code: "DZ", demonym: "Algerian" },

  ethiopian: { country: "Ethiopia", code: "ET", demonym: "Ethiopian" },
  ethiopia: { country: "Ethiopia", code: "ET", demonym: "Ethiopian" },

  ghanaian: { country: "Ghana", code: "GH", demonym: "Ghanaian" },
  ghana: { country: "Ghana", code: "GH", demonym: "Ghanaian" },

  tanzanian: { country: "Tanzania", code: "TZ", demonym: "Tanzanian" },
  tanzania: { country: "Tanzania", code: "TZ", demonym: "Tanzanian" },

  // Asia-Pacific
  thai: { country: "Thailand", code: "TH", demonym: "Thai" },
  thailand: { country: "Thailand", code: "TH", demonym: "Thai" },

  vietnamese: { country: "Vietnam", code: "VN", demonym: "Vietnamese" },
  vietnam: { country: "Vietnam", code: "VN", demonym: "Vietnamese" },

  filipino: { country: "Philippines", code: "PH", demonym: "Filipino" },
  philippines: { country: "Philippines", code: "PH", demonym: "Filipino" },
  philippine: { country: "Philippines", code: "PH", demonym: "Filipino" },

  indonesian: { country: "Indonesia", code: "ID", demonym: "Indonesian" },
  indonesia: { country: "Indonesia", code: "ID", demonym: "Indonesian" },

  malaysian: { country: "Malaysia", code: "MY", demonym: "Malaysian" },
  malaysia: { country: "Malaysia", code: "MY", demonym: "Malaysian" },

  singaporean: { country: "Singapore", code: "SG", demonym: "Singaporean" },
  singapore: { country: "Singapore", code: "SG", demonym: "Singaporean" },

  pakistani: { country: "Pakistan", code: "PK", demonym: "Pakistani" },
  pakistan: { country: "Pakistan", code: "PK", demonym: "Pakistani" },

  bangladeshi: { country: "Bangladesh", code: "BD", demonym: "Bangladeshi" },
  bangladesh: { country: "Bangladesh", code: "BD", demonym: "Bangladeshi" },

  "sri lankan": { country: "Sri Lanka", code: "LK", demonym: "Sri Lankan" },
  "sri lanka": { country: "Sri Lanka", code: "LK", demonym: "Sri Lankan" },

  nepali: { country: "Nepal", code: "NP", demonym: "Nepali" },
  nepal: { country: "Nepal", code: "NP", demonym: "Nepali" },

  cambodian: { country: "Cambodia", code: "KH", demonym: "Cambodian" },
  cambodia: { country: "Cambodia", code: "KH", demonym: "Cambodian" },

  laotian: { country: "Laos", code: "LA", demonym: "Laotian" },
  laos: { country: "Laos", code: "LA", demonym: "Laotian" },

  mongolian: { country: "Mongolia", code: "MN", demonym: "Mongolian" },
  mongolia: { country: "Mongolia", code: "MN", demonym: "Mongolian" },

  taiwanese: { country: "Taiwan", code: "TW", demonym: "Taiwanese" },
  taiwan: { country: "Taiwan", code: "TW", demonym: "Taiwanese" },

  kazakh: { country: "Kazakhstan", code: "KZ", demonym: "Kazakh" },
  kazakhstan: { country: "Kazakhstan", code: "KZ", demonym: "Kazakh" },

  uzbek: { country: "Uzbekistan", code: "UZ", demonym: "Uzbek" },
  uzbekistan: { country: "Uzbekistan", code: "UZ", demonym: "Uzbek" },

  "new zealander": {
    country: "New Zealand",
    code: "NZ",
    demonym: "New Zealand",
  },
  "new zealand": { country: "New Zealand", code: "NZ", demonym: "New Zealand" },
  kiwi: { country: "New Zealand", code: "NZ", demonym: "New Zealand" },

  // Latin America
  argentinian: { country: "Argentina", code: "AR", demonym: "Argentinian" },
  argentina: { country: "Argentina", code: "AR", demonym: "Argentinian" },
  argentine: { country: "Argentina", code: "AR", demonym: "Argentinian" },

  chilean: { country: "Chile", code: "CL", demonym: "Chilean" },
  chile: { country: "Chile", code: "CL", demonym: "Chilean" },

  colombian: { country: "Colombia", code: "CO", demonym: "Colombian" },
  colombia: { country: "Colombia", code: "CO", demonym: "Colombian" },

  peruvian: { country: "Peru", code: "PE", demonym: "Peruvian" },
  peru: { country: "Peru", code: "PE", demonym: "Peruvian" },

  venezuelan: { country: "Venezuela", code: "VE", demonym: "Venezuelan" },
  venezuela: { country: "Venezuela", code: "VE", demonym: "Venezuelan" },

  ecuadorian: { country: "Ecuador", code: "EC", demonym: "Ecuadorian" },
  ecuador: { country: "Ecuador", code: "EC", demonym: "Ecuadorian" },

  cuban: { country: "Cuba", code: "CU", demonym: "Cuban" },
  cuba: { country: "Cuba", code: "CU", demonym: "Cuban" },

  "costa rican": { country: "Costa Rica", code: "CR", demonym: "Costa Rican" },
  "costa rica": { country: "Costa Rica", code: "CR", demonym: "Costa Rican" },

  panamanian: { country: "Panama", code: "PA", demonym: "Panamanian" },
  panama: { country: "Panama", code: "PA", demonym: "Panamanian" },

  uruguayan: { country: "Uruguay", code: "UY", demonym: "Uruguayan" },
  uruguay: { country: "Uruguay", code: "UY", demonym: "Uruguayan" },

  paraguayan: { country: "Paraguay", code: "PY", demonym: "Paraguayan" },
  paraguay: { country: "Paraguay", code: "PY", demonym: "Paraguayan" },

  bolivian: { country: "Bolivia", code: "BO", demonym: "Bolivian" },
  bolivia: { country: "Bolivia", code: "BO", demonym: "Bolivian" },

  nicaraguan: { country: "Nicaragua", code: "NI", demonym: "Nicaraguan" },
  nicaragua: { country: "Nicaragua", code: "NI", demonym: "Nicaraguan" },

  honduran: { country: "Honduras", code: "HN", demonym: "Honduran" },
  honduras: { country: "Honduras", code: "HN", demonym: "Honduran" },

  guatemalan: { country: "Guatemala", code: "GT", demonym: "Guatemalan" },
  guatemala: { country: "Guatemala", code: "GT", demonym: "Guatemalan" },

  salvadoran: { country: "El Salvador", code: "SV", demonym: "Salvadoran" },
  "el salvador": { country: "El Salvador", code: "SV", demonym: "Salvadoran" },

  dominican: {
    country: "Dominican Republic",
    code: "DO",
    demonym: "Dominican",
  },
  "dominican republic": {
    country: "Dominican Republic",
    code: "DO",
    demonym: "Dominican",
  },

  jamaican: { country: "Jamaica", code: "JM", demonym: "Jamaican" },
  jamaica: { country: "Jamaica", code: "JM", demonym: "Jamaican" },

  haitian: { country: "Haiti", code: "HT", demonym: "Haitian" },
  haiti: { country: "Haiti", code: "HT", demonym: "Haitian" },

  trinidadian: {
    country: "Trinidad and Tobago",
    code: "TT",
    demonym: "Trinidadian",
  },
  "trinidad and tobago": {
    country: "Trinidad and Tobago",
    code: "TT",
    demonym: "Trinidadian",
  },

  bahamian: { country: "Bahamas", code: "BS", demonym: "Bahamian" },
  bahamas: { country: "Bahamas", code: "BS", demonym: "Bahamian" },

  barbadian: { country: "Barbados", code: "BB", demonym: "Barbadian" },
  barbados: { country: "Barbados", code: "BB", demonym: "Barbados" },

  // Historical and alternative names
  soviet: { country: "Russia", code: "RU", demonym: "Russian" },
  ussr: { country: "Russia", code: "RU", demonym: "Russian" },
  yugoslavian: { country: "Serbia", code: "RS", demonym: "Serbian" },
  "east german": { country: "Germany", code: "DE", demonym: "German" },
  "west german": { country: "Germany", code: "DE", demonym: "German" },
  burmese: { country: "Myanmar", code: "MM", demonym: "Burmese" },
  myanmar: { country: "Myanmar", code: "MM", demonym: "Burmese" },
};

/**
 * Transforms nationality input to country information
 * @param nationality - The nationality string to transform
 * @param options - Configuration options for the transformation
 * @returns Country information or null if not found
 */
export function nationalityToCountry(
  nationality: string,
  options: TransformOptions = {}
): CountryInfo | null {
  const { format = "full", caseSensitive = false, strict = false } = options;

  if (!nationality || typeof nationality !== "string") {
    return null;
  }

  // Normalize input
  const normalized = caseSensitive
    ? nationality.trim()
    : nationality.trim().toLowerCase();

  // Direct lookup
  const directMatch = NATIONALITY_TO_COUNTRY_MAP[normalized];
  if (directMatch) {
    return formatResult(directMatch, format);
  }

  // If strict mode, only allow exact matches
  if (strict) {
    return null;
  }

  // Fuzzy matching for common variations
  const fuzzyMatch = findFuzzyMatch(normalized);
  if (fuzzyMatch) {
    return formatResult(fuzzyMatch, format);
  }

  return null;
}

/**
 * Transforms country name to nationality/demonym
 * @param country - The country name to transform
 * @param options - Configuration options
 * @returns Nationality string or null if not found
 */
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

  // Search by country name
  for (const [_, value] of Object.entries(NATIONALITY_TO_COUNTRY_MAP)) {
    const countryName = caseSensitive
      ? value.country
      : value.country.toLowerCase();
    if (countryName === normalized) {
      return value.demonym;
    }
  }

  // If strict mode, only allow exact matches
  if (strict) {
    return null;
  }

  // Fuzzy matching
  const fuzzyMatch = findFuzzyMatchByCountry(normalized);
  return fuzzyMatch ? fuzzyMatch.demonym : null;
}

/**
 * Gets all available nationalities and their corresponding countries
 * @returns Array of all nationality-country mappings
 */
export function getAllNationalityMappings(): Array<{
  nationality: string;
  country: string;
  code: string;
  demonym: string;
}> {
  const unique = new Map<string, CountryInfo>();

  // Get unique countries (avoid duplicates from aliases)
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

/**
 * Validates if a nationality exists in the mapping
 * @param nationality - The nationality to validate
 * @param caseSensitive - Whether to perform case-sensitive validation
 * @returns Boolean indicating if nationality is valid
 */
export function isValidNationality(
  nationality: string,
  caseSensitive = false
): boolean {
  if (!nationality || typeof nationality !== "string") {
    return false;
  }

  const normalized = caseSensitive
    ? nationality.trim()
    : nationality.trim().toLowerCase();

  return (
    normalized in NATIONALITY_TO_COUNTRY_MAP ||
    findFuzzyMatch(normalized) !== null
  );
}

// Helper functions

function formatResult(
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

function getShortCountryName(fullName: string): string {
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

function findFuzzyMatch(input: string): CountryInfo | null {
  // Remove common prefixes/suffixes
  const cleaned = input
    .replace(/^(a |an |the )/i, "")
    .replace(/(ian|ean|ese|ish|er|i)$/i, "");

  // Try partial matches
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

function findFuzzyMatchByCountry(input: string): CountryInfo | null {
  for (const value of Object.values(NATIONALITY_TO_COUNTRY_MAP)) {
    const countryLower = value.country.toLowerCase();
    if (countryLower.includes(input) || input.includes(countryLower)) {
      return value;
    }
  }
  return null;
}

// Export types and functions
export type {
  CountryInfo,
  TransformOptions,
  NationalityMapping,
} from "./types";
