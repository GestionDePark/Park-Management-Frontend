const createWithStorage = (storage: Storage) => {
  return {
    set(key: string, value: unknown): void {
      if (typeof value === 'string') {
        storage.setItem(key, String(value));
      } else {
        storage.setItem(key, JSON.stringify(value));
      }
    },
    get<T>(key: string): T {
      const data: string | null = storage.getItem(key);
      try {
        const obj = JSON.parse(data || 'null') as T;
        if (typeof obj === 'string') {
          try {
            return JSON.parse(obj) as T;
          } catch (_) {
            return data as T;
          }
        }
      } catch (e) {
        return data as T;
      }
      return data as T;
    },
    remove(key: string): void {
      storage.removeItem(key);
    },
    clear(): void {
      storage.clear();
    },
  };
};

interface CookieOptions {
  expires?: number;
  path?: string;
}

const setCookie = (
  name: string,
  value: string,
  { expires = 5, path = '/' }: CookieOptions,
): void => {
  const expiration: Date = new Date();
  expiration.setTime(expiration.getTime() + expires * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expiration.toUTCString()};path=${path}`;
};

type CookieRaw = `${string}=${string}`;
function getCookie(name: string): string | null {
  const cookies: CookieRaw[] = document.cookie.split('; ') as CookieRaw[];
  const cookiePattern: RegExp = new RegExp(`${name}=(?<value>(.*))`);
  for (const cookie of cookies) {
    const matcher: RegExpMatchArray | null = cookie.match(cookiePattern);
    if (matcher != null && matcher.groups != undefined) {
      return matcher?.groups.value;
    }
  }
  return null;
}

const storage = {
  local: createWithStorage(localStorage),
  session: createWithStorage(sessionStorage),
  cookie: {
    set: setCookie,
    get: getCookie,
  },
};

export { type CookieOptions };
export default storage;
