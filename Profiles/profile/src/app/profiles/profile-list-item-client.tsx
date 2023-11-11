"use-client";

import { QueryContext } from "@/src/app/contexts/query-provider";
import { ReactNode, useContext } from "react";


export default function ProfileListItemClient({
    children, title
}: {children: React.ReactNode; title: string;}) {
    
    const { query } = useContext(QueryContext);
    return title.toLowerCase().includes("query") ? (
        <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-items-stretch">{children}</div>) : null
}