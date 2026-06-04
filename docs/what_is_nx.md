- Nx is basically a monorepo optimizer
- Polyrepo (multiple repo for a project) is cool until you have to deal with version management etc
- Monorepo (not, monolith though it could be, it's just that you will use 1 repo for the project) becomes a pain once a project reach a certain size, mostly about performance or building/dev pipeline
- Nx tries to solve that by providing
  - Hashing, caching for performance gain
  - Optional building step, building dependency steps
  - Graphing for managing dependency and debugging

### Typical Nx optimized project
- Project
  - apps
    - ...
  - libs
    - ...
  - nx.json (to configure building pipeline and nx related stuff)
  - gitignore, package.json and stuff etc

### Typical feature folder structure
- libs/
  - feature-name/
    - feature/
      - src/
        - lib/
          - ...
      - index.ts (exporting public items)
      - tsconfig and stuff

### Typical App folder structure
- apps/
  - src/
    - ...
  - index.html
  - project.json (for nx to know this is a project)
  - tsconfig and stuff

### Nx Commands
- `npx nx init`
- give minimal or guided nx installation

- `nx serve [app-name]`
- run local dev server

- `nx build [app-name]`
- build the app

- `nx graph`
- show nx graph, has dependencies and stuff

- `nx generate...`
- to generate presets for stuff like lib

---

### Common NX linting problem (at least with web storm IDE)
- TS6059, fixed by setting root dir in tsconfig to the actual root directory (for example '../../'), even though root dir in base config is already . it doesn't seem to work
- Lib Export issues, export * from... in index.ts (libs) only passes named exports, implementing it to an existing project would probably require you to change export default to just export for tsx components
