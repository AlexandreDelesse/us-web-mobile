// utils/caseTransform.ts
function toCamelCase(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function toCamelCaseKeys(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(toCamelCaseKeys);
  } else if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[toCamelCase(key)] = toCamelCaseKeys(value);
      return acc;
    }, {} as any);
  } else {
    return obj;
  }
}
