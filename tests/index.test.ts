import {
  nationalityToCountry,
  countryToNationality,
  getAllNationalityMappings,
  isValidNationality,
} from "../src/index";

describe("nationalityToCountry", () => {
  test("should transform basic nationalities correctly", () => {
    expect(nationalityToCountry("American")).toEqual({
      country: "United States",
      code: "US",
      demonym: "American",
    });

    expect(nationalityToCountry("british")).toEqual({
      country: "United Kingdom",
      code: "GB",
      demonym: "British",
    });

    expect(nationalityToCountry("Japanese")).toEqual({
      country: "Japan",
      code: "JP",
      demonym: "Japanese",
    });
  });

  test("should handle aliases and variations", () => {
    expect(nationalityToCountry("USA")).toEqual({
      country: "United States",
      code: "US",
      demonym: "American",
    });

    expect(nationalityToCountry("UK")).toEqual({
      country: "United Kingdom",
      code: "GB",
      demonym: "British",
    });

    expect(nationalityToCountry("Aussie")).toEqual({
      country: "Australia",
      code: "AU",
      demonym: "Australian",
    });
  });

  test("should respect format options", () => {
    expect(nationalityToCountry("German", { format: "code" })).toEqual({
      country: "DE",
      code: "DE",
      demonym: "German",
    });

    expect(nationalityToCountry("United States", { format: "short" })).toEqual({
      country: "US",
      code: "US",
      demonym: "American",
    });
  });

  test("should handle case sensitivity", () => {
    expect(nationalityToCountry("FRENCH", { caseSensitive: false })).toEqual({
      country: "France",
      code: "FR",
      demonym: "French",
    });

    expect(nationalityToCountry("FRENCH", { caseSensitive: true })).toBeNull();
  });

  test("should handle strict mode", () => {
    expect(nationalityToCountry("Germa", { strict: true })).toBeNull();
    expect(nationalityToCountry("Germa", { strict: false })).toEqual({
      country: "Germany",
      code: "DE",
      demonym: "German",
    });
  });

  test("should return null for invalid input", () => {
    expect(nationalityToCountry("")).toBeNull();
    expect(nationalityToCountry("   ")).toBeNull();
    expect(nationalityToCountry("InvalidNationality")).toBeNull();
  });

  test("should handle historical names", () => {
    expect(nationalityToCountry("Soviet")).toEqual({
      country: "Russia",
      code: "RU",
      demonym: "Russian",
    });

    expect(nationalityToCountry("Czechoslovakian")).toEqual({
      country: "Czech Republic",
      code: "CZ",
      demonym: "Czech",
    });
  });
});

describe("countryToNationality", () => {
  test("should transform country names to nationalities", () => {
    expect(countryToNationality("United States")).toBe("American");
    expect(countryToNationality("Japan")).toBe("Japanese");
    expect(countryToNationality("Germany")).toBe("German");
  });

  test("should handle case insensitivity", () => {
    expect(countryToNationality("france")).toBe("French");
    expect(countryToNationality("ITALY")).toBe("Italian");
  });

  test("should handle case sensitivity when enabled", () => {
    expect(countryToNationality("FRANCE", { caseSensitive: true })).toBeNull();
    expect(countryToNationality("France", { caseSensitive: true })).toBe(
      "French"
    );
  });

  test("should return null for invalid input", () => {
    expect(countryToNationality("")).toBeNull();
    expect(countryToNationality("InvalidCountry")).toBeNull();
  });
});

describe("getAllNationalityMappings", () => {
  test("should return array of nationality mappings", () => {
    const mappings = getAllNationalityMappings();

    expect(Array.isArray(mappings)).toBe(true);
    expect(mappings.length).toBeGreaterThan(50);

    const usMapping = mappings.find((m) => m.code === "US");
    expect(usMapping).toEqual({
      nationality: "american",
      country: "United States",
      code: "US",
      demonym: "American",
    });
  });

  test("should not contain duplicates", () => {
    const mappings = getAllNationalityMappings();
    const codes = mappings.map((m) => m.code);
    const uniqueCodes = [...new Set(codes)];

    expect(codes.length).toBe(uniqueCodes.length);
  });
});

describe("isValidNationality", () => {
  test("should validate known nationalities", () => {
    expect(isValidNationality("American")).toBe(true);
    expect(isValidNationality("british")).toBe(true);
    expect(isValidNationality("Japanese")).toBe(true);
    expect(isValidNationality("aussie")).toBe(true);
  });

  test("should reject unknown nationalities", () => {
    expect(isValidNationality("Martian")).toBe(false);
    expect(isValidNationality("InvalidNationality")).toBe(false);
    expect(isValidNationality("")).toBe(false);
  });

  test("should handle case insensitivity", () => {
    expect(isValidNationality("AMERICAN")).toBe(true);
    expect(isValidNationality("american")).toBe(true);
    expect(isValidNationality("American")).toBe(true);
  });

  test("should handle fuzzy matching", () => {
    expect(isValidNationality("Germa")).toBe(true); // Fuzzy match for German
    expect(isValidNationality("Fren")).toBe(true); // Fuzzy match for French
  });
});

describe("Edge cases and error handling", () => {
  test("should handle null and undefined inputs", () => {
    expect(nationalityToCountry(null as any)).toBeNull();
    expect(nationalityToCountry(undefined as any)).toBeNull();
    expect(countryToNationality(null as any)).toBeNull();
    expect(countryToNationality(undefined as any)).toBeNull();
  });

  test("should handle non-string inputs", () => {
    expect(nationalityToCountry(123 as any)).toBeNull();
    expect(nationalityToCountry({} as any)).toBeNull();
    expect(countryToNationality(123 as any)).toBeNull();
    expect(countryToNationality({} as any)).toBeNull();
  });

  test("should handle whitespace-only inputs", () => {
    expect(nationalityToCountry("   ")).toBeNull();
    expect(countryToNationality("   ")).toBeNull();
  });
});
