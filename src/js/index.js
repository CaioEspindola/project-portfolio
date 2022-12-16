const aboutContent = document.getElementById('information-about-me')
const socialContent = document.getElementById('information-social-media')

const aboutTab = document.getElementById('tab-about-me')

aboutTab.addEventListener('click', () => {
  aboutContent.classList.remove('tab_hide')
  socialContent.classList.add('tab_hide')
})

const socialTab = document.getElementById('tab-social-media')

socialTab.addEventListener('click', () => {
  aboutContent.classList.add('tab_hide')
  socialContent.classList.remove('tab_hide')
})
