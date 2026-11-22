import StatusBadge from "./StatusBadge";

interface Props {
  title: string;
  status: string;
  version: string;
  countLabel: string;
  count: string;
}

function ServiceCard({
  title,
  status,
  version,
  countLabel,
  count,
}: Props) {
  return (
    <div className="card">

      <h2>{title}</h2>

      <p>
        <strong>Status:</strong>{" "}
        <StatusBadge status={status} />
      </p>

      <p>
        <strong>Version:</strong> {version}
      </p>

      <p>
        <strong>{countLabel}:</strong> {count}
      </p>

    </div>
  );
}

export default ServiceCard;
