const path = require("path");

const root = path.join(__dirname, "..");

function courseRel(inputPath) {
  return path.relative(root, path.resolve(inputPath)).replace(/\\/g, "/");
}

function permalinkFor(rel) {
  if (rel === "course/index.md") return "/";
  if (rel === "course/references.md") return "/references/";
  if (rel === "course/weeks/index.md") return "/weeks/";
  const week = rel.match(/^course\/weeks\/(\d{2})-/);
  if (week) return `/weeks/${week[1]}/`;
  if (rel.startsWith("course/processes/")) {
    return `/processes/${path.basename(rel, ".md")}/`;
  }
  if (rel.startsWith("course/tools/")) {
    return `/tools/${path.basename(rel, ".md")}/`;
  }
  if (rel.startsWith("course/")) {
    return `/${rel.slice("course/".length).replace(/\.md$/, "")}/`;
  }
  return;
}

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("site/_site/**");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("AGENTS.md");
  eleventyConfig.ignores.add(".github/**");
  eleventyConfig.ignores.add(".cursor/**");
  eleventyConfig.ignores.add("design/**");
  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("reference/**");
  eleventyConfig.ignores.add("package.json");
  eleventyConfig.ignores.add("package-lock.json");
  eleventyConfig.ignores.add("site/src/index.njk");

  eleventyConfig.addPassthroughCopy({
    "site/assets": "assets",
  });

  eleventyConfig.addCollection("weeks", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("./course/weeks/!(index).md")
      .sort((a, b) => (a.data.week || 0) - (b.data.week || 0))
  );

  eleventyConfig.addCollection("course", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("./course/**/*.md")
      .sort((a, b) => a.inputPath.localeCompare(b.inputPath))
  );

  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.permalink) return data.permalink;
      const input = data.page?.inputPath;
      if (!input) return;
      return permalinkFor(courseRel(input));
    },
  });

  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      linkify: true,
      typographer: true,
    })
  );

  const pathPrefix = "/almost-open/";

  eleventyConfig.addTransform("md-links", function (content) {
    if (!this.page?.outputPath?.endsWith(".html")) return content;
    const urlFilter = eleventyConfig.getFilter("url");
    return content.replace(
      /href="((?:\.\.\/)+|[.\/]*)([^"#]+)\.md(#[^"]*)?"/g,
      (match, prefix, target, hash) => {
        const fromDir = path.dirname(this.page.inputPath);
        const abs = path.resolve(fromDir, prefix + target + ".md");
        const rel = courseRel(abs);
        const permalink = permalinkFor(rel);
        if (!permalink) return match;
        return `href="${urlFilter(permalink)}${hash || ""}"`;
      }
    );
  });

  return {
    pathPrefix,
    dir: {
      input: ".",
      includes: "site/src/_includes",
      layouts: "site/src/_layouts",
      output: "site/_site",
      data: "site/src/_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
