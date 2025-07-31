# FF-GardenFn

> `// Welcome to my open interface.`  
> `// Please do not think of this as you think of a repo but as a function.`

![Build Status](https://img.shields.io/badge/state-experimental-orange)  
![License](https://img.shields.io/badge/license-MIT-informational)  
![Type](https://img.shields.io/badge/repo-functional--garden-8A2BE2) 
![Focus](https://img.shields.io/badge/Currently_Focused_On-AI_Alignment_&_STC-blueviolet)
![Last Commit](https://img.shields.io/github/last-commit/FF-GardenFn/FF-GardenFn)


**FF-GardenFn** is a callable, ever-evolving "function" that surfaces curated experiments, unfinished thoughts, and executable insight fragments from Faycal Farhat's hyperstack.

---

## Table of Contents

1. [Projects](#projects)
2. [Structure](#structure)  
3. [Philosophy](#philosophy)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [License](#license)  

---

## 🌱 Projects

The garden contains various projects at different stages of growth, from early experimental seeds to fully bloomed petals:

### Featured Research: PrincipiaDynamica & Constitutional Dynamics

My current primary focus is **PrincipiaDynamica**, a research initiative developing **State Transition Calculus (STC)** — a novel mathematical framework for modeling dynamic, evolving systems. Its core application is AI alignment monitoring, but the theoretical reach spans complex systems, behavioral drift, and recursive optimization.

A major outcome of this work is the Python package **`constitutional-dynamics`** (PyPI: `constitutional-dynamics`):
- Implements STC to detect alignment drift in LLM behavior over time.
- Provides a real-time scoring model for robustness, trajectory shifts, and latent behavioral instability.
- Complements approaches like Constitutional AI by offering **continuous behavioral oversight**—a radar to QK/OV's microscope.

🔗 **Explore the full framework**: [github.com/FF-GardenFn/principiadynamica](https://github.com/FF-GardenFn/principiadynamica)

> **Repo Integration**
> - `/roots/`: STC theory and foundational logic live here.
> - `/petals/`: `constitutional-dynamics` has bloomed as a polished Python package.
> - `/docs/`: Development notes, theoretical essays, and philosophical meditations.

### Other Projects in the Garden

#### 🌱 Seeds (Early Explorations)
- **Semantics**: Experiments in semantic analysis and understanding, exploring how meaning is constructed and interpreted in language and code.
- **Morphology**: Research on attention mechanisms and visualization techniques, examining the structure and form of neural network attention.

#### 🌿 Roots (Foundational Tools)
- **Transmuter Project**: A code transformation toolkit that provides the foundation for many other projects, enabling programmatic manipulation of source code.
- **CodeViz**: Visualization tools for code analysis, focusing on semantic relationships and structural patterns in codebases.

#### 🌸 Petals (Polished Applications)
- **Personalized News Bot**: An AI-driven news aggregation system that adapts to individual preferences and information needs.
- **Constitutional Dynamics**: The Python package implementing STC for AI alignment monitoring (part of PrincipiaDynamica).

In this garden:
- Concepts like **semantic similarity** and **cosine distance** (from `codeviz`) are contextualized and expanded in `/docs/semantic_patterns.md`.
- The **philosophy of information** and the need for personalization (as seen in `personalized-news-bot`) is explored in `/docs/information_entropy.md`.
- Future essays will also link **constitutional AI**, **dynamic ethics**, and **self-healing architectures** to the STC lineage.

Ideas sprout in one project, bloom in another, and compost into future insight.

---

## Structure

The repository mimics a living garden—each folder plays a distinct role in the lifecycle of an idea:

- **`/seeds/`** — Sketchpad-level code, napkin logic, quantum seeds.  
- **`/roots/`** — Foundational ideas with broad public utility.  
- **`/petals/`** — Beautifully executed micro-tools or polished documents.  
- **`/withered/`** — Deprecated ideas or self-roasts (pruning matters).  
- **`/docs/`** — Documentation, "thinking aloud" essays, and process notes.  
- **`/tests/`** — Validation frameworks and experimental metrics.  
- **`/meta/`** — Metadata about the garden itself.

---

## Philosophy

This project is **alive**—raw, unpolished, and constantly growing.  
- **Forks** are encouraged, **mirrors** are expected.  
- But remember: *a garden thrives on care, not mere cloning.*  

---

## Getting Started

Visit the interactive garden visualization at [ff-gardenfn.github.io/FF-GardenFn](https://ff-gardenfn.github.io/FF-GardenFn) to explore the projects in a 3D environment.

Or clone the garden and explore locally:

```bash
git clone https://github.com/FF-GardenFn/FF-GardenFn.git
cd FF-GardenFn
```

### Running the Garden Visualization Locally

To run the interactive garden visualization locally:

```bash
cd docs/site
npm install
npm run dev
```

The development server will start and automatically open in your browser.

---

## Usage

### Calling the Function

Treat the repo as an interface rather than a static library. For example, you might:

```bash
# Example: run a specific "petal" microtool
python petals/example_tool.py --help
```

Tip: Browse the `/seeds/`, `/roots/`, and `/petals/` folders to discover new experiments and insights.

---

## Deployment

The garden visualization is automatically deployed to GitHub Pages through GitHub Actions. The deployment happens on every push to the main branch.

### Manual Deployment

To deploy manually or to other platforms:

```bash
cd docs/site
npm run build
# The static files will be in the `out/` directory
```

The site is configured for static export and can be deployed to any static hosting platform (Vercel, Netlify, etc.).

---

## Contributing

1. Fork the repository.
2. Branch your changes (`git checkout -b feature/my-new-idea`).
3. Commit with clear messages.
4. Push to your fork and open a Pull Request.

All levels of contribution are welcome—whether it's a new seed, a fresh petal, or thoughtful pruning in `/withered/`.

---

## License

This project is licensed under the MIT + No Ego License. Use it. Improve it. Don't DM me if you break the universe.

---

**Created and maintained by [Faycal Farhat](https://github.com/FF-GardenFn)**