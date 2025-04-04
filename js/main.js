import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const gltfLoader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


renderer.setClearColor(0xFEFEFE);
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);



camera.position.set(0, 10, 6);
camera.lookAt(new THREE.Vector3(0, 6, 2));

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.y= 10;
scene.add(directionalLight);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;

const ambientLight = new THREE.AmbientLight(0xA3A4A4, 0.3);
scene.add(ambientLight);

gltfLoader.load('./kitchen_table.glb', function(glb) {
    const model = glb.scene;
    scene.add(model);
    model.rotateY(Math.PI / 2);
    model.scale.set(0.35, 0.35, 0.35);
    model.position.set(0.25, 0, 0);

    model.traverse(function(node) {
        if (node.isMesh) {
            node.receiveShadow = true;
        }
    });

})


const gridHelper = new THREE.GridHelper(12, 12);
scene.add(gridHelper);


function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});