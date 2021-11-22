const tabsContainer = document.querySelector('.tabs'),
    tabs = document.querySelectorAll('.tab'),
    tabsContent = document.querySelectorAll('.tab-content');

tabsContainer.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('tab')) {
        hideTabsContent();
        tabs.forEach((item, i) => {
            if (e.target == item) {
                showTabContent(i);
            }
        });
    }
});

function hideTabsContent() {
    tabsContent.forEach((item, i) => {
        item.style.display = 'none';
        tabs[i].classList.remove('tab_active');
    });
}

function showTabContent(i = 0) {
    hideTabsContent();
    tabsContent[i].style.display = 'grid';
    tabs[i].classList.add('tab_active');
    tabsContent[i].classList.add('fadeOut');
}

showTabContent();

