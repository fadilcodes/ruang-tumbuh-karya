export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Layout untuk grup (auth) GAK PERLU tag <html> atau <body>
  // Cukup return children-nya, bisa dibungkus <div>/section
  return (
    <section>
      {children}
    </section>
  );
}