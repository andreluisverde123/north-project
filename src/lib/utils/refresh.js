import { goto } from '$app/navigation';

/**
 * Refreshes the current page by navigating to the same route with a cache-busting query parameter
 * @returns {Promise<void>} A promise that resolves when navigation is complete
 */
export function refreshPage() {
  // Get the current URL path
  const currentPath = window.location.pathname;
  
  // Use SvelteKit's goto to navigate to the same page (with a cache-busting query param)
  return goto(currentPath + '?refresh=' + Date.now(), { replaceState: true });
}