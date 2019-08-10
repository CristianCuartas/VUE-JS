// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
const  myCylinderSurface = new Surface(
  1000, /* width */
  600, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
)
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('prototipos_app', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_ascendor.jpg'));
}

window.React360 = {init};
