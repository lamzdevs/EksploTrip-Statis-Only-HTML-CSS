/**
 * EksploTrip - Smooth Page Slider Transitions Across Stationary Navbar
 * Supports seamless slide between:
 * - Beranda (0%)
 * - Eksplorasi Destinasi (calc(-100% / 3))
 * - Bantuan Darurat (calc(-200% / 3))
 * Handles bug-free reload restoration, history navigation, and interactive accordion
 */

(function() {
    'use strict';

    // Clear hash cleanly
    if (window.location.hash) {
        try {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        } catch (e) {}
    }

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    function initPageSlider() {
        const navLinks = document.querySelector('.nav-links');
        const track = document.getElementById('slider-track');
        const viewBeranda = document.getElementById('view-beranda');
        const viewEksplo = document.getElementById('view-eksplorasi');
        const viewBantuan = document.getElementById('view-bantuan');
        const navItemBeranda = document.getElementById('nav-item-beranda');
        const navItemEksplo = document.getElementById('nav-item-eksplorasi');
        const navItemBantuan = document.getElementById('nav-item-bantuan');

        // Initialize FAQ Accordion for Bantuan Darurat
        function initAccordion() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                if (question && !question.dataset.accordionBound) {
                    question.dataset.accordionBound = 'true';
                    question.addEventListener('click', () => {
                        const isOpen = item.classList.contains('open');
                        item.classList.toggle('open');
                        const btn = item.querySelector('.faq-toggle-btn');
                        if (btn) {
                            btn.setAttribute('aria-expanded', !isOpen);
                        }
                    });
                }
            });
        }
        initAccordion();

        if (!navLinks) return;

        const navItems = Array.from(navLinks.querySelectorAll('.nav-item'));

        // Smooth sliding indicator line for navbar
        let navIndicator = navLinks.querySelector('.nav-indicator');
        if (!navIndicator) {
            navIndicator = document.createElement('li');
            navIndicator.className = 'nav-indicator';
            navIndicator.setAttribute('aria-hidden', 'true');
            navLinks.appendChild(navIndicator);
        }

        function updateIndicator(targetItem, animate) {
            if (!targetItem || !navIndicator) return;
            if (!animate) {
                navIndicator.style.transition = 'none';
            }
            navIndicator.style.transform = 'translateX(' + targetItem.offsetLeft + 'px)';
            navIndicator.style.width = targetItem.offsetWidth + 'px';
            if (!animate) {
                navIndicator.offsetHeight; // force reflow
                navIndicator.style.transition = '';
            }
        }

        function setActiveNavItem(targetItem, animateIndicator = true) {
            navItems.forEach(item => {
                item.classList.remove('active');
                const link = item.querySelector('a');
                if (link) link.removeAttribute('aria-current');
            });
            if (targetItem) {
                targetItem.classList.add('active');
                const link = targetItem.querySelector('a');
                if (link) link.setAttribute('aria-current', 'page');
                updateIndicator(targetItem, animateIndicator);
            }
        }

        if (track && viewBeranda && viewEksplo && viewBantuan) {
            let isSliding = false;
            let currentView = 'beranda';
            if (track.classList.contains('initial-bantuan')) {
                currentView = 'bantuan';
            } else if (track.classList.contains('initial-eksplorasi')) {
                currentView = 'eksplorasi';
            }

            const viewPositions = {
                beranda: 'translateX(0%)',
                eksplorasi: 'translateX(calc(-100% / 3))',
                bantuan: 'translateX(calc(-200% / 3))'
            };

            const viewElements = {
                beranda: viewBeranda,
                eksplorasi: viewEksplo,
                bantuan: viewBantuan
            };

            const navItemElements = {
                beranda: navItemBeranda,
                eksplorasi: navItemEksplo,
                bantuan: navItemBantuan
            };

            const pageFiles = {
                beranda: 'beranda.html',
                eksplorasi: 'eksplorasi_destinasi.html',
                bantuan: 'bantuan_darurat.html'
            };

            // Set initial transforms and visibility
            track.style.transform = viewPositions[currentView];
            Object.keys(viewElements).forEach(v => {
                if (v === currentView) {
                    viewElements[v].classList.remove('collapsed-view');
                    viewElements[v].classList.add('active-view');
                } else {
                    viewElements[v].classList.remove('active-view');
                    viewElements[v].classList.add('collapsed-view');
                }
            });
            setActiveNavItem(navItemElements[currentView], false);
            navLinks.classList.add('has-indicator');

            // Re-check after web fonts finish loading to ensure pixel-perfect alignment
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(() => {
                    const currentActive = navLinks.querySelector('.nav-item.active');
                    if (currentActive) {
                        updateIndicator(currentActive, false);
                    }
                });
            }

            // Reposition without animation on window resize
            window.addEventListener('resize', () => {
                const currentActive = navLinks.querySelector('.nav-item.active');
                if (currentActive) {
                    updateIndicator(currentActive, false);
                }
            });

            function slideTo(targetView, updateHistory) {
                if (updateHistory === undefined) updateHistory = true;
                if (isSliding || targetView === currentView) return;
                isSliding = true;

                // Expand all views so content doesn't clip during sliding animation
                Object.values(viewElements).forEach(el => el.classList.remove('collapsed-view'));

                currentView = targetView;
                track.style.transform = viewPositions[targetView];

                Object.keys(viewElements).forEach(v => {
                    if (v === targetView) {
                        viewElements[v].classList.add('active-view');
                    } else {
                        viewElements[v].classList.remove('active-view');
                    }
                });

                setActiveNavItem(navItemElements[targetView]);

                if (updateHistory) {
                    try {
                        history.pushState({ view: targetView }, '', pageFiles[targetView]);
                    } catch (e) {
                        console.warn('History pushState restricted:', e);
                    }
                }

                window.scrollTo({ top: 0, behavior: 'smooth' });

                setTimeout(() => {
                    isSliding = false;
                    Object.keys(viewElements).forEach(v => {
                        if (v !== currentView) {
                            viewElements[v].classList.add('collapsed-view');
                        }
                    });
                    window.scrollTo(0, 0);
                    initAccordion();
                }, 540);
            }

            // Click bindings on navbar items
            if (navItemBeranda) {
                const a = navItemBeranda.querySelector('a');
                if (a) a.addEventListener('click', e => { e.preventDefault(); slideTo('beranda'); });
            }
            if (navItemEksplo) {
                const a = navItemEksplo.querySelector('a');
                if (a) a.addEventListener('click', e => { e.preventDefault(); slideTo('eksplorasi'); });
            }
            if (navItemBantuan) {
                const a = navItemBantuan.querySelector('a');
                if (a) a.addEventListener('click', e => { e.preventDefault(); slideTo('bantuan'); });
            }

            // Logo clicks
            const brandLogo = document.querySelector('.navbar-brand');
            if (brandLogo) {
                brandLogo.addEventListener('click', e => { e.preventDefault(); slideTo('beranda'); });
            }

            // Global delegation for in-page links (CTAs, footer links, destination view all, etc.)
            document.addEventListener('click', function(e) {
                const link = e.target.closest('a');
                if (!link) return;
                const href = link.getAttribute('href');
                if (!href) return;

                if (href === 'beranda.html' || href.endsWith('/beranda.html')) {
                    e.preventDefault();
                    slideTo('beranda');
                } else if (href === 'eksplorasi_destinasi.html' || href.endsWith('/eksplorasi_destinasi.html') || link.classList.contains('cta-btn') || link.classList.contains('destinations-view-all')) {
                    e.preventDefault();
                    slideTo('eksplorasi');
                } else if (href === 'bantuan_darurat.html' || href.endsWith('/bantuan_darurat.html')) {
                    e.preventDefault();
                    slideTo('bantuan');
                }
            });

            // Browser back / forward buttons
            window.addEventListener('popstate', function(e) {
                const path = window.location.pathname.split('/').pop() || 'beranda.html';
                if (e.state && e.state.view) {
                    slideTo(e.state.view, false);
                } else if (path === 'bantuan_darurat.html') {
                    slideTo('bantuan', false);
                } else if (path === 'eksplorasi_destinasi.html') {
                    slideTo('eksplorasi', false);
                } else {
                    slideTo('beranda', false);
                }
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPageSlider);
    } else {
        initPageSlider();
    }
})();
