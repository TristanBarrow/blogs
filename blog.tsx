#!/usr/bin/env bun
import { render, Text, Box, useStdout } from "ink";
import { globSync } from "fs";
import { readFileSync } from "fs";
import { basename } from "path";

const STAGES = ["STUB", "RAW_RECORDING", "AI_PLAN", "HUMAN_PLAN", "AI_DRAFT", "FINAL", "UNKNOWN"] as const;
type Stage = (typeof STAGES)[number];

const STAGE_COLORS: Record<Stage, string> = {
  STUB: "gray",
  RAW_RECORDING: "red",
  AI_PLAN: "magenta",
  HUMAN_PLAN: "cyan",
  AI_DRAFT: "blue",
  FINAL: "green",
  UNKNOWN: "yellow",
};

function parseFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]+?)\n---/);
  if (!match) return { stage: "UNKNOWN" as Stage, title: null };
  const fm = match[1];
  const stageMatch = fm.match(/^stage:\s*(\S+)/m);
  const titleMatch = fm.match(/^title:\s*(.+)/m);
  return {
    stage: (stageMatch?.[1] ?? "UNKNOWN") as Stage,
    title: titleMatch?.[1]?.trim() ?? null,
  };
}

function loadArticles() {
  const files = globSync("articles/*.md");
  return files.map((f) => {
    const content = readFileSync(f, "utf8");
    const { stage, title } = parseFrontmatter(content);
    const slug = basename(f, ".md");
    return { slug, title: title ?? slug, stage };
  });
}

type Article = ReturnType<typeof loadArticles>[number];

function Row({ article, slugWidth, stageWidth }: { article: Article; slugWidth: number; stageWidth: number }) {
  const { stdout } = useStdout();
  const cols = stdout.columns ?? 120;
  const stage = article.stage as Stage;

  return (
    <Box width={cols}>
      <Box width={slugWidth + 2}><Text>{article.slug}</Text></Box>
      <Box width={stageWidth + 2}><Text color={STAGE_COLORS[stage]}>{stage}</Text></Box>
      <Text wrap="truncate-end">- {article.title}</Text>
    </Box>
  );
}

function ArticleList() {
  const articles = loadArticles();

  const rows = STAGES.flatMap((stage) =>
    articles
      .filter((a: Article) => a.stage === stage)
      .map((a: Article) => ({ ...a, stage }))
  );

  const slugWidth = Math.max(...rows.map((a) => a.slug.length));
  const stageWidth = Math.max(...STAGES.map((s) => s.length));

  return (
    <Box flexDirection="column">
      {rows.map((a) => (
        <Row key={a.slug} article={a} slugWidth={slugWidth} stageWidth={stageWidth} />
      ))}
    </Box>
  );
}

const { waitUntilExit } = render(<ArticleList />);
waitUntilExit().finally(() => process.stdout.write("\x1B[?25h"));
