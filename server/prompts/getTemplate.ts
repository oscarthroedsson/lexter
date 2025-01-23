import { SchoolLevel, SchoolSubjects } from "@shared/school.types";
import { getMathTemplate } from "./templates/math";

export function getTemplate(subject: SchoolSubjects, level: SchoolLevel) {
  switch (subject) {
    case "matematik":
      return getMathTemplate(level);
      break;
    case "svenska":
      return "";
      break;
    case "engelska":
      return "";
      break;
    case "historia":
      return "";
      break;
    case "geografi":
      return "";
      break;
    case "biologi":
      return "";
      break;
    case "fysik":
      return "";
      break;
    case "kemi":
      return "";
      break;
    case "samhällskunskap":
      return "";
      break;
    case "religionskunskap":
      return "";
      break;
    case "idrott och hälsa":
      return "";
      break;
    case "musik":
      return "";
      break;
    case "bild":
      return "";
      break;
    case "slöjd":
      return "";
      break;
    case "naturkunskap":
      return "";
      break;
    case "kunskapsprov":
      return "";
      break;
    case "annat":
      return "";
      break;
    default:
      throw new Error("Subject not found");
  }
}
