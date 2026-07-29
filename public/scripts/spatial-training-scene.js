const THREE = window.THREE;

function initialize(mount) {
  if (mount.dataset.threeReady === "true") return;
  mount.dataset.threeReady = "true";

  const accent = mount.dataset.accent || "#ec4899";
  const accentColor = new THREE.Color(accent);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050608, 0.075);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(5.2, 3.4, 7.4);

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  mount.appendChild(renderer.domElement);

  const rig = new THREE.Group();
  rig.rotation.y = -0.28;
  scene.add(rig);

  scene.add(new THREE.HemisphereLight(0x8db4ff, 0x050608, 1.15));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
  keyLight.position.set(5, 7, 6);
  scene.add(keyLight);
  const accentLight = new THREE.PointLight(accentColor, 18, 9, 2);
  accentLight.position.set(-2.5, 2.8, 2.8);
  scene.add(accentLight);

  const metal = new THREE.MeshStandardMaterial({
    color: 0x232a32,
    metalness: 0.86,
    roughness: 0.27,
  });
  const darkMetal = new THREE.MeshStandardMaterial({
    color: 0x10151b,
    metalness: 0.72,
    roughness: 0.36,
  });
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: accentColor,
    emissive: accentColor,
    emissiveIntensity: 0.7,
    metalness: 0.45,
    roughness: 0.25,
  });

  function addEdges(mesh) {
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(mesh.geometry),
      new THREE.LineBasicMaterial({ color: 0x708090, transparent: true, opacity: 0.28 }),
    );
    mesh.add(edges);
  }

  const platform = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.55, 0.34, 48), darkMetal);
  platform.position.y = -1.3;
  rig.add(platform);

  const turntable = new THREE.Mesh(new THREE.CylinderGeometry(1.68, 1.68, 0.16, 48), metal);
  turntable.position.y = -1.08;
  rig.add(turntable);

  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.76, 1.05, 32), metal);
  pedestal.position.set(-0.75, -0.5, 0);
  rig.add(pedestal);
  addEdges(pedestal);

  const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 20), accentMaterial);
  shoulder.position.set(-0.75, 0.08, 0);
  rig.add(shoulder);

  const upperArm = new THREE.Mesh(new THREE.BoxGeometry(0.55, 1.95, 0.58), metal);
  upperArm.name = "UpperArm";
  upperArm.position.set(-0.28, 0.85, 0);
  upperArm.rotation.z = -0.48;
  rig.add(upperArm);
  addEdges(upperArm);

  const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.42, 28, 18), accentMaterial);
  elbow.position.set(0.18, 1.62, 0);
  rig.add(elbow);

  const forearm = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.46, 0.5), metal);
  forearm.name = "Forearm";
  forearm.position.set(0.95, 1.84, 0);
  forearm.rotation.z = 0.22;
  rig.add(forearm);
  addEdges(forearm);

  const toolHead = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.4, 0.75, 24), darkMetal);
  toolHead.name = "ToolHead";
  toolHead.position.set(1.78, 2.03, 0);
  toolHead.rotation.z = Math.PI / 2;
  rig.add(toolHead);

  const mixer = new THREE.AnimationMixer(rig);
  const inspectionClip = new THREE.AnimationClip("inspection-cycle", 8, [
    new THREE.NumberKeyframeTrack("UpperArm.rotation[z]", [0, 2, 4, 6, 8], [-0.48, -0.37, -0.58, -0.43, -0.48]),
    new THREE.NumberKeyframeTrack("Forearm.rotation[z]", [0, 2, 4, 6, 8], [0.22, 0.1, 0.31, 0.16, 0.22]),
    new THREE.NumberKeyframeTrack("ToolHead.rotation[x]", [0, 2, 4, 6, 8], [0, 0.18, -0.12, 0.1, 0]),
  ]);
  mixer.clipAction(inspectionClip).play();

  const targetRing = new THREE.Mesh(
    new THREE.TorusGeometry(0.56, 0.025, 12, 64),
    new THREE.MeshBasicMaterial({ color: accentColor, transparent: true, opacity: 0.9 }),
  );
  targetRing.position.set(1.8, 2.03, 0);
  targetRing.rotation.y = Math.PI / 2;
  rig.add(targetRing);

  const scanPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(4.5, 2.8),
    new THREE.MeshBasicMaterial({
      color: accentColor,
      transparent: true,
      opacity: 0.045,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  scanPlane.position.set(0, 0.45, 0.1);
  scanPlane.rotation.y = Math.PI / 2;
  rig.add(scanPlane);

  const grid = new THREE.GridHelper(18, 36, accentColor, 0x1a222c);
  grid.position.y = -1.47;
  grid.material.transparent = true;
  grid.material.opacity = 0.34;
  scene.add(grid);

  let targetX = 5.2;
  let targetY = 3.4;
  mount.addEventListener("pointermove", (event) => {
    const bounds = mount.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
    targetX = 5.2 + x * 0.42;
    targetY = 3.4 + y * 0.24;
  });
  mount.addEventListener("pointerleave", () => {
    targetX = 5.2;
    targetY = 3.4;
  });

  const resize = () => {
    const width = Math.max(mount.clientWidth, 1);
    const height = Math.max(mount.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(mount);
  resize();

  const startedAt = performance.now();
  let previousElapsed = 0;
  function render() {
    const elapsed = (performance.now() - startedAt) / 1000;
    if (!reduceMotion) {
      mixer.update(Math.min(elapsed - previousElapsed, 0.05));
      rig.rotation.y = -0.28 + Math.sin(elapsed * 0.22) * 0.08;
      turntable.rotation.y = elapsed * 0.12;
      scanPlane.position.x = Math.sin(elapsed * 0.7) * 1.45;
      targetRing.scale.setScalar(1 + Math.sin(elapsed * 2) * 0.08);
      targetRing.material.opacity = 0.68 + Math.sin(elapsed * 2) * 0.2;
      camera.position.x += (targetX - camera.position.x) * 0.035;
      camera.position.y += (targetY - camera.position.y) * 0.035;
    }
    previousElapsed = elapsed;
    camera.lookAt(0, 0.25, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();
}

function initializeAll() {
  document.querySelectorAll("[data-spatial-training-scene]").forEach(initialize);
}

initializeAll();
new MutationObserver(initializeAll).observe(document.documentElement, {
  childList: true,
  subtree: true,
});
