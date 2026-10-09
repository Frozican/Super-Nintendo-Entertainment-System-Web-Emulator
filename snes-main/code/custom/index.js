export { keyToCode } from "./keyboard.js";

export function dlog() {
  console.log("dlog", ...arguments);
}

export async function sleep(ms = 1000) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
