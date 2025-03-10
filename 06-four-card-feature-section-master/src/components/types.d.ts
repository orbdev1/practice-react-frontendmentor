export type Tool = {
  title: string;
  description: string;
  image: string;
};

export type ToolsProps = { tools: Tool[] };

export type CardProps = { tool: Tool };
