/**
 * Country information interface
 */
export interface CountryInfo {
  /** Full country name */
  country: string;
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  /** Official demonym/nationality */
  demonym: string;
}

/**
 * Configuration options for transformation functions
 */
export interface TransformOptions {
  /** Output format for country name */
  format?: "full" | "short" | "code";
  /** Whether matching should be case-sensitive */
  caseSensitive?: boolean;
  /** If true, only exact matches are allowed (no fuzzy matching) */
  strict?: boolean;
}

/**
 * Nationality mapping result for getAllNationalityMappings
 */
export interface NationalityMapping {
  /** Nationality in lowercase */
  nationality: string;
  /** Full country name */
  country: string;
  /** ISO 3166-1 alpha-2 country code */
  code: string;
  /** Official demonym */
  demonym: string;
}
