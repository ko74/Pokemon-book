import { createCanvas, loadImage, Canvas } from 'canvas';

async function loadImageFromURL(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  });
}

export async function getDominantColor(imagePath: string, callback: (color: string) => void): Promise<void> {
  try {
    const img = await loadImageFromURL(imagePath);

    // Create a canvas with the same dimensions as the image
    const canvas = createCanvas(img.width, img.height) as Canvas;
    const ctx = canvas.getContext('2d');

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Get the image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Count the occurrences of each color
    const colorCount = new Map<string, number>();
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const color = `rgb(${r},${g},${b})`;
      colorCount.set(color, (colorCount.get(color) || 0) + 1);
    }

    // Find the most common color
    let dominantColor: string | undefined;
    let maxCount = 0;
    colorCount.forEach((count, color) => {
      if (count > maxCount) {
        dominantColor = color;
        maxCount = count;
      }
    });

    if (dominantColor) {
      callback(dominantColor);
    } else {
      throw new Error('Unable to extract dominant color');
    }
  } catch (error) {
    console.error('Error extracting color:', error);
  }
}

export const formattedColor = (color: string | null): string | null => {
  if (!color) {
    return null;
  }
  return color.replace(/\[|\]/g, "");
};
