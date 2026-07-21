// lib/cloudinary.js

const CLOUD_NAME = "yh02xqqm";

const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export function cloudinaryImage(path, transformations = "f_auto,q_auto") {
  return `${BASE_URL}/${transformations}/${path}`;
}
