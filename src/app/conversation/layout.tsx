import AppToolbar from "./components/AppToolbar";
import Threads from "./components/Threads";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row h-[100%] w-[100%]">
      <div className="flex-1 dark bg-default/70 border border-default"><Threads /></div>
      <div className="flex-3">
        <div className='flex flex-col h-[100%] justify-between dark bg-default'>
          <AppToolbar />
          {children}
        </div>
      </div>

    </div>
  );
}