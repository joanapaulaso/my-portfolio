import * as THREE from 'three';
import images from './images';
import Stats from './../node_modules/three/examples/jsm/libs/stats.module'
import { GUI } from './../node_modules/three/examples/jsm/libs/dat.gui.module';

let camera, scene, renderer, mesh, gui;

// Load images textures
const sciencePhoto = new THREE.TextureLoader().load(images.sciencePhoto);

// Constructor
scene = new THREE.Scene();
const clock = new THREE.Clock();
let container = document.querySelector('.science__main');
let perspective = 1000;

// Event Listeners



// Viewport
let width = container.offsetWidth;
let height = container.offsetHeight;
let aspectRatio = width / height;

// Mouse coordinates
let targetX = 0;
let targetY = 0;

// Call for functions
onMousemove();
init();
animate();

// Functions
function init(){

  // CAMERA
  let fov = (180 * (2 * Math.atan(height / 2 / perspective))) / Math.PI;
  camera = new THREE.PerspectiveCamera(fov, aspectRatio, 0.1, 1000);

  // camera.position.set(.1, -.8, 4);
  // camera.position.set(-1.2, -.2, 4);
  // camera.position.set(.1, -.2, 4);

  function tabletCameraPosition(cameraPositionTablet) {

    if (cameraPositionTablet.matches) {
  
      camera.position.set(-1, -.2, 4);
  
    } else {
  
      camera.position.set(.1, -.4, 4);
  
    }
  
  }
  
  const cameraPositionTablet = window.matchMedia("screen and (min-width: 661px) and (max-width: 1025px)")
  tabletCameraPosition(cameraPositionTablet)

  // GEOMETRY, MATERIAL AND MESH

  // SCIENCE PLANE
  const geometry = new THREE.PlaneGeometry(1.2, 2);
  const material = new THREE.MeshStandardMaterial({
    //wireframe: true, 
    map: sciencePhoto,
    side: THREE.DoubleSide,
    // metalness: 1.0,
    roughness: .5
  });

  mesh = new THREE.Mesh(geometry, material);

  // GUI.DAT
  // gui = new GUI();
  // const guiPhoto = gui.addFolder("Science Photo");
  // guiPhoto.open();

  // guiPhoto.add(mesh.scale, "x", 0, 5);
  // guiPhoto.add(mesh.scale, "y", 0, 5);

  scene.add(mesh);

  // LIGHTS
  const light1 = new THREE.PointLight(0x89cdff, 1, 100); // soft white light
  light1.position.set(-.1, -.9, .3);
  light1.decay = 2;

  const light2 = new THREE.PointLight(0xffe100, 1, 100); // soft white light
  light2.position.set(.1, .6, .3);
  light1.decay = 2;
    
  // const photoColor = { 
  //   color: '#ffffff' 
  // };

  // guiPhoto.addColor(photoColor, 'color').onChange( 
  //   function (colorValue) {
  //     light2.color.set(colorValue);
  // });
  // guiPhoto.add(light1.position, "x", -5, 5, 0.1);
  // guiPhoto.add(light1.position, "y", -5, 5, 0.1);
  // guiPhoto.add(light1.position, "z", -5, 5, 0.1);

  scene.add(light1);
  scene.add(light2);

  // SHADOW SETUP

  // SHADOW HELPER

  // RENDERER

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  // const stats = Stats();
  // document.body.appendChild(stats.dom)
  container.appendChild(renderer.domElement);

  // RESIZER

  window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function onMousemove() {
  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX * 0.01;
    targetY = e.clientY * 0.01;
  })
}

function animate () {
  requestAnimationFrame(animate);

  const elapsedTime = clock.getElapsedTime();
  mesh.rotation.y = 0 * elapsedTime;
  mesh.rotation.x = 0 * elapsedTime;

  mesh.position.x = .01 * targetX;
  mesh.position.y = -.02 * targetY;


  renderer.render(scene, camera);
}

function mobilePerspective(perspectiveMobile) {

  if (perspectiveMobile.matches) {

    document.querySelectorAll(".science canvas").forEach(function(element) {
      element.style.width = "70vw";
      element.style.height = "70vh";
      element.style.marginLeft = "2rem";
      element.style.marginTop = "4rem";
    });

  } 

}

const perspectiveMobile = window.matchMedia("screen and (min-width: 300px) and (max-width: 660px)")
mobilePerspective(perspectiveMobile)
