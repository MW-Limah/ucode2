export const LANGUAGES_VERSIONS = {
  javascript: "22.14.0",
  typescript: "5.7.3",
  python: "3.13.2",
  java: "21.0.6",
  csharp: "13.0.0",
  php: "8.4.4",
};

export const CODE_SNIPPETS = {
  javascript: `function greet(name) {\n\tconsole.log("Hello " + name + "!");\n}\n\ngreet("World");\n`,
  typescript: `type Params = {\n\tname: string;\n};\n\nfunction greet(data: Params) {\n\tconsole.log("Hello " + data.name + "!");\n}\n\ngreet({ name: "World" });\n`,
  python: `def greet(name):\n\tprint(f"Hello {name}!")\n\ngreet("World")\n`,
  java: `public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp: `using System;\n\nnamespace HelloWorld\n{\n\tclass Program\n\t{\n\t\tstatic void Main(string[] args)\n\t\t{\n\t\t\tConsole.WriteLine("Hello World!");\n\t\t}\n\t}\n}\n`,
  php: `<?php\n\n$name = 'World';\necho "Hello " . $name . "!";\n`,
};
