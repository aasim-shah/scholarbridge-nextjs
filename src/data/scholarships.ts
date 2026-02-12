// ── Scholarship type (synced with server) ───────────────────────────
export interface Scholarship {
  id: string;  // MongoDB ObjectId
  title: string;
  organization: string;
  country: string;
  level: string;
  field: string;
  category: string;
  deadline: string;
  description: string;
  link: string;
  amount?: string;
  currency?: string;
  is_verified?: number;
  source?: string;
  created_at?: string;
  updated_at?: string;
}

export interface PaginatedResponse {
  data: Scholarship[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FilterOptions {
  countries: string[];
  levels: string[];
  fields: string[];
  categories: string[];
}

export interface ScholarshipStats {
  totalScholarships: number;
  totalCountries: number;
  totalOrganizations: number;
  lastFetchedAt: string | null;
  lastFetchAdded: number;
}

// ── API Base URL ────────────────────────────────────────────────────
const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9003/api";

// ── API Helpers ─────────────────────────────────────────────────────

export async function fetchScholarships(params?: {
  country?: string;
  level?: string;
  field?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: "asc" | "desc";
}): Promise<PaginatedResponse> {
  const searchParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "" && value !== "all") {
        searchParams.set(key, String(value));
      }
    });
  }

  const res = await fetch(`${API_BASE}/scholarships?${searchParams.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch scholarships");
  return res.json();
}

export async function fetchScholarshipById(id: string): Promise<Scholarship> {
  const res = await fetch(`${API_BASE}/scholarships/${id}`);
  if (!res.ok) throw new Error("Scholarship not found");
  return res.json();
}

export async function fetchFilterOptions(): Promise<FilterOptions> {
  const res = await fetch(`${API_BASE}/scholarships/filters`);
  if (!res.ok) throw new Error("Failed to fetch filter options");
  return res.json();
}

export async function fetchStats(): Promise<ScholarshipStats> {
  const res = await fetch(`${API_BASE}/scholarships/stats`);
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
}

export async function createScholarship(
  data: Omit<Scholarship, "id" | "created_at" | "updated_at">
): Promise<{ id: string }> {
  const res = await fetch(`${API_BASE}/scholarships`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create scholarship");
  return res.json();
}

export async function updateScholarshipApi(
  id: string,
  data: Partial<Scholarship>
): Promise<void> {
  const res = await fetch(`${API_BASE}/scholarships/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to update scholarship");
}

export async function deleteScholarshipApi(id: string): Promise<void> {
  const res = await fetch(`${API_BASE}/scholarships/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete scholarship");
}

export async function triggerFetch(): Promise<void> {
  const res = await fetch(`${API_BASE}/fetch-now`, { method: "POST" });
  if (!res.ok) throw new Error("Failed to trigger fetch");
}

// ── Static categories for UI tabs ───────────────────────────────────
export const categories = [
  "Merit-Based",
  "Need-Based",
  "Research",
  "Sports",
  "Women in STEM",
  "International",
  "Government",
  "Private",
];

// These are now dynamically fetched but kept as empty defaults for imports
export const countries: string[] = [];
export const levels: string[] = [];
export const fields: string[] = [];

// Kept empty — data now comes from the API
export const scholarships: Scholarship[] = [];
