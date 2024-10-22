import { Badge } from "@radix-ui/themes";

const statusMap = {
  OPEN: { label: "Open", color: "green" },
  IN_PROGRESS: { label: "In Progress", color: "orange" },
  CLOSED: { label: "Closed", color: "red" },
};

const StatusBadge = ({ status }) => {
  const { label, color } = statusMap[status];
  return <Badge color={color}>{label}</Badge>;
};

export default StatusBadge;
