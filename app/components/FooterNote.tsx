export function FooterNote({ className }: { className?: string }) {
  return (
    <p className={className}>© {new Date().getFullYear()} Jefferson Dutra</p>
  );
}
