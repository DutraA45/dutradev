export function FooterNote({ className }: { className?: string }) {
  return (
    <div className={className}>
      © {new Date().getFullYear()} Dutra.dev. All rights reserved.
    </div>
  );
}
