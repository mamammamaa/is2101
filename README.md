# NUSMap interactive concept prototype

A React + Vite demonstration of a simulated UTown-to-COM3 journey, visually reconstructed from Figures 9A–9D. All maps, the floor plan, and the corridor are editable SVG components. The demo makes no external service requests and does not request location or camera access.

## Run locally

Requires Node.js 20.19+ or 22.12+ (validated with Node 24.19).

```sh
npm ci --cache /tmp/nusmap-npm-cache
npm run dev
```

Build with `npm run build`; serve the production build with `npm run preview`.

## Demonstration

Select any of the four numbered features, or use Previous / Next. Select a route and press Start to move to the shuttle screen. Shuttle stops advance automatically or through the stop rows and Simulate next stop button. Select the next leg to enter COM3; the AR button opens simulated corridor guidance. AR distance counts down to arrival. Replay resets the journey. Autoplay advances all four screens; Pause freezes movement and automatic advancement while allowing manual navigation. The sheltered option is selectable; its next screen explicitly previews the optional shuttle connection.

This is a pitch prototype, not live navigation. No backend, GPS, shuttle API, or real camera functionality is included. Screen animations also respect the reduced-motion CSS preference.
