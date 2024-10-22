"use client";

import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

const IssueStatusFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const statuses = [
    { label: "All", value: null },
    { label: "Open", value: "OPEN" },
    { label: "In Progress", value: "IN_PROGRESS" },
    { label: "Closed", value: "CLOSED" },
  ];

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || null}
      onValueChange={(status) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        const orderBy = searchParams.get("orderBy");
        if (orderBy) params.append("orderBy", orderBy);
        const query = params.size ? "?" + params.toString() : "";
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || null}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
