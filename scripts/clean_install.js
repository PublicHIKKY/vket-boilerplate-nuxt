#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// ---- Color helpers ----
const colors = {
  reset: "\x1b[0m",
  gray: "\x1b[90m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
};
const log = {
  info: msg => console.log(`${colors.cyan}ℹ${colors.reset} ${msg}`),
  warn: msg => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  done: msg => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  file: msg => console.log(`${colors.gray}  ↳ ${msg}${colors.reset}`),
};

// ---- Config ----
const targetArg = process.argv[2]; // "all" or undefined
const layersDir = path.join(__dirname, "..", "layers");
const rootDir = path.join(__dirname, "..");

// ---- Helpers ----
function rmSync(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    log.file(`🗑️ Removed ${path.relative(rootDir, target)}`);
  }
}

function cleanRecursively(dir) {
  if (!fs.existsSync(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules") {
        log.info(`Deleting node_modules in ${path.relative(rootDir, dir)}`);
        rmSync(fullPath);
        continue;
      }
      cleanRecursively(fullPath);
    } else if (entry.isFile() && entry.name === "bun.lock") {
      log.info(`Deleting bun.lock in ${path.relative(rootDir, dir)}`);
      rmSync(fullPath);
    }
  }
}

// ---- Determine targets ----
let targets = [];
if (targetArg === "all") {
  targets.push(rootDir);
} else if (fs.existsSync(layersDir)) {
  targets = fs
    .readdirSync(layersDir)
    .map(name => path.join(layersDir, name))
    .filter(p => fs.statSync(p).isDirectory());
}

// ---- Clean process ----
console.log(`${colors.bold}🧹 Clean install started...${colors.reset}`);

for (const dir of targets) {
  console.log(`\n${colors.cyan}→ Cleaning: ${path.relative(rootDir, dir) || '.'}${colors.reset}`);
  cleanRecursively(dir);
}

// ---- Install ----
console.log(`\n${colors.bold}${colors.cyan}📦 Installing dependencies with bun...${colors.reset}`);
try {
  execSync("bun install --ignore-scripts", { stdio: "inherit" });
  log.done("Clean install completed successfully!");
} catch (err) {
  console.error(`${colors.red}❌ Bun install failed:${colors.reset} ${err.message}`);
  process.exit(1);
}
