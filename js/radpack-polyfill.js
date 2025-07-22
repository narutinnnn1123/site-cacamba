// Polyfill for radpack function to prevent errors
window.radpack = function(moduleName) {
  console.warn(`radpack called for module: ${moduleName} - using polyfill`);
  
  // Return a Promise that resolves to a mock object
  return Promise.resolve({
    default: function() {
      console.warn(`Mock constructor for ${moduleName}`);
      return {};
    }
  });
};

// Initialize wsb object if it doesn't exist
window.wsb = window.wsb || {};

// Mock Core.utils if it doesn't exist
window.Core = window.Core || {
  utils: {
    onAllowCookieTracking: function(callback) {
      // Execute callback immediately for now
      if (typeof callback === 'function') {
        callback();
      }
    },
    deferBootstrap: function(config) {
      console.warn('deferBootstrap called with config:', config);
      // Mock implementation - in a real app this would bootstrap components
    }
  }
};