
elements.hightemp_detector = {
    color: "#ff0000",
    name: "High Temp Detector",
    behavior: behaviors.WALL,
    category: "special",
    temp: 20,
    

    tick: function(pixel) {

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i === 0 && j === 0) continue;
                
                const neighbor = adjacentPixels(pixel.x, pixel.y)[(i+1)*3+(j+1)];

                if (neighbor && neighbor.temp > 1705) {
                    for (let x = -1; x <= 1; x++) {
                        for (let y = -1; y <= 1; y++) {
                            const wireNeighbor = adjacentPixels(neighbor.x, neighbor.y)[(x+1)*3+(y+1)];
                            if (wireNeighbor && wireNeighbor.element === "wire") {
                                wireNeighbor.charge = true;
                            }
                        }
                    }
                }
            }
        }
    }
};
