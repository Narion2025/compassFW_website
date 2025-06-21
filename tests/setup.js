// Jest Setup File
// Configure testing environment

// Add custom matchers if needed
expect.extend({
  toBeVisible(element) {
    const pass = element && element.style.display !== 'none' && element.style.visibility !== 'hidden';
    return {
      pass,
      message: () => `expected element to ${pass ? 'not ' : ''}be visible`
    };
  }
});

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  
  observe() {
    return null;
  }
  
  unobserve() {
    return null;
  }
  
  disconnect() {
    return null;
  }
}; 