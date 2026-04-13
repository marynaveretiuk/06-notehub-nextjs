import axios from "axios";
import type { Note } from "@/types/note";
import type { FetchNotesResponse } from "@/types/api";
import type { CreateNoteData } from "@/types/note";

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api/notes",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export async function fetchNotes(
  search: string,
  page: number,
): Promise<FetchNotesResponse> {
  const { data } = await api.get<FetchNotesResponse>("", {
    params: { search, page },
  });
  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await api.get<Note>(`/${id}`);
  return data;
}

export async function createNote(note: CreateNoteData): Promise<Note> {
  const { data } = await api.post<Note>("", note);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await api.delete<Note>(`/${id}`);
  return data;
}
