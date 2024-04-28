/**
 * Interface defining the properties of a card.
 * @interface CardInterface
 * @property {string} backgroundColor - The background color of the card.
 * @property {number} width - The width of the card.
 * @property {Object} img - The image object containing source, alt text, width, and height.
 * @property {string} img.src - The URL of the image.
 * @property {string} img.alt - The alternative text for the image.
 * @property {number} img.width - The width of the image.
 * @property {number} img.height - The height of the image.
 * @property {string} heading - The heading text of the card.
 * @property {string} text - The description text of the card.
 */

export interface CardInterface {
  backgroundColor: string,
  width: number,
  img: { src: string, alt: string, width: number, height: number },
  heading: string,
  text: string,
}

/**
 * Interface defining the properties for styling the card wrapper.
 * @interface CardWrapInterface
 * @property {string} $backgroundColor - The background color of the card wrapper.
 * @property {number} width - The width of the card wrapper.
 */

export interface CardWrapInterface {
  $backgroundColor: string;
  width: number;
}

