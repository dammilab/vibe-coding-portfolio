(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');

  // 모바일 메뉴 토글
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
      document.body.style.overflow = navLinks.classList.contains('is-open') ? 'hidden' : '';
    });

    navItems.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navLinks.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // 포트폴리오 카테고리 필터
  if (filterButtons.length && portfolioCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-filter') || 'all';

        filterButtons.forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
        });

        portfolioCards.forEach(function (card) {
          const categories = (card.getAttribute('data-category') || '').split(' ');
          const match = target === 'all' || categories.includes(target);
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // 포트폴리오 이미지 클릭 시 라이트박스 열기
  if (lightbox && lightboxImage && lightboxCaption && lightboxClose && portfolioCards.length) {
    function openLightbox(img, title) {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt || '';
      lightboxCaption.textContent = title || img.alt || '';

      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      lightboxImage.src = '';
      lightboxCaption.textContent = '';
    }

    portfolioCards.forEach(function (card) {
      card.addEventListener('click', function () {
        const img = card.querySelector('.portfolio-image');
        const titleEl = card.querySelector('.portfolio-card-title');
        if (!img) return;
        openLightbox(img, titleEl && titleEl.textContent);
      });
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (event) {
      if (event.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });
  }
})();
