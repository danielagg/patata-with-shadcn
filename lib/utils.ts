import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isDark = (theme: string, systemTheme: string) => {
  if (theme === "dark") return true;
  if (theme == "system" && systemTheme == "dark") return true;
  return false;
};

export const makeHttpGet = async <T>(
  path: string,
  authToken?: string
): Promise<T> => {
  const httpResponse = await fetch(`https://api.koople.io/api/v1${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `authorization_token=${authToken}`,
    },
  });

  if (httpResponse.ok) {
    return (await httpResponse.json()) as T;
  } else {
    throw Error(); // todo
  }
};

export const makeHttpPost = async <T>(
  path: string,
  body: any,
  authToken?: string
): Promise<T> => {
  const httpResponse = await fetch(`https://api.koople.io/api/v1${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: authToken ? `authorization_token=${authToken}` : "",
    },
    body: JSON.stringify(body),
  });

  if (httpResponse.ok) {
    return (await httpResponse.json()) as T;
  } else {
    throw Error(); // todo
  }
};
