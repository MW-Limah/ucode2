"use client";

import { useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";
import { executeCode } from "../../lib/executeCode";

export default function CodeEditor() {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [isLoading, setIsLoading] = useState(false);
  const [output, setOutput] = useState(null); // Para exibir o resultado depois

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (newLanguage) => {
    setLanguage(newLanguage);
    setValue(CODE_SNIPPETS[newLanguage]);
  };

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);

      const result = await executeCode(language, sourceCode);

      console.log("API result:", result);

      const run = result.run;

      setOutput(run?.stdout || run?.stderr || "No output");
    } catch (error) {
      console.error("Erro ao executar:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e]">
      <nav className="flex w-full justify-between items-center px-4 py-2 bg-white border-b border-gray-300">
        <LanguageSelector onSelect={onSelect} selectedLanguage={language} />

        <button
          onClick={runCode}
          disabled={isLoading}
          className={`flex items-center gap-2 text-black px-3 py-1 rounded transition-colors cursor-pointer ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          {isLoading ? "Running..." : <CiPlay1 size={18} />}
        </button>
      </nav>

      <div className="flex flex-row flex-1 overflow-hidden">
        <div className="flex-1">
          <Editor
            height="100%"
            theme="vs-dark"
            language={language}
            value={value}
            onChange={(newValue) => setValue(newValue || "")}
            onMount={onMount}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>

        {/* Sugestão: Painel lateral de Output */}
        <div className="w-1/3 bg-[#0f0f0f] text-gray-300 p-4 font-mono text-sm border-l border-gray-700 overflow-auto">
          <h3 className="text-gray-500 mb-2 uppercase text-xs font-bold">
            Output:
          </h3>
          {output ? (
            <pre className="whitespace-pre-wrap">{output}</pre>
          ) : (
            'Click "Run" to see the output here...'
          )}
        </div>
      </div>
    </div>
  );
}
