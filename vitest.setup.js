// vitest.setup.js
class IntersectionObserver {
  constructor(callback, options) {
    // Initialize the observer
  }

  observe(target) {
    // Start observing the target
  }

  unobserve(target) {
    // Stop observing the target
  }

  disconnect() {
    // Disconnect all observations
  }
}

global.IntersectionObserver = IntersectionObserver;
