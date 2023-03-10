// General types

let anything: any;
let bool: true | false;
let num: number;
let str: string;
let strArr: string[];
let unknown: unknown;
let never: never;
let callback: Promise<void>;
let noReturns: void;

// Literals

let f: 24 = 24;
let a: {
  id: number;
} = {
  id: 7,
};

//? Index signatures => idxSign debe ser un object con key tipo string y value string o number[].

export function indexSignatures(idxSign?: {
  [key: number]: string | number[];
}): boolean {
  return idxSign ? true : false;
}

//? Enums

export enum TYPES {
  STRING,
  NUMBER,
  BOOLEAN,
  ARRAY,
}

//? Call signatures => Para funciones.

type Log = (msg?: string, userId?: number) => boolean;

// No es necesario pasarle argumentos acá, a menos que vayan a usarse y sí o sí deben coincidir con los de Log.
export const logFunction: Log = (msg?: string, userId?: number) => {
  return msg ? true : false;
};