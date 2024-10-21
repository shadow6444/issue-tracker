import { StatusBadge } from "@/app/components";
import { Table } from "@radix-ui/themes";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";

const IssueTable = async ({ searchParams, issues }) => {
  return (
    <Table.Root variant="surface" layout="auto">
      <Table.Header>
        <Table.Row>
          {colums.map((column) => (
            <Table.ColumnHeaderCell
              key={column.value}
              className={column.className}
            >
              <Link
                href={{
                  query: { ...searchParams, orderBy: column.value },
                }}
              >
                {column.value === searchParams.orderBy && (
                  <FaArrowUp className="inline " />
                )}
                {column.label}
              </Link>
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.Cell>
              <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
              <div className="block sm:hidden">
                <StatusBadge status={issue.status} />
              </div>
            </Table.Cell>
            <Table.Cell className="hidden sm:table-cell">
              <StatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden sm:table-cell">
              {issue.createdAt.toDateString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

const colums = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden sm:table-cell" },
  { label: "Created", value: "createdAt", className: "hidden sm:table-cell" },
];

export const columNames = colums.map((colum) => colum.value);

export default IssueTable;
