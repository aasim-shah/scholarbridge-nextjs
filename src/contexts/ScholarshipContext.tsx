'use client';

import { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from "react";
import {
  Scholarship,
  FilterOptions,
  fetchScholarships,
  fetchFilterOptions,
  createScholarship,
  updateScholarshipApi,
  deleteScholarshipApi,
} from "@/data/scholarships";

interface ScholarshipStore {
  scholarships: Scholarship[];
  loading: boolean;
  error: string | null;
  filterOptions: FilterOptions;
  totalCount: number;
  currentPage: number;
  totalPages: number;
  refetch: (params?: Record<string, string | number>) => Promise<void>;
  addScholarship: (s: Omit<Scholarship, "id">) => Promise<void>;
  updateScholarship: (id: string, s: Partial<Scholarship>) => Promise<void>;
  deleteScholarship: (id: string) => Promise<void>;
}

const ScholarshipContext = createContext<ScholarshipStore | null>(null);

export function ScholarshipProvider({ children }: { children: ReactNode }) {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    countries: [],
    levels: [],
    fields: [],
    categories: [],
  });
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch scholarships from API
  const refetch = useCallback(async (params?: Record<string, string | number>) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchScholarships({
        limit: 100,
        ...params,
      });
      setScholarships(result.data);
      setTotalCount(result.pagination.total);
      setCurrentPage(result.pagination.page);
      setTotalPages(result.pagination.totalPages);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error("[ScholarshipContext] Fetch error:", err.message);
      setError("Unable to load scholarships. Please make sure the server is running.");
      setScholarships([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch filter options from API
  const loadFilterOptions = useCallback(async () => {
    try {
      const options = await fetchFilterOptions();
      setFilterOptions(options);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("[ScholarshipContext] Could not load filter options");
    }
  }, []);

  // Initial load
  useEffect(() => {
    refetch();
    loadFilterOptions();
  }, [refetch, loadFilterOptions]);

  const addScholarship = async (data: Omit<Scholarship, "id">) => {
    try {
      await createScholarship(data as any);
      await refetch();
      await loadFilterOptions();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const updateScholarship = async (id: string, data: Partial<Scholarship>) => {
    try {
      await updateScholarshipApi(id, data);
      await refetch();
      await loadFilterOptions();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  const deleteScholarship = async (id: string) => {
    try {
      await deleteScholarshipApi(id);
      await refetch();
      await loadFilterOptions();
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  return (
    <ScholarshipContext.Provider
      value={{
        scholarships,
        loading,
        error,
        filterOptions,
        totalCount,
        currentPage,
        totalPages,
        refetch,
        addScholarship,
        updateScholarship,
        deleteScholarship,
      }}
    >
      {children}
    </ScholarshipContext.Provider>
  );
}

export function useScholarships() {
  const ctx = useContext(ScholarshipContext);
  if (!ctx) throw new Error("useScholarships must be used within ScholarshipProvider");
  return ctx;
}
