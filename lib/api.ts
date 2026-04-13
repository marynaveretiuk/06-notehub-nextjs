import axios from "axios";
import type { CreateNoteData, FetchNotesResponse, Note } from "@/types/note";

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
  const { data } = await api.get("", {
    params: {
      search,
      page,
    },
  });

  return data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const { data } = await api.get(`/${id}`);
  return data;
}

export async function createNote(note: CreateNoteData): Promise<Note> {
  const { data } = await api.post("", note);
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await api.delete(`/${id}`);
  return data;
}
