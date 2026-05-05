import { useState, useEffect } from "react";

/**
 * Generic async data fetching hook.
 * @param {Function} fetcher  - async function that returns { success, data, error }
 * @param {Array}    deps     - dependency array (re-runs when these change)
 */
export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetcher()
      .then((res) => {
        if (cancelled) return;
        if (res.success) setData(res.data);
        else setError(res.error || "An error occurred");
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const refetch = () => {
    setLoading(true);
    setError(null);
    fetcher()
      .then((res) => {
        if (res.success) setData(res.data);
        else setError(res.error || "An error occurred");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, refetch };
}

/**
 * Hook for form state management.
 */
export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues);
    setSubmitted(false);
  };

  return { values, setValues, handleChange, submitting, setSubmitting, submitted, setSubmitted, reset };
}

/**
 * Hook that returns true once the component has mounted (useful for SSR-safe animations).
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
