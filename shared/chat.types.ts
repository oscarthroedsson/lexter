// Definiera StreamKeyMap och StreamKey först
export type StreamKeyMap = {
  "/chat": {
    message: string;
    response: string;
    bajsa: { name: string; bajs: string };
  };
  // Lägg till fler typer här
};

export type StreamKey = keyof StreamKeyMap;

// Klient-till-server händelser

export interface User {
  name: string;
  schoolLevel: string;
  image: string;
  thumbNail: string;
  avatar: string;
}
