
class SVG{
    constructor(logo, TXcolor){

        this.logo = logo;
        this.TXcolor = TXcolor;
    }


    render(){

    return (`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">


    ${this.logo}

    <text x="150" y="125" font-size="45" text-anchor="middle" fill="${this.TXcolor}">SVG</text>

    </svg>`)
};
}

module.exports = SVG;