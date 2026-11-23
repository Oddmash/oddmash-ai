---
name: vertactics-map-rendering
description: Implement or review Vertactics map schemas, terrain surface geometry, world coordinates, picking, and shared 2D/3D rendering behavior.
---

# Vertactics map rendering

Read the map requirements in SPEC and the coordinate contract in AGENTS.md. Update schema validation before changing dependent maps.

- Preserve X as horizontal, Y as elevation, Z as depth, and north as −Z in 2D. Distinguish minimum corner, mesh center, and walkable surface.
- Keep domain calculations independent from React and Three.js. Switch cameras without modifying stored coordinates, scene data, or selection identity.
- Test stair orientation and top surface, overlapping surfaces, invalid external JSON, and supported legacy versions. Keep the synthetic elevation lab reproducible. Report units as `u` until a real-world conversion is verified.
- Record provenance and verification status of real-map geometry. When visible rendering or picking changes, capture both actual browser modes.
