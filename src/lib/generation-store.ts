import { images, type TabId } from "./mock-data";

export type GenerationResult = {
  tab: TabId;
  tabLabel: string;
  type: string;
  style: string;
  notes: string;
  before: string;
  after: string;
  createdAt: string;
};

const KEY = "lastGeneration";

export function saveGeneration(result: GenerationResult) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(result));
  } catch {
    /* ignore */
  }
}

export function loadGeneration(): GenerationResult | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as GenerationResult) : null;
  } catch {
    return null;
  }
}

export function mockPair(tab: TabId, uploaded?: string | null) {
  if (tab === "landscape")
    return { before: uploaded ?? images.landscapeBefore, after: images.landscapeAfter };
  if (tab === "facade")
    return { before: uploaded ?? images.facadeBefore, after: images.facadeAfter };
  return { before: uploaded ?? images.interiorBefore, after: images.interiorAfter };
}
