class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    rgb() {
        return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
    }

    hex(r,g,b) {
        return '#' + ((1<<24) + (r<<16) + (g<<8) + b).toString(16).slice(1);
     }
};   

const turquoise = new Color(64,224,208);
const purple = new Color(101, 31, 255);
purple.rgb()
