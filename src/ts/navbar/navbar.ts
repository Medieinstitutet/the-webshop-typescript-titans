const inputGroup: HTMLElement | null = document.querySelector('.input-group');
const nav: HTMLElement | null = document.querySelector('nav');
const mobileSearchBarContainer: HTMLElement | null = document.querySelector('.mobile-searchbar-container');

function handleResize() {
  const isMobileView: boolean = window.innerWidth <= 1024;

  if (isMobileView) {
    if (mobileSearchBarContainer && inputGroup) {
      mobileSearchBarContainer.appendChild(inputGroup);
    }
  } else {
    if (nav && inputGroup) {
      nav.appendChild(inputGroup);
    }
  }
}
handleResize();
window.addEventListener('resize', handleResize);

