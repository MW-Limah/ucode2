"use client";

import { useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";
export default function CodeEditor() {
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (newLanguage) => {
    setLanguage(newLanguage);
    setValue(CODE_SNIPPETS[newLanguage]);
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e]">
      <nav className="flex w-full justify-between items-center px-4 py-2 bg-white border-b border-gray-300">
        <LanguageSelector onSelect={onSelect} selectedLanguage={language} />

        <button
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
          onClick={() => console.log("Executando código:", value)}
        >
          <span className="text-sm font-semibold">Run</span>
          <CiPlay1 size={18} />
        </button>
      </nav>

      <div className="flex-1">
        <Editor
          height="100%"
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
    </div>
  );
}
