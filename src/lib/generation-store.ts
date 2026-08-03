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
  if (tab === "exterior") return { before: uploaded ?? images.exteriorBefore, after: images.exteriorAfter };
  if (tab === "plan") return { before: uploaded ?? images.planBefore, after: images.planAfter };
  return { before: uploaded ?? images.interiorBefore, after: images.interiorAfter };
}
