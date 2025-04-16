document.querySelector('.navigation').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  const subBlock = document.querySelector('.sub-block');
  const subSuperBlock = document.querySelector('.sub-super-block');
  const spans = document.querySelectorAll('.sub-class .text');
  const bottomElements = document.querySelectorAll('.buttom, .dropdown-list, .super, .copy');
  const socialElement = document.querySelector('.social');
  const iframeElement = document.querySelector('iframe');
  
  // Add transition styles
  sidebar.style.transition = 'width 0.3s ease';
  subBlock.style.transition = 'margin-left 0.3s ease';
 
  if (iframeElement) {
    iframeElement.style.transition = 'margin-left 0.3s ease';
  }

  if (getComputedStyle(sidebar).width === '50px' || sidebar.style.width === '50px') {
    sidebar.style.width = '200px';
    subBlock.style.marginLeft = '200px';
    if (iframeElement) {
      iframeElement.style.marginLeft = '200px';
    }
    spans.forEach(span => {
      span.style.display = 'inline';
    });
    bottomElements.forEach(element => {
      element.style.display = 'block';
    });
    socialElement.style.display = 'flex';
  } else {
    sidebar.style.width = '50px';
    subBlock.style.marginLeft = '50px';
    if (iframeElement) {
      iframeElement.style.marginLeft = '50px';
    }
    spans.forEach(span => {
      span.style.display = 'none';
    });
    bottomElements.forEach(element => {
      element.style.display = 'none';
    });
    socialElement.style.display = 'none';
  }
});