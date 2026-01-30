import { cn } from "../lib/utils";

const statusConfig = {
  pending: {
    label: "Pending",
    className: "bg-status-pending text-status-pending-foreground",
  },
  accepted: {
    label: "Accepted",
    className: "bg-status-accepted text-status-accepted-foreground",
  },
  rejected: {
    label: "Rejected",
    className: "bg-status-rejected text-status-rejected-foreground",
  },
  "in-review": {
    label: "In Review",
    className: "bg-status-review text-status-review-foreground",
  },
  verified: {
    label: "Verified",
    className: "bg-status-accepted text-status-accepted-foreground",
  },
  draft: {
    label: "Draft",
    className: "bg-muted text-muted-foreground",
  },
  published: {
    label: "Published",
    className: "bg-status-accepted text-status-accepted-foreground",
  },
};

export function StatusBadge({ status, className }) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
