import {TextStyle, Text} from "pixi.js";

export const baseTextStyle = new TextStyle({
    fontFamily: 'Arial',
    fontSize: 60,
    fontWeight: 'bold',
    fill: 'white',
    align: 'center',
    stroke: { // Stroke properties in v8
        color: 0x000000,
        width: 4,
        alpha: 1
    },
    dropShadow: {
        color: 0x000000,
        blur: 3,
        angle: Math.PI / 4,
        distance: 2,
        alpha: 0.8
    }
});


export const mainStyle = new TextStyle({

    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
    fill: 'white',
    align: 'center',

});

export function setTextWidthFixed(text: Text, targetWidth: number) {
    const originalWidth = text.width;
    const scale = targetWidth / originalWidth;

    // Adjust font size instead of scaling
    text.style = new TextStyle({
        ...text.style,
        fontSize: text.style.fontSize as number * scale
    });
}

