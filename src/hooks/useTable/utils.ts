export const deriveColumns = ({
  datum,
  exclusions,
  displayNameMapping,
}: {
  datum: { [name: string]: string };
  exclusions: string[];
  displayNameMapping: { [name: string]: string };
}): string[] =>
  Object.keys(datum)
    .filter((name) => !exclusions.includes(name))
    .map((name) => displayNameMapping[name]);
