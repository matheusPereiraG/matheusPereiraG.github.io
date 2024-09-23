type ChipProps = {
  className?: string;
  name: string;
};

export default function Chip({ className, name }: ChipProps) {
  return (
    <>
      <div className={`rounded-full overflow-hidden bg-cyan-400/10 p-2 ${className}`}>
        <p className="text-xs font-normal text-cyan-300">{name}</p>
      </div>
    </>
  );
}
