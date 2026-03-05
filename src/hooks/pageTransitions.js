let activeTransition = null;

export function registerPageTransition(callback) {
  activeTransition = callback;
}

export function unregisterPageTransition() {
  activeTransition = null;
}

export async function runPageTransition() {
  if (activeTransition) {
    await activeTransition();
  }
}
