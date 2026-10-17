/*
 * 3D DEEP AI NEURAL CORE & GEOMETRIC INTELLIGENCE ENGINE
 * Conveys the structural depth of Artificial Intelligence:
 * 1. Multi-layered 3D Geodesic AI Core (Inner Neural Icosahedron + Counter-Rotating Dodecahedron Wireframe + Core Glow)
 * 2. Three 3D Orbital Transformer Attention Rings rotating across X/Y/Z axes
 * 3. Deep 3D Volumetric Synaptic Neural Network (90+ neurons in 3D space connected to the AI Core and across layers)
 * 4. Live Synaptic Firing Impulses (Forward/Backward propagation light pulses traveling along neural filaments)
 * 5. Interactive Mouse Parallax, Raycast Neural Excitation, Scroll Depth Trajectory, and Light/Dark Theme adaptation
 */
(function () {
  const canvas = document.getElementById("network-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 38);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance"
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  // Position the main 3D AI Core slightly offset so it frames the Hero & page beautifully
  const aiCoreGroup = new THREE.Group();
  masterGroup.add(aiCoreGroup);

  const latticeGroup = new THREE.Group();
  masterGroup.add(latticeGroup);

  // Dynamic Theme Palette Helper
  function isDarkMode() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  const C_CYAN = 0x0bbab5;
  const C_DEEP_BLUE = 0x00548c;
  const C_ELECTRIC = 0x38bdf8;
  const C_EMERALD = 0x10b981;
  const C_NAVY = 0x003d66;

  // =========================================================================
  // 1. CENTRAL 3D GEOMETRIC AI BRAIN CORE (Multi-Layer Geodesic Intelligence)
  // =========================================================================

  // Layer A: Inner Neural Singularity Sphere (Wireframe Icosahedron)
  const innerCoreGeo = new THREE.IcosahedronGeometry(3.4, 2);
  const innerCoreMat = new THREE.MeshBasicMaterial({
    color: C_CYAN,
    wireframe: true,
    transparent: true,
    opacity: 0.32
  });
  const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
  aiCoreGroup.add(innerCoreMesh);

  // Layer B: Inner Glowing AI Nucleus
  const nucleusGeo = new THREE.IcosahedronGeometry(1.75, 1);
  const nucleusMat = new THREE.MeshBasicMaterial({
    color: C_DEEP_BLUE,
    wireframe: false,
    transparent: true,
    opacity: 0.14
  });
  const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
  aiCoreGroup.add(nucleusMesh);

  // Layer C: Outer Sacred-Geometry Tensor Shell (Edges of Detail-1 Icosahedron)
  const outerShellGeo = new THREE.IcosahedronGeometry(5.6, 1);
  const outerEdgesGeo = new THREE.EdgesGeometry(outerShellGeo);
  const outerShellMat = new THREE.LineBasicMaterial({
    color: C_DEEP_BLUE,
    transparent: true,
    opacity: 0.38
  });
  const outerShellLines = new THREE.LineSegments(outerEdgesGeo, outerShellMat);
  aiCoreGroup.add(outerShellLines);

  // Vertex Nodes on the Outer AI Shell
  const shellPosAttr = outerShellGeo.attributes.position;
  const uniqueShellVerts = [];
  const seenKeys = new Set();
  for (let i = 0; i < shellPosAttr.count; i++) {
    const vx = shellPosAttr.getX(i);
    const vy = shellPosAttr.getY(i);
    const vz = shellPosAttr.getZ(i);
    const key = `${vx.toFixed(2)}_${vy.toFixed(2)}_${vz.toFixed(2)}`;
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      uniqueShellVerts.push(new THREE.Vector3(vx, vy, vz));
    }
  }

  const shellNodeGeo = new THREE.SphereGeometry(0.18, 12, 12);
  const shellNodeMat = new THREE.MeshBasicMaterial({
    color: C_CYAN,
    transparent: true,
    opacity: 0.85
  });
  uniqueShellVerts.forEach((v) => {
    const dot = new THREE.Mesh(shellNodeGeo, shellNodeMat);
    dot.position.copy(v);
    outerShellLines.add(dot);
  });

  // Layer D: 3 Orbital Transformer Attention Rings
  const orbitalRings = [];
  const ringConfigs = [
    { radius: 7.4, tube: 0.035, rx: Math.PI / 2.6, ry: 0.3, speed: 0.0045, color: C_CYAN, opacity: 0.35 },
    { radius: 9.2, tube: 0.03,  rx: -Math.PI / 3.1, ry: -0.5, speed: -0.0032, color: C_DEEP_BLUE, opacity: 0.28 },
    { radius: 11.2, tube: 0.025, rx: Math.PI / 5.0, ry: 0.8, speed: 0.0022, color: C_EMERALD, opacity: 0.22 }
  ];

  ringConfigs.forEach((rc) => {
    const rGeo = new THREE.TorusGeometry(rc.radius, rc.tube, 12, 96);
    const rMat = new THREE.MeshBasicMaterial({
      color: rc.color,
      transparent: true,
      opacity: rc.opacity
    });
    const rMesh = new THREE.Mesh(rGeo, rMat);
    rMesh.rotation.x = rc.rx;
    rMesh.rotation.y = rc.ry;
    aiCoreGroup.add(rMesh);
    orbitalRings.push({ mesh: rMesh, speed: rc.speed });
  });

  // =========================================================================
  // 2. VOLUMETRIC 3D DEEP NEURAL LATTICE (Multi-Depth Synaptic Field)
  // =========================================================================
  const NEURON_COUNT = window.innerWidth < 768 ? 52 : 88;
  const neuronNodes = [];
  const neuronMeshes = [];

  const hubNeuronGeo = new THREE.OctahedronGeometry(0.36, 0);
  const stdNeuronGeo = new THREE.SphereGeometry(0.22, 12, 12);

  const matCyan = new THREE.MeshBasicMaterial({ color: C_CYAN, transparent: true, opacity: 0.88 });
  const matBlue = new THREE.MeshBasicMaterial({ color: C_DEEP_BLUE, transparent: true, opacity: 0.78 });
  const matEmerald = new THREE.MeshBasicMaterial({ color: C_EMERALD, transparent: true, opacity: 0.85 });

  // Distribute neurons in 3 concentric 3D spherical shells + lateral wings for deep perspective
  for (let i = 0; i < NEURON_COUNT; i++) {
    const isHub = i % 6 === 0;
    const mat = i % 3 === 0 ? matCyan.clone() : (i % 3 === 1 ? matBlue.clone() : matEmerald.clone());
    const mesh = new THREE.Mesh(isHub ? hubNeuronGeo : stdNeuronGeo, mat);

    // Spherical + winged distribution so it fills the viewport with true 3D depth
    const shellRadius = 8.5 + (i % 4) * 5.2 + Math.random() * 2.5;
    const theta = (i / NEURON_COUNT) * Math.PI * 2 * 3.618; // golden angle spiral
    const phi = Math.acos(1 - 2 * ((i + 0.5) / NEURON_COUNT));

    const x = shellRadius * Math.sin(phi) * Math.cos(theta) * 1.45;
    const y = shellRadius * Math.sin(phi) * Math.sin(theta) * 0.95;
    const z = shellRadius * Math.cos(phi) * 0.85;

    const basePos = new THREE.Vector3(x, y, z);
    mesh.position.copy(basePos);
    latticeGroup.add(mesh);

    neuronNodes.push({
      mesh,
      basePos,
      isHub,
      phase: Math.random() * Math.PI * 2,
      speed: 0.35 + Math.random() * 0.45
    });
    neuronMeshes.push(mesh);
  }

  // Connect neurons to nearest neighbors in 3D space (Deep Synaptic Graph)
  const synapses = [];
  const MAX_SYNAPSE_DIST = 11.5;
  const LINKS_PER_NEURON = 3;

  neuronNodes.forEach((nodeA, i) => {
    const neighbors = neuronNodes
      .map((nodeB, j) => ({ j, dist: nodeA.basePos.distanceTo(nodeB.basePos) }))
      .filter((item) => item.j !== i && item.dist < MAX_SYNAPSE_DIST)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, LINKS_PER_NEURON);

    neighbors.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!synapses.some((s) => s.key === key)) {
        synapses.push({ key, a: i, b: j });
      }
    });

    // Also connect inner-shell hub neurons directly toward the AI Core boundary
    if (nodeA.isHub && nodeA.basePos.length() < 16) {
      synapses.push({ key: `core-${i}`, a: i, b: -1 });
    }
  });

  const synapsePositions = new Float32Array(synapses.length * 6);
  const synapseGeo = new THREE.BufferGeometry();
  synapseGeo.setAttribute("position", new THREE.BufferAttribute(synapsePositions, 3));
  const synapseMat = new THREE.LineBasicMaterial({
    color: C_CYAN,
    transparent: true,
    opacity: 0.22
  });
  const synapseLines = new THREE.LineSegments(synapseGeo, synapseMat);
  latticeGroup.add(synapseLines);

  function updateSynapseGeometry() {
    for (let idx = 0; idx < synapses.length; idx++) {
      const s = synapses[idx];
      const posA = neuronNodes[s.a].mesh.position;
      const posB = s.b === -1
        ? posA.clone().normalize().multiplyScalar(5.5)
        : neuronNodes[s.b].mesh.position;

      const off = idx * 6;
      synapsePositions[off] = posA.x;
      synapsePositions[off + 1] = posA.y;
      synapsePositions[off + 2] = posA.z;
      synapsePositions[off + 3] = posB.x;
      synapsePositions[off + 4] = posB.y;
      synapsePositions[off + 5] = posB.z;
    }
    synapseGeo.attributes.position.needsUpdate = true;
  }
  updateSynapseGeometry();

  // =========================================================================
  // 3. SYNAPTIC FIRING IMPULSES (AI Inference Signals Traveling in 3D Depth)
  // =========================================================================
  const IMPULSE_COUNT = 24;
  const impulseGeo = new THREE.SphereGeometry(0.24, 10, 10);
  const impulses = [];

  for (let i = 0; i < IMPULSE_COUNT; i++) {
    const pMat = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? C_CYAN : C_ELECTRIC,
      transparent: true,
      opacity: 0
    });
    const pMesh = new THREE.Mesh(impulseGeo, pMat);
    latticeGroup.add(pMesh);
    impulses.push({ mesh: pMesh, synapse: null, t: 1, speed: 0.01 });
  }

  function triggerImpulse(imp) {
    if (!synapses.length) return;
    imp.synapse = synapses[Math.floor(Math.random() * synapses.length)];
    imp.t = 0;
    imp.speed = 0.009 + Math.random() * 0.014;
  }

  impulses.forEach((imp, idx) => setTimeout(() => triggerImpulse(imp), idx * 180));

  // =========================================================================
  // 4. INTERACTIVE MOUSE PARALLAX, SCROLL DEPTH & THEME ADAPTATION
  // =========================================================================
  let targetRotX = 0;
  let targetRotY = 0;
  let scrollY = 0;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-100, -100);

  function onPointerMove(clientX, clientY) {
    const nx = (clientX / window.innerWidth) * 2 - 1;
    const ny = (clientY / window.innerHeight) * 2 - 1;
    targetRotY = nx * 0.38;
    targetRotX = ny * 0.24;
    mouse.x = nx;
    mouse.y = -ny;
  }

  window.addEventListener("mousemove", (e) => onPointerMove(e.clientX, e.clientY), { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (e.touches.length) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY || window.pageYOffset;
  }, { passive: true });

  function syncThemeColors() {
    const dark = isDarkMode();
    innerCoreMat.opacity = dark ? 0.48 : 0.34;
    outerShellMat.color.setHex(dark ? C_ELECTRIC : C_DEEP_BLUE);
    outerShellMat.opacity = dark ? 0.52 : 0.38;
    synapseMat.color.setHex(dark ? C_CYAN : C_DEEP_BLUE);
    synapseMat.opacity = dark ? 0.28 : 0.20;
    nucleusMat.opacity = dark ? 0.22 : 0.14;
  }
  syncThemeColors();

  const observer = new MutationObserver(syncThemeColors);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  let isTabVisible = true;
  document.addEventListener("visibilitychange", () => {
    isTabVisible = document.visibilityState === "visible";
  });

  const clock = new THREE.Clock();
  const baseSpin = prefersReducedMotion ? 0 : 0.0012;
  const floatAmp = prefersReducedMotion ? 0 : 0.42;

  function animate() {
    requestAnimationFrame(animate);
    if (!isTabVisible) return;

    const elapsed = clock.getElapsedTime();

    // 1. Rotate Central 3D AI Core & Counter-Rotating Tensor Cage
    innerCoreMesh.rotation.y += baseSpin * 2.2;
    innerCoreMesh.rotation.x += baseSpin * 1.1;

    outerShellLines.rotation.y -= baseSpin * 1.4;
    outerShellLines.rotation.z += baseSpin * 0.8;

    // Breathing AI Singularity Scale
    const pulseScale = 1 + Math.sin(elapsed * 2.2) * 0.08;
    nucleusMesh.scale.set(pulseScale, pulseScale, pulseScale);

    // Rotate Orbital Transformer Rings
    orbitalRings.forEach((ring) => {
      ring.mesh.rotation.z += ring.speed;
      ring.mesh.rotation.y += ring.speed * 0.4;
    });

    // 2. Smooth Pointer Parallax on Master Group
    masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.035 + baseSpin * 0.5;
    masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.035;

    // 3. Scroll Depth Camera Trajectory (Diving into the AI Neural Matrix)
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = Math.min(1, Math.max(0, scrollY / maxScroll));
    const targetCamZ = 38 - Math.sin(scrollProgress * Math.PI) * 9;
    const targetCamY = -scrollProgress * 12;
    camera.position.z += (targetCamZ - camera.position.z) * 0.04;
    camera.position.y += (targetCamY - camera.position.y) * 0.04;

    // 4. Organic 3D Floating of Synaptic Neurons
    for (let i = 0; i < neuronNodes.length; i++) {
      const n = neuronNodes[i];
      n.mesh.position.x = n.basePos.x + Math.sin(elapsed * n.speed + n.phase) * floatAmp;
      n.mesh.position.y = n.basePos.y + Math.cos(elapsed * (n.speed * 0.85) + n.phase) * floatAmp;
      n.mesh.position.z = n.basePos.z + Math.sin(elapsed * 0.5 + n.phase) * (floatAmp * 0.6);
      if (n.isHub) {
        n.mesh.rotation.y += 0.015;
        n.mesh.rotation.x += 0.01;
      }
    }
    updateSynapseGeometry();

    // 5. Raycast Hover Excitation on Nearby Neurons
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObjects(neuronMeshes);
    for (let i = 0; i < neuronMeshes.length; i++) {
      neuronMeshes[i].scale.lerp(new THREE.Vector3(1, 1, 1), 0.12);
    }
    if (hits.length > 0) {
      hits[0].object.scale.lerp(new THREE.Vector3(1.85, 1.85, 1.85), 0.25);
    }

    // 6. Animate Synaptic Firing Impulses
    for (let i = 0; i < impulses.length; i++) {
      const imp = impulses[i];
      if (!imp.synapse) continue;
      imp.t += imp.speed;
      if (imp.t >= 1) {
        triggerImpulse(imp);
        continue;
      }
      const posA = neuronNodes[imp.synapse.a].mesh.position;
      const posB = imp.synapse.b === -1
        ? posA.clone().normalize().multiplyScalar(5.5)
        : neuronNodes[imp.synapse.b].mesh.position;

      imp.mesh.position.lerpVectors(posA, posB, imp.t);
      const s = 0.8 + Math.sin(imp.t * Math.PI) * 0.7;
      imp.mesh.scale.set(s, s, s);
      imp.mesh.material.opacity = Math.sin(imp.t * Math.PI) * 0.95;
    }

    renderer.render(scene, camera);
  }

  resize();
  window.addEventListener("resize", resize);
  animate();
})();
