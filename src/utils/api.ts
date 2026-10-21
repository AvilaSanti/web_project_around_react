import type { ApiOptions, UserData, CardData } from "../types/types.ts";

export class Api {
  private _baseUrl: string;
  private _headers: HeadersInit; 

  constructor(options: ApiOptions) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  private _checkResponse<T>(res: Response): Promise<T> {
    if (res.ok) {
      return res.json() as Promise<T>;
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  async getUserInfo(): Promise<UserData> {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    });
    return this._checkResponse<UserData>(res);
  }

  async getInitialCards(): Promise<CardData[]> {
    const res = await fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers
    });
    return this._checkResponse<CardData[]>(res);
  }

  async setUserInfo(name: string, about: string): Promise<UserData> {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about })
    });
    return this._checkResponse<UserData>(res);
  }

  async addNewCard(name: string, link: string): Promise<CardData> {
    const res = await fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link })
    });
    return this._checkResponse<CardData>(res);
  }

  async deleteCard(cardId: string): Promise<{ message: string }> {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers
    });
    return this._checkResponse<{ message: string }>(res);
  }

    async changeLikeStatus(cardId: string, isLiked: boolean): Promise<CardData> {
    const res = await fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers
    });
    return this._checkResponse<CardData>(res);
  }

  async updateAvatar(avatarUrl: string): Promise<UserData> {
    const res = await fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl })
    });
    return this._checkResponse<UserData>(res);
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "1eaf9652-2932-44d8-a79c-ecfad86225ae",
    "Content-Type": "application/json"
  }
});

export default api;