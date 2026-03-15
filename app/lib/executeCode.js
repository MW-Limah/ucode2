import axios from "axios";
import { LANGUAGES_VERSIONS } from "../constants";

export const executeCode = async (language, sourceCode) => {
  const response = await axios.post("/api/execute", {
    language,
    version: LANGUAGES_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });

  return response.data;
};
