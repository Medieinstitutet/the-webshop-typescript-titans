import { displayProducts } from '../productPage/displayProducts';
document.addEventListener("DOMContentLoaded", () => {
    
    const navList = document.querySelector('.nav-list') as HTMLElement;
    const mobileSearchBarContainer = document.querySelector('.mobile-searchbar-container') as HTMLElement;
    const inputGroup = document.querySelector('.input-group') as HTMLElement;
    const nav = document.querySelector('nav') as HTMLElement;
    const hamburgerIcon = document.getElementById('nav-hamburger-icon') as HTMLElement;
    const xIcon = document.getElementById('nav-x-icon') as HTMLElement;
    let NavListVisible: boolean = false;
    let isMobileView: boolean = window.innerWidth <= 1024;
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    const searchIcon = document.getElementById('nav-search-icon') as HTMLElement;
    
    const handleSearch = () => {
        const searchTerm = searchInput.value;
        displayProducts(searchTerm);
    };

    const scrollToProductSection = () => {
      const productPageSection = document.getElementById('productPageSection');
      if (productPageSection) {
        productPageSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    const updateNavListVisibility = (): void => {
      navList.classList.toggle('visible', NavListVisible && isMobileView);
      navList.classList.toggle('hidden', !NavListVisible || !isMobileView);

      updateMobileSearchBarPosition();
      updateIcons();
    };

    const updateMobileSearchBarPosition = (): void => {
      if (isMobileView) {
        mobileSearchBarContainer.classList.toggle('moved-down', NavListVisible);
        mobileSearchBarContainer.classList.toggle('moved-up', !NavListVisible);
      } else {
        mobileSearchBarContainer.classList.remove('moved-down', 'moved-up');
      }
    };

    const updateIcons = (): void => {
        if (isMobileView) {
            if (NavListVisible) {
                hamburgerIcon.classList.add('hide-icon');
                hamburgerIcon.classList.remove('show-icon');
                xIcon.classList.add('show-icon');
                xIcon.classList.remove('hide-icon');
            } else {
                hamburgerIcon.classList.add('show-icon');
                hamburgerIcon.classList.remove('hide-icon');
                xIcon.classList.add('hide-icon');
                xIcon.classList.remove('show-icon');
            }
        } else {
            hamburgerIcon.classList.add('hide-icon');
            xIcon.classList.add('hide-icon');
        }
    };


    const toggleNavList = (): void => {
      NavListVisible = !NavListVisible;
      updateNavListVisibility();
    };

    const handleResize = (): void => {
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

    searchInput.addEventListener('input', handleSearch);
    searchIcon.addEventListener('click', () => {
      handleSearch();
      scrollToProductSection();
    });
    
  
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        handleSearch();
        scrollToProductSection();
      }
    });
    
    window.addEventListener('resize', handleResize);
    hamburgerIcon.addEventListener('click', toggleNavList);
    xIcon.addEventListener('click', toggleNavList);
    handleResize();
    updateNavListVisibility();
});
