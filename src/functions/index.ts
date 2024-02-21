// import * as ColorThief from 'colorthief';

export async function loadImageFromURL(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    img.src = url;
  });
}

export async function getDominantColor(imagePath: string, callback: (color: string) => void): Promise<void> {
  // try {
  //   const img = await loadImageFromURL(imagePath);

  //   const colorThief = new ColorThief();
  //   const dominantColor = colorThief.getColor(img);

  //   const color = `rgb(${dominantColor[0]},${dominantColor[1]},${dominantColor[2]})`;

  //   callback(color);
  // } catch (error) {
  //   console.error('Error extracting color:', error);
  // }
}


export const formattedColor = (color: string | null): string | null => {
  if (!color) {
    return null;
  }
  return color.replace(/\[|\]/g, "");
};
