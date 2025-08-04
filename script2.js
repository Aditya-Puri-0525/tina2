body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
    font-family: Arial, sans-serif;
    overflow: hidden; /* Hide scrollbars if cube goes out of bounds during animation */
}

.cube-container {
    perspective: 1000px; /* Defines the 3D perspective */
    width: 200px; /* Size of the cube container */
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d; /* Ensures child elements are positioned in 3D space */
    transform: rotateX(-20deg) rotateY(45deg); /* Initial rotation */
    transition: transform 0.5s ease-in-out; /* Smooth transition for hover effect */
}

.face {
    position: absolute;
    width: 200px; /* Size of each face */
    height: 200px;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: #333;
    /* Example background images for faces - replace with your actual images */
    background-size: cover;
    background-position: center;
}

/* Positioning each face */
.front {
    transform: rotateY(0deg) translateZ(100px); /* Half of the face size for translation */
    background-image: url('"E:\PROGRAMS\tina\525726974_1697154250999624_1831980784635764795_n.jpg"');
}
.back {
    transform: rotateY(180deg) translateZ(100px);
    background-image: url('');
}
.right {
    transform: rotateY(90deg) translateZ(100px);
    background-image: url('');
}
.left {
    transform: rotateY(-90deg) translateZ(100px);
    background-image: url('');
}
.top {
    transform: rotateX(90deg) translateZ(100px);
    background-image: url('');
}
.bottom {
    transform: rotateX(-90deg) translateZ(100px);
    background-image: url('');
}

/* Hover effect */
.cube-container:hover .cube {
    transform: rotateX(-30deg) rotateY(135deg) scale(1.1); /* Rotate and slightly scale on hover */
}