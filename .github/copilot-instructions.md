<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot / AI Agent Instructions (concise)

This small repo is a GitHub Pages personal website built with Jekyll configuration. The instructions below capture the essential project facts, developer workflows, and editing conventions an AI agent needs to be immediately productive.

* **Big picture:** Static site served by GitHub Pages. Source is repository root; Jekyll reads `_config.yml` and applies the configured theme ([`_config.yml`](../_config.yml)). The site currently contains a minimal `index.html` at the repository root ([`index.html`](../index.html)).

* **Primary files to inspect:**
  * **`_config.yml`**: Jekyll config and theme (`jekyll-theme-minimal`) — changes here affect site metadata and theme behavior.
  * **`index.html`**: current site entry point (very small). New pages can be added as `.html` or `.md` at repo root.
  * **`README.md`**: project description; not used by the site build.

* **Why this structure:** The repo is structured as a simple GitHub Pages site (no build tooling tracked). Expect authoring edits to be static HTML/Markdown and simple config changes.

* **Build / preview workflow (discoverable and reproducible):**
  * GitHub will build the site automatically on push (GitHub Pages).
  * For local preview (developer machines), assume standard Jekyll flow if needed:
    * Install Ruby, Bundler, Jekyll
    * Typical commands:
      * `bundle exec jekyll build` — builds `_site`
      * `bundle exec jekyll serve` — serve locally at `http://127.0.0.1:4000`
  * If you cannot assume Ruby tooling, limit changes to content (HTML/MD) and let GitHub Pages perform the build.

* **Editing conventions & patterns (observed):**
  * Add new pages at repository root as `.md` or `.html` — no `_posts` directory exists.
  * Keep site-wide settings in [`_config.yml`](../_config.yml); small metadata only (title, description, theme).
  * No JS/CSS build pipeline present; modifying templates or adding assets is manual.

* **Integration points & external dependencies:**
  * GitHub Pages (remote build). No CI configuration in repo.
  * Theme: `jekyll-theme-minimal` (declared in `_config.yml`). Customization requires Jekyll theme override patterns.

* **Safe change guidance for AI agents:**
  * Prefer minimal, reversible edits (small diffs to `index.html` or add a new `page.md`).
  * When adding new functionality, comment the commit message clearly (e.g., "site: add About page as about.md").
  * Do not attempt to install system dependencies or change user environment in the repo — document necessary commands instead.

* **Examples (explicit):**
  * To add a simple page, create `about.md` at root with front matter:

    ```markdown
    ---
    title: About
    ---

    Content here.
    ```

  * To update site title, edit [`_config.yml`](../_config.yml) `title:` value and push.

* **What not to assume:**
  * Do not assume a package manager, build script, or test suite exists (none are present).
  * Do not assume CI hooks or deploy scripts; rely on GitHub Pages.

If anything above is unclear or you want me to include repository-specific editing conventions (branch naming, PR etiquette, or a local dev Docker setup), tell me which details to add and I'll update this file.
