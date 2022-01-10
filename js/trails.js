const s = (sketch) => {
    let table;

    sketch.preload = () => {
        table = sketch.loadTable('/csv/coords.csv', 'csv');
    }

    sketch.setup = () => {
        IMAGE_WIDTH = 1400
        IMAGE_HEIGHT = 1920
        SCALE = 2
        COLOURS = ['red', 'blue', 'yellow'];
        let canvas = sketch.createCanvas(IMAGE_WIDTH / SCALE, IMAGE_HEIGHT / SCALE, WEBGL);
        canvas.parent('christmas-tree-trails');

    }

    sketch.draw = () => {
        sketch.strokeWeight(10);
        sketch.rotateY(frameCount * 0.01);

        for (let i = 0; i < table.getRowCount(); i++) {
            sketch.stroke(color(COLOURS[i % COLOURS.length]));
            sketch.point(table.getNum(i, 0) / SCALE, (150 - table.getNum(i, 1)) / SCALE, table.getNum(i, 2) / SCALE);
        }
    }
};

let trailsp5 = new p5(s);