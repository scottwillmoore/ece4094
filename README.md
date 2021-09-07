# ECE4094

## Overview

Collaborative circuit schematic capture and simulation with conflict-free
replicated data types.

## Plan

The current plan is subject to change, however it will roughly follow this process:

1. Develop a JSON-based model for a schematic document.

   _Make sure that the model can easily be modified to use [Y.js](https://docs.yjs.dev/). Provided that the model is JSON-based this should be relatively easy. It would be wise to avoid a class-based structure to ensure that references are acyclic._

2. Implement a rough API to manipulate the JSON-based model.

3. Implement a user-interface backend to manipulate the JSON-based model.

   _This could be using [React.js](https://reactjs.org/) or another framework such as [Vue.js](https://vuejs.org/) or [Solid.js](https://www.solidjs.com/). It should be designed in a way that the user-interface could, in theory, be swapped out with another implementation._

4. Iterate and refine this core concept.

5. Attempt to compile [NGSPICE](http://ngspice.sourceforge.net/), an open-source [SPICE simulator](https://en.wikipedia.org/wiki/SPICE) written in C to [WebAssembly](https://webassembly.org/).

6. Write JavaScript/TypeScript bindings to the library and attempt to integrate it into the application.

7. Begin to transition the JSON-based model to use [Y.js](https://docs.yjs.dev/).

8. Work on a cloud-based backend for documents to allow multiplayer support.

## References

### CRDTs

- https://fluidframework.com/docs/
- https://github.com/micrology/y-vis-network
- https://github.com/yjs/yjs
- https://josephg.com/blog/crdts-are-the-future/
- https://josephg.com/blog/crdts-go-brrr/
- https://www.figma.com/blog/how-figmas-multiplayer-technology-works/
- https://www.figma.com/blog/under-the-hood-of-figmas-infrastructure/
- https://xi-editor.io/docs/crdt-details.html

### EDAs

- https://github.com/horizon-eda/horizon
- https://gitlab.com/kicad/code/kicad

### Editors

- https://ggeditor.com/
- https://github.com/ChrisShen93/VGEditor
- https://github.com/react-designer/react-designer
- https://github.com/retejs/rete
- https://github.com/uber/react-digraph
- https://reactflow.dev/

### Semantics

- https://en.wikipedia.org/wiki/Circuit_diagram
- https://en.wikipedia.org/wiki/Electronic_symbol
- https://en.wikipedia.org/wiki/Schematic_capture
- https://horizon-eda.readthedocs.io/en/latest/pool-why.html

### Simulators

- http://ngspice.sourceforge.net/
- http://ngspice.sourceforge.net/docs/ngspice-35-manual.pdf
- https://en.wikipedia.org/wiki/List_of_free_electronics_circuit_simulators

### Symbols

- https://ctan.org/pkg/circuitikz?lang=en
- https://mirror.ox.ac.uk/sites/ctan.org/graphics/pgf/contrib/circuitikz/doc/circuitikzmanual.pdf
