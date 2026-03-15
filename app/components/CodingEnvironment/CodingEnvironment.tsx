import LessonPanel from "./LessonPanel";
import CodeEditor from "./CodeEditor";
import Output from "./Output";

export default function CodingEnvironment() {
  return (
    <div className="flex flex-col h-full p-4 gap-4 bg-gray-50">
      <div className="flex flex-1 gap-4 min-h-0">
        <section className="flex-1 border border-gray-300 bg-white rounded shadow-sm overflow-auto">
          <LessonPanel />
        </section>
        <section className="flex-1 border border-gray-300 bg-white rounded shadow-sm overflow-hidden">
          <CodeEditor />
        </section>
      </div>
      <footer className="h-1/3 border border-gray-300 bg-gray-900 rounded shadow-sm">
        <Output />
      </footer>
    </div>
  );
}
