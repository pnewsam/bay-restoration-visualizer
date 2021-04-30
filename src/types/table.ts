export type Column = string;

export interface Row {
  [fieldName: string]: string;
}

export interface TableConfiguration {
  fieldNameMappings: { [name: string]: string };
  fieldExclusions: string[];
}
