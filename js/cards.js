import {
    MeshBasicMaterial,
    BoxGeometry,
    Mesh,
    SRGBColorSpace,
    TextureLoader,
    Vector3
} from 'three';

const textureLoader = new TextureLoader();
const cardGeo = new BoxGeometry(0.4, 0.6, 0.001);

const citizen1Texture= textureLoader.load('./citizen1.png');
citizen1Texture.colorSpace = SRGBColorSpace;

const citizen2Texture= textureLoader.load('./citizen2.png');
citizen2Texture.colorSpace = SRGBColorSpace;

const citizen3Texture= textureLoader.load('./citizen3.png');
citizen3Texture.colorSpace = SRGBColorSpace;

const citizen4Texture= textureLoader.load('./citizen4.png');
citizen4Texture.colorSpace = SRGBColorSpace;

const slaveTexture= textureLoader.load('./slave.png');
slaveTexture.colorSpace = SRGBColorSpace;

const emperorTexture= textureLoader.load('./emperor.png');
emperorTexture.colorSpace = SRGBColorSpace;

const coverTexture= textureLoader.load('./cover.png');
coverTexture.colorSpace = SRGBColorSpace;

const card1Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: emperorTexture}),
    new MeshBasicMaterial({map: coverTexture}),
]

const card2Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: citizen1Texture}),
    new MeshBasicMaterial({map: coverTexture}),
]

const card3Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: citizen2Texture}),
    new MeshBasicMaterial({map: coverTexture}),
]

const card4Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: citizen3Texture}),
    new MeshBasicMaterial({map: coverTexture}),
]

const card5Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: citizen4Texture}),
    new MeshBasicMaterial({map: coverTexture}),
]

const card6Mat = [
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial(),
    new MeshBasicMaterial({map: slaveTexture}),
    new MeshBasicMaterial({map: coverTexture}),
];

const CARDS = [];

const myCardsPositions = [
    new Vector3(0.5, 6.004, 4.21),
    new Vector3(0.25, 6.003, 4.17),
    new Vector3(0, 6.002, 4.15),
    new Vector3(-0.25, 6.001, 4.17),
    new Vector3(-0.5, 6, 4.21),
];

const myCardsRotations = [
    new Vector3(-Math.PI / 2, 0, -0.15),
    new Vector3(-Math.PI / 2, 0, -0.10),
    new Vector3(-Math.PI / 2, 0, 0),
    new Vector3(-Math.PI/ 2, 0, 0.10),
    new Vector3(-Math.PI / 2, 0, 0.15),
];

function configureCard(card, pos, rot, rNumb, name) {
    card.name = name;
    card.castShadow = true;
    card.position.copy(pos[rNumb]);
    card.rotation.set(rot[rNumb].x, rot[rNumb].y, rot[rNumb].z);
    pos.splice(rNumb, 1);
    rot.splice(rNumb, 1);
    CARDS.push(card);
}

const minimum = 0;
let maximum1 = myCardsPositions.length - 1;
let randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;

const card1 = new Mesh(cardGeo, card1Mat);
configureCard(card1, myCardsPositions, myCardsRotations, randomNumber1, 'playerCard1 emperor');

const card2 = new Mesh(cardGeo, card2Mat);
maximum1 = myCardsPositions.length - 1;
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card2, myCardsPositions, myCardsRotations, randomNumber1, 'playerCard2 citizen');    

const card3 = new Mesh(cardGeo, card3Mat);
maximum1 = myCardsPositions.length - 1;
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card3, myCardsPositions, myCardsRotations, randomNumber1, 'playerCard3 citizen');

const card4 = new Mesh(cardGeo, card4Mat);
maximum1 = myCardsPositions.length - 1; 
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card4, myCardsPositions, myCardsRotations, randomNumber1, 'playerCard4 citizen');

const card5 = new Mesh(cardGeo, card5Mat);
maximum1 = myCardsPositions.length - 1; 
randomNumber1 = Math.floor(Math.random() * (maximum1 - minimum + 1)) + minimum;
configureCard(card5, myCardsPositions, myCardsRotations, randomNumber1, 'playerCard5 citizen');

const oponentCardsPositions = [
    new Vector3(0.5, 8.47, 2.5),
    new Vector3(0.25, 8.5, 2.501),
    new Vector3(0, 8.515, 2.502),
    new Vector3(-0.25, 8.5, 2.504),
    new Vector3(-0.5, 8.47, 2.504),
];




