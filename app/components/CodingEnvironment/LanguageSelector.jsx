import { LANGUAGES_VERSIONS } from "../../constants";

const languages = Object.entries(LANGUAGES_VERSIONS);

const LanguageSelector = ({ onSelect, selectedLanguage }) => {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-sm font-medium text-gray-700">Language:</h2>

      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-1.5 outline-none cursor-pointer capitalize"
        onChange={(e) => onSelect(e.target.value)}
        value={selectedLanguage}
      >
        {languages.map(([lang, version]) => (
          <option key={lang} value={lang} className="capitalize">
            {lang}({version})
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
