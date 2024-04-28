import React from 'react';

/**
 * Interface defining the properties for components that accept React nodes as children.
 * @interface ReactNodeProps
 * @property {React.ReactNode} children - The child elements of the component.
 */

export interface ReactNodeProps {
	children: React.ReactNode;
}

/**
 * Interface defining the properties for an image component.
 * @interface imgProps
 * @property {string} src - The URL of the image.
 * @property {string} alt - The alternative text for the image.
 * @property {number} width - The width of the image.
 * @property {number} height - The height of the image.
 */

export interface imgProps {
	src: string;
	alt: string;
	width: number;
	height: number;
}