export default function Dot({ focus = false }) {
  const color = focus ? "bg-[#111A40]" : "bg-[#ADB5CD]";
  return <div className={`h-3 w-3 rounded-md ${color}`}></div>;
}
