/*
 * DEEP REAL-WORLD AI & SOFTWARE SYSTEM ARCHITECTURE ENGINE
 * Features:
 * - 3D Raycasting Hover Interaction: Hovering nodes illuminates connected synapses.
 * - Layered Neural Network: Input Tokens -> Hidden Processing Layers -> LLM Output.
 * - API Data Request Packets: Pulse particles traveling through microservices conduits.
 * - Smooth Scroll & Cursor Telemetry Alignment.
 */
(function () {
  const canvas = document.getElementById("network-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 32);

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

  // Colors
  const C_CYAN = 0x00f2fe;
  const C_VIOLET = 0x8b5cf6;
  const C_INDIGO = 0x6366f1;
  const C_EMERALD = 0x10b981;
  const C_GOLD = 0xf59e0b;

  // ===== 1. LAYERED 3D NEURAL NETWORK ARCHITECTURE =====
  const neuralGroup = new THREE.Group();
  masterGroup.add(neuralGroup);

  const layersConfig = [
    { count: 5, x: -14, name: "Input Tokens Layer" },
    { count: 8, x: -5,  name: "Deep Hidden Layer 1" },
    { count: 8, x: 4,   name: "Deep Hidden Layer 2" },
    { count: 4, x: 13,  name: "LLM Output Inference" }
  ];

  const nodeGeo = new THREE.SphereGeometry(0.38, 16, 16);
  const inputMat = new THREE.MeshBasicMaterial({ color: C_CYAN, transparent: true, opacity: 0.95 });
  const hiddenMat = new THREE.MeshBasicMaterial({ color: C_VIOLET, transparent: true, opacity: 0.85 });
  const outputMat = new THREE.MeshBasicMaterial({ color: C_EMERALD, transparent: true, opacity: 0.95 });

  const allNodes = [];
  const layerNodes = [];

  layersConfig.forEach((layer, layerIdx) => {
    const nodesInLayer = [];
    const spacingY = 2.8;
    const startY = - ((layer.count - 1) * spacingY) / 2;

    for (let i = 0; i < layer.count; i++) {
      let mat = hiddenMat;
      if (layerIdx === 0) mat = inputMat;
      if (layerIdx === layersConfig.length - 1) mat = outputMat;

      const mesh = new THREE.Mesh(nodeGeo, mat.clone());
      const pos = new THREE.Vector3(layer.x, startY + i * spacingY, (Math.random() - 0.5) * 2.5);
      mesh.position.copy(pos);
      mesh.userData = { layerName: layer.name, id: `${layerIdx}-${i}`, isHovered: false };
      neuralGroup.add(mesh);
      
      nodesInLayer.push({ mesh, basePos: pos.clone() });
      allNodes.push(mesh);
    }
    layerNodes.push(nodesInLayer);
  });

  // Synapse Edges
  const synapseEdges = [];
  for (let l = 0; l < layerNodes.length - 1; l++) {
    const currentLayer = layerNodes[l];
    const nextLayer = layerNodes[l + 1];

    currentLayer.forEach((nodeA) => {
      nextLayer.forEach((nodeB) => {
        synapseEdges.push({ a: nodeA.mesh.position, b: nodeB.mesh.position });
      });
    });
  }

  const linePositions = new Float32Array(synapseEdges.length * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({ color: C_INDIGO, transparent: true, opacity: 0.2 });
  const synapseLines = new THREE.LineSegments(lineGeo, lineMat);
  neuralGroup.add(synapseLines);

  function updateSynapses() {
    synapseEdges.forEach((e, idx) => {
      const off = idx * 6;
      linePositions[off] = e.a.x; linePositions[off + 1] = e.a.y; linePositions[off + 2] = e.a.z;
      linePositions[off + 3] = e.b.x; linePositions[off + 4] = e.b.y; linePositions[off + 5] = e.b.z;
    });
    lineGeo.attributes.position.needsUpdate = true;
  }
  updateSynapses();

  // ===== 2. API REQUEST DATA PACKETS =====
  const packetGeo = new THREE.SphereGeometry(0.3, 12, 12);
  const packetMat = new THREE.MeshBasicMaterial({ color: C_CYAN, transparent: true, opacity: 0 });
  const dataPackets = [];

  for (let i = 0; i < 12; i++) {
    const mesh = new THREE.Mesh(packetGeo, packetMat.clone());
    neuralGroup.add(mesh);
    dataPackets.push({ mesh, edge: null, t: 1 });
  }

  function launchPacket(p) {
    if (!synapseEdges.length) return;
    p.edge = synapseEdges[Math.floor(Math.random() * synapseEdges.length)];
    p.t = 0;
    p.speed = 0.012 + Math.random() * 0.01;
  }

  dataPackets.forEach((p, i) => setTimeout(() => launchPacket(p), i * 300));

  // Pointer, Raycasting & Scroll Parallax
  let targetRotX = 0, targetRotY = 0;
  let scrollY = 0;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(-100, -100);

  function setPointer(e) {
    const x = e.clientX;
    const y = e.clientY;
    targetRotY = ((x / window.innerWidth) * 2 - 1) * 0.3;
    targetRotX = ((y / window.innerHeight) * 2 - 1) * 0.18;

    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = - (y / window.innerHeight) * 2 + 1;
  }

  window.addEventListener("mousemove", setPointer);
  window.addEventListener("touchmove", (e) => {
    if (e.touches.length) setPointer(e.touches[0]);
  }, { passive: true });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY || window.pageYOffset;
  });

  const clock = new THREE.Clock();
  const idleSpin = prefersReducedMotion ? 0 : 0.0008;

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Mouse Rotation
    masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.03 + idleSpin;
    masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.03;

    // Scroll Camera Trajectory
    const maxScroll = (document.documentElement.scrollHeight - window.innerHeight) || 1;
    const scrollPercent = scrollY / maxScroll;
    const targetCamY = - scrollPercent * 30;
    camera.position.y += (targetCamY - camera.position.y) * 0.05;

    // Raycasting Hover Highlights
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(allNodes);

    allNodes.forEach((node) => {
      node.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    });

    if (intersects.length > 0) {
      const hovered = intersects[0].object;
      hovered.scale.lerp(new THREE.Vector3(1.6, 1.6, 1.6), 0.2);
    }

    // Animate Data Packets
    dataPackets.forEach((p) => {
      if (!p.edge) return;
      p.t += p.speed;
      if (p.t >= 1) { launchPacket(p); return; }
      p.mesh.position.lerpVectors(p.edge.a, p.edge.b, p.t);
      p.mesh.material.opacity = Math.sin(p.t * Math.PI) * 0.95;
    });

    renderer.render(scene, camera);
  }

  resize();
  window.addEventListener("resize", resize);
  animate();
})();
