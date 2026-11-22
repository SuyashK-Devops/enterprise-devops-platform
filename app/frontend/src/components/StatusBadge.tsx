type StatusBadgeProps = {
  status: string;
};

function StatusBadge({ status }: StatusBadgeProps) {

  let emoji = "🟡";

  if (status === "UP") {
    emoji = "🟢";
  } else if (status === "DOWN") {
    emoji = "🔴";
  }

  return (
    <span>
      {emoji} {status}
    </span>
  );
}

export default StatusBadge;
