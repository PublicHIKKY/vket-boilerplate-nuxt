#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const targetArg = process.argv[2]; // "all" or undefined
const layersDir = path.join(__dirname, "..", "layers");
const rootDir = path.join(__dirname, "..");

// Helper to remove folder/file safely
function rmSync(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  }
}

// Determine targets
let targets = [];
if (targetArg === "all") {
  targets.push(rootDir);
} else {
  if (fs.existsSync(layersDir)) {
    targets = fs.readdirSync(layersDir).map(name => path.join(layersDir, name));
  }
}

// Remove node_modules and bun.lock
for (const dir of targets) {
  const nm = path.join(dir, "node_modules");
  const lock = path.join(dir, "bun.lock");
  rmSync(nm);
  rmSync(lock);
}

// Run bun install
console.log("Installing dependencies with bun...");
try {
  execSync("bun install --ignore-scripts", { stdio: "inherit" });
  console.log("✅ Clean install completed!");
} catch (err) {
  console.error("❌ Bun install failed:", err.message);
  process.exit(1);
}
