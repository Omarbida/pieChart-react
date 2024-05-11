export default function SegmentsList({ data, removeData }) {
  return (
    <div className="flex flex-col gap-2 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-2 bg-transparent border rounded-lg"
        >
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span>{item.title}</span>
            <span>{item.value + "%"}</span>
          </div>
          <button
            onClick={() => removeData(index)}
            className="btn btn-sm btn-ghost"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
