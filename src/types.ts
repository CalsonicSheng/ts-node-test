export type SampleType1 = number;

export type SampleType2 = (string | number)[];

export type SampleType3 = Array<string | number>;

// "&" only works on type alias and for OBJECT ONLY
export type SampleType4 = Complex['obj1'] & { c: string };

export type SampleType5 = { a: string; b: number };

// Unlike a type alias, THE SAME interface can be declared multiple times, and will be treated as a single interface undergoing "Declaration merging" (with properties are merged)
export interface Shape {
  width: SampleType1;
  length: SampleType1;
}

export interface Shape {
  height: SampleType1;
}

// you can refer interface into type alias as well
export type MoreShape = Shape & { volumn: number };

export interface Complex {
  obj1: {
    a: string;
    b: number;
  };
  // & also works inside the interface ON A SUB OBJECT (what a surprise) | it seems like "&" works on any JS OBJECT
  obj2: {
    c: string;
    d: number;
  } & { e: number };
}

export type Object1 = { a: string; b: number; c?: boolean };

// "extends" keywords can ONLY used on interface, but can incorporate both interface and type alias (very interesting discover)
export interface ObjectCombined extends Object1 {
  d: number;
}

// interface generic
export interface GenericInterface<T> {
  a: T;
  b: number;
}
