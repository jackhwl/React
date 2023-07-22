"use client";

import { useContext } from "react";
import { QueryContext } from "../contexts/query-provider";

export default function SessionsQuery() {
  const { query, setQuery } = useContext(QueryContext);

  return (
    <div className="input-group mb-1 mt-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
