type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return (
    <>
      <div
        className={`rounded-lg overflow-hidden hover:shadow-lg transition-all hover:bg-slate-700/40 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
