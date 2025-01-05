import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sm:flex justify-between">
          <div className="">LeftBar</div>
          <div className="">{children}</div>
          <div className="">RightBar</div>
        </div>
      </body>
    </html>
  );
}
