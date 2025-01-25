export interface Teacher {
  name: string;
  subject: SchoolSubjects;
  image: string;
  thumbNail: string;
  avatar: string;
}
export type SchoolLevel = "lågstadiet" | "mellanstadiet" | "högstadiet" | "gymnasiet" | "universitet";
export type SchoolSubjects =
  | "matematik"
  | "svenska"
  | "engelska"
  | "historia"
  | "geografi"
  | "biologi"
  | "fysik"
  | "kemi"
  | "samhällskunskap"
  | "religionskunskap"
  | "idrott och hälsa"
  | "teknik"
  | "musik"
  | "bild"
  | "slöjd"
  | "naturkunskap"
  | "kunskapsprov"
  | "annat";
