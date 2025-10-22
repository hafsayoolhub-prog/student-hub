const StatusCard = ({stats}) => {
  return (
    <div className="bg-white border rounded-2xl flex justify-between items-center gap-8 p-4">
      <div className={`p-2 rounded-full ${stats.colorClass}`}>
        <stats.icon />
      </div>
      <p className="">{stats.title || "Pending"}</p>
      <h4 className="text-2xl">{stats.number}</h4>
    </div>
  );
};

export default StatusCard;
