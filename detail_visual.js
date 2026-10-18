/**
 * EksploTrip - Detail Visual Interactivity Script
 * Handles tabs (Foto / Video), category filters, pagination, and lightbox preview.
 */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        // Elements
        const mediaTabs = document.querySelectorAll('.media-tab-btn');
        const categoryPills = document.querySelectorAll('.cat-pill-btn');
        const visualCards = document.querySelectorAll('.visual-item-card');
        const pageNums = document.querySelectorAll('.btn-page-num');
        const prevArrow = document.querySelector('.btn-page-arrow.prev-page');
        const nextArrow = document.querySelector('.btn-page-arrow.next-page');
        const countText = document.querySelector('.media-count-text');

        // Lightbox Elements
        const lightboxModal = document.getElementById('lightbox-modal');
        const btnCloseLightbox = document.getElementById('btn-close-lightbox');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxSubtitle = document.getElementById('lightbox-subtitle');
        const lightboxImg = document.getElementById('lightbox-img');

        let currentMediaType = 'photo'; // default active tab
        let currentCategory = 'all';
        let currentPage = 1;
        const totalPages = 4;

        // 1. Filter Logic
        function applyFilters() {
            let visibleCount = 0;
            let photoCount = 0;
            let videoCount = 0;

            visualCards.forEach((card) => {
                const itemType = card.getAttribute('data-type'); // 'photo' or 'video'
                const itemCat = card.getAttribute('data-cat') || 'alam';

                const matchesMedia = (currentMediaType === 'all') || (itemType === currentMediaType);
                const matchesCat = (currentCategory === 'all') || (itemCat === currentCategory);

                if (matchesMedia && matchesCat) {
                    card.style.display = 'block';
                    visibleCount++;
                    if (itemType === 'photo') photoCount++;
                    if (itemType === 'video') videoCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Update counter text dynamically
            if (countText) {
                if (currentMediaType === 'photo') {
                    countText.textContent = `${visibleCount} foto ditampilkan (Halaman ${currentPage})`;
                } else if (currentMediaType === 'video') {
                    countText.textContent = `${visibleCount} video ditampilkan (Halaman ${currentPage})`;
                } else {
                    countText.textContent = `60 foto dan 20 video (Halaman ${currentPage})`;
                }
            }
        }

        // 2. Tab Click Handling
        mediaTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                mediaTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentMediaType = tab.getAttribute('data-media');
                applyFilters();
            });
        });

        // 3. Category Pills Handling
        categoryPills.forEach((pill) => {
            pill.addEventListener('click', () => {
                categoryPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentCategory = pill.getAttribute('data-cat');
                applyFilters();
            });
        });

        // 4. Pagination Handling
        function setPage(pageNum) {
            currentPage = Math.max(1, Math.min(pageNum, totalPages));
            pageNums.forEach((btn, index) => {
                if (index + 1 === currentPage) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            if (prevArrow) {
                prevArrow.disabled = (currentPage === 1);
            }
            if (nextArrow) {
                nextArrow.disabled = (currentPage === totalPages);
            }

            // Scroll gently back to top of catalog
            const catalogCard = document.querySelector('.visual-catalog-main-card');
            if (catalogCard) {
                catalogCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            applyFilters();
        }

        pageNums.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                setPage(index + 1);
            });
        });

        if (prevArrow) {
            prevArrow.addEventListener('click', () => {
                if (currentPage > 1) setPage(currentPage - 1);
            });
        }

        if (nextArrow) {
            nextArrow.addEventListener('click', () => {
                if (currentPage < totalPages) setPage(currentPage + 1);
            });
        }

        // 5. Lightbox Modal Preview
        visualCards.forEach((card) => {
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-title') || 'Air Terjun Utama Curug Cibulao';
                const type = card.getAttribute('data-type') === 'video' ? 'Dokumentasi Video Real-time' : 'Dokumentasi Foto Real-time';
                const img = card.querySelector('.visual-card-thumb');

                if (lightboxTitle) lightboxTitle.textContent = title;
                if (lightboxSubtitle) lightboxSubtitle.textContent = type;
                if (lightboxImg && img) lightboxImg.src = img.src;

                if (lightboxModal) {
                    lightboxModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        function closeLightbox() {
            if (lightboxModal) {
                lightboxModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        if (btnCloseLightbox) {
            btnCloseLightbox.addEventListener('click', closeLightbox);
        }

        if (lightboxModal) {
            lightboxModal.addEventListener('click', (e) => {
                if (e.target === lightboxModal) {
                    closeLightbox();
                }
            });
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
                closeLightbox();
            }
        });

        // Initial setup: in Figma, the initial view shows 20 cards on page 1 with "Foto" tab active
        // But in Figma, both photos and videos are presented in the grid (14 photos, 6 videos).
        // Let's ensure default view shows all 20 cards gracefully.
        currentMediaType = 'all';
    });
})();
