export function Cards({ nameResult }: { nameResult: { name: string }[] }) {
  return (
    <div>
      {nameResult.map((prev: { name: string }, id: number) => (
        <div key={id}>
          <span>{prev.name}</span>
        </div>
      ))}
    </div>
  );
}
