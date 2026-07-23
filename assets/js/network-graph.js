/*
 * Upgraded 3D Holographic Orbital Core Engine for Hero Background.
 * Renders a rotating 3D system core with interactive orbital rings,
 * glowing service nodes (ERP, SaaS, AI, WebSockets, DB), and data streams.
 */
(function () {
  const canvas = document.getElementById("network-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 32);

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  const mainGroup = new THREE.Group();
  scene.add(mainGroup);

  // Colors dynamically based on theme or defaults
  const cyanColor = 0x00f2fe;
  const violetColor = 0x8b5cf6;
  const indigoColor = 0x6366f1;
  const emeraldColor = 0x10b981;

  // 1. Central Core Sphere (Wireframe + Inner Glow)
  const coreGeometry = new THREE.IcosahedronGeometry(3.2, 2);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: cyanColor,
    wireframe: true,
    transparent: true,
    opacity: 0.45
  });
  const centralCore = new THREE.Mesh(coreGeometry, coreMaterial);
  mainGroup.add(centralCore);

  const innerGeometry = new THREE.SphereGeometry(2.2, 16, 16);
  const innerMaterial = new THREE.MeshBasicMaterial({
    color: violetColor,
    transparent: true,
    opacity: 0.7
  });
  const innerCore = new THREE.Mesh(innerGeometry, innerMaterial);
  mainGroup.add(innerCore);

  // 2. Concentric Orbital Rings
  function createOrbitalRing(radius, color, rotX, rotY) {
    const ringGeo = new THREE.TorusGeometry(radius, 0.04, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.35
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = rotX;
    ring.rotation.y = rotY;
    mainGroup.add(ring);
    return ring;
  }

  const ring1 = createOrbitalRing(7.5, cyanColor, Math.PI / 3, 0);
  const ring2 = createOrbitalRing(11.0, violetColor, Math.PI / 4, Math.PI / 6);
  const ring3 = createOrbitalRing(14.5, indigoColor, Math.PI / 2.5, -Math.PI / 4);

  // 3. Orbiting Service Nodes (ERP, SaaS, AI, WebSockets, DB, ZATCA)
  const serviceNodesData = [
    { label: "Evix ERP", color: cyanColor, radius: 7.5, speed: 0.8, phase: 0 },
    { label: "SaaS Tenancy", color: violetColor, radius: 11.0, speed: 0.6, phase: 1.2 },
    { label: "AI Workflows", color: emeraldColor, radius: 14.5, speed: 0.4, phase: 2.5 },
    { label: "WebSockets 7k+", color: cyanColor, radius: 7.5, speed: 0.7, phase: 3.8 },
    { label: "ZATCA Tax", color: violetColor, radius: 11.0, speed: 0.5, phase: 4.6 },
    { label: "Redis & Postgres", color: indigoColor, radius: 14.5, speed: 0.45, phase: 5.4 }
  ];

  const serviceNodeMeshes = [];
  const nodeGeo = new THREE.SphereGeometry(0.55, 16, 16);

  serviceNodesData.forEach((data) => {
    const mat = new THREE.MeshBasicMaterial({
      color: data.color,
      transparent: true,
      opacity: 0.9
    });
    const mesh = new THREE.Mesh(nodeGeo, mat);
    mainGroup.add(mesh);

    // Connecting beam line to central core
    const beamGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 0)
    ]);
    const beamMat = new THREE.LineBasicMaterial({
      color: data.color,
      transparent: true,
      opacity: 0.25
    });
    const beamLine = new THREE.Line(beamGeo, beamMat);
    mainGroup.add(beamLine);

    serviceNodeMeshes.push({
      mesh,
      beamLine,
      data
    });
  });

  // 4. Background Floating Particle Dust Field
  const particleCount = 120;
  const particleGeo = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 50;
    particlePositions[i + 1] = (Math.random() - 0.5) * 35;
    particlePositions[i + 2] = (Math.random() - 0.5) * 30;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: 0x94a3b8,
    size: 0.2,
    transparent: true,
    opacity: 0.4
  });
  const particleSystem = new THREE.Points(particleGeo, particleMat);
  mainGroup.add(particleSystem);

  // Pointer Parallax Lerp
  let targetRotX = 0;
  let targetRotY = 0;

  function onPointerMove(x, y) {
    const nx = (x / window.innerWidth) * 2 - 1;
    const ny = (y / window.innerHeight) * 2 - 1;
    targetRotY = nx * 0.45;
    targetRotX = ny * 0.3;
  }

  window.addEventListener("mousemove", (e) => onPointerMove(e.clientX, e.clientY));
  window.addEventListener("touchmove", (e) => {
    if (e.touches.length) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  let isVisible = true;
  document.addEventListener("visibilitychange", () => {
    isVisible = document.visibilityState === "visible";
  });

  const clock = new THREE.Clock();
  const idleSpeed = prefersReducedMotion ? 0 : 0.003;

  function animate() {
    requestAnimationFrame(animate);
    if (!isVisible) return;

    const elapsedTime = clock.getElapsedTime();

    // Smooth rotation of main group
    mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.03 + idleSpeed;
    mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.03;

    // Pulse core
    const scale = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
    centralCore.scale.set(scale, scale, scale);
    innerCore.rotation.y -= 0.008;

    // Rotate Orbital Rings
    ring1.rotation.z = elapsedTime * 0.15;
    ring2.rotation.z = -elapsedTime * 0.12;
    ring3.rotation.z = elapsedTime * 0.08;

    // Update Orbiting Nodes & Beams
    serviceNodeMeshes.forEach((item) => {
      const d = item.data;
      const angle = elapsedTime * d.speed + d.phase;
      
      const x = Math.cos(angle) * d.radius;
      const y = Math.sin(angle * 0.7) * (d.radius * 0.4);
      const z = Math.sin(angle) * d.radius;

      item.mesh.position.set(x, y, z);

      // Update beam line positions
      const positions = item.beamLine.geometry.attributes.position.array;
      positions[0] = 0;
      positions[1] = 0;
      positions[2] = 0;
      positions[3] = x;
      positions[4] = y;
      positions[5] = z;
      item.beamLine.geometry.attributes.position.needsUpdate = true;
    });

    // Particle subtle float
    particleSystem.rotation.y = elapsedTime * 0.02;

    renderer.render(scene, camera);
  }

  resize();
  window.addEventListener("resize", resize);
  animate();
})();
