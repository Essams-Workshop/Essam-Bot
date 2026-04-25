export function GridBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="grid-bg absolute -inset-20 animate-floatGrid opacity-45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,231,255,0.14),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(53,231,255,0.08),transparent_42%)]" />
    </div>
  );
}
