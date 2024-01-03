document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon: HTMLElement | null = document.querySelector('#nav-hamburger-icon');
  const navList: HTMLElement | null = document.querySelector('.nav-list');
  const mobileSearchBarContainer: HTMLElement | null = document.querySelector('.mobile-searchbar-container');
  const inputGroup: HTMLElement | null = document.querySelector('.input-group');
  const nav: HTMLElement | null = document.querySelector('nav');
  let isNavListVisible: boolean = false;
  let isMobileView: boolean = window.innerWidth <= 1024;

  const updateNavListVisibility = () => {
      navList?.classList.toggle('visible', isNavListVisible && isMobileView);
      navList?.classList.toggle('hidden', !isNavListVisible || !isMobileView);
      updateMobileSearchBarPosition();
  };

  const updateMobileSearchBarPosition = () => {
      if (isMobileView) {
          mobileSearchBarContainer?.classList.toggle('moved-down', isNavListVisible);
          mobileSearchBarContainer?.classList.toggle('moved-up', !isNavListVisible);
      } else {
          mobileSearchBarContainer?.classList.remove('moved-down', 'moved-up');
      }
  };

  const toggleNavList = () => {
      isNavListVisible = !isNavListVisible;
      updateNavListVisibility();
  };

  const handleResize = () => {
      const newIsMobileView: boolean = window.innerWidth <= 1024;
      if (newIsMobileView !== isMobileView) {
          isMobileView = newIsMobileView;
          updateNavListVisibility();
      }

      if (isMobileView && mobileSearchBarContainer && inputGroup) {
          mobileSearchBarContainer.appendChild(inputGroup);
      } else if (nav && inputGroup) {
          nav.appendChild(inputGroup);
      }
  };

  hamburgerIcon?.addEventListener('click', toggleNavList);
  window.addEventListener('resize', handleResize);
  handleResize();
  updateNavListVisibility();
});
