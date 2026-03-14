import CodingEnvironment from "./components/CodingEnvironment/CodingEnvironment";
import Navbar from "./components/Navbar/Navbar";
import UserNotepad from "./components/UserNotepad/UserNotepad";

export default function Home() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <aside className="flex flex-col justify-between w-60 border-r border-gray-300 bg-white">
        <div className="p-4 font-bold italic">Logo e Módulos</div>
        <div className="p-4 border-t border-gray-300 text-sm">
          Configurações, termos...
        </div>
      </aside>
      <div className="flex flex-col flex-1">
        <header className="h-20 border-b border-gray-300">
          <Navbar />
        </header>
        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            <CodingEnvironment />
          </main>
          <aside className="w-80 border-l border-gray-300 bg-white">
            <UserNotepad />
          </aside>
        </div>
      </div>
    </div>
  );
}
