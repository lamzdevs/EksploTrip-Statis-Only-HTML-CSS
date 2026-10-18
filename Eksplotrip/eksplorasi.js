(function() {
    'use strict';

    // Database Lengkap 48 Destinasi Wisata Alam Bogor (12 per halaman x 4 halaman)
    const destinationsCatalog = [
        // === HALAMAN 1 ===
        {
            title: "Curug Cibulao",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Cisarua, Bogor",
            tags: ["Trek Landai", "Alam Asri", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Situ Tamansari",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Tamansari, Bogor",
            tags: ["Akses Motor Mudah", "Pemandangan Gunung", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Luhur",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Sukamakmur, Bogor",
            tags: ["Trekking Sedang", "Pemandangan Kota", "Ramah Pemula"],
            condition: ["pemula"]
        },
        {
            title: "Curug Leuwi Hejo",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Babakan Madang, Bogor",
            tags: ["Air Jernih", "Trek Ringan", "Dekat Parkiran"],
            condition: ["pemula", "parkir", "keluarga"]
        },
        {
            title: "Situ Gede",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Bogor Barat, Kota Bogor",
            tags: ["Wisata Hutan", "Ramah Keluarga", "Akses Mudah"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Munara",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Rumpin, Bogor",
            tags: ["Puncak Batu", "Ramah Pemula", "Sunrise Indah"],
            condition: ["pemula"]
        },
        {
            title: "Curug Nangka",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Tamansari, Bogor",
            tags: ["Hutan Pinus", "Sejuk Asri", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Danau Quarry",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Rumpin, Bogor",
            tags: ["Tebing Hijau", "Spot Foto", "Akses Motor Mudah"],
            condition: ["pemula", "parkir"]
        },
        {
            title: "Bukit Alesano",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Cijeruk, Bogor",
            tags: ["Camping Ground", "City Light", "Ramah Pemula"],
            condition: ["pemula"]
        },
        {
            title: "Curug Cilember",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Megamendung, Bogor",
            tags: ["7 Tingkat Curug", "Taman Kupu-kupu", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Situ Rawagede",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Sukamakmur, Bogor",
            tags: ["Danau Pegunungan", "Suasana Sejuk", "Spot Mancing"],
            condition: ["keluarga", "pemula"]
        },
        {
            title: "Gunung Kencana",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Cisarua, Bogor",
            tags: ["Tanjakan Sambal", "Kebun Teh", "Rute Ekstrem"],
            condition: ["ekstrem"]
        },

        // === HALAMAN 2 ===
        {
            title: "Curug Leuwi Lieuk",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Babakan Madang, Bogor",
            tags: ["Tebing Eksotis", "Air Toska", "Trek Ringan"],
            condition: ["pemula"]
        },
        {
            title: "Situ Sukarame",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Parakansalak, Bogor",
            tags: ["Kebun Teh", "Tenang & Asri", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Pancar",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Sentul, Bogor",
            tags: ["Hutan Pinus", "Air Panas Alami", "Ramah Pemula"],
            condition: ["pemula", "keluarga", "parkir"]
        },
        {
            title: "Curug Putri Kencana",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Babakan Madang, Bogor",
            tags: ["Kolam Alami", "Jembatan Bambu", "Ramah Keluarga"],
            condition: ["keluarga", "pemula"]
        },
        {
            title: "Telaga Saat Puncak",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Cisarua, Bogor",
            tags: ["Titik Nol Ciliwung", "Kabut Eksotis", "Spot Ikonik"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Bukit Paniisan",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Babakan Madang, Bogor",
            tags: ["Trekking Sentul", "Hawa Sejuk", "Ramah Pemula"],
            condition: ["pemula"]
        },
        {
            title: "Curug Seribu",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Pamijahan, Bogor",
            tags: ["Curug Tertinggi", "Hawa Alami", "Rute Ekstrem"],
            condition: ["ekstrem"]
        },
        {
            title: "Danau Dora Cibinong",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Cibinong, Bogor",
            tags: ["Ecopark Luas", "Jembatan Kayu", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Salak Endah",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Pamijahan, Bogor",
            tags: ["Kompleks Alam", "Udara Dingin", "Ramah Pemula"],
            condition: ["pemula", "keluarga"]
        },
        {
            title: "Curug Bidadari",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Sentul Paradise, Bogor",
            tags: ["Pasir Putih", "Kolam Renang", "Ramah Keluarga"],
            condition: ["keluarga", "parkir"]
        },
        {
            title: "Situ Cikaret",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Cibinong, Bogor",
            tags: ["Kuliner Tepi Danau", "Akses Mudah", "Santai Sore"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Kawah Ratu",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Taman Nasional GHS, Bogor",
            tags: ["Kawah Vulkanik", "Hutan Tropis", "Rute Ekstrem"],
            condition: ["ekstrem"]
        },

        // === HALAMAN 3 ===
        {
            title: "Curug Mariuk",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Sukamakmur, Bogor",
            tags: ["Hidden Gem", "Air Es Alami", "Trekking Sedang"],
            condition: ["pemula"]
        },
        {
            title: "Danau Lido",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Cigombong, Bogor",
            tags: ["Perahu Rakit", "Pemandangan Salak", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Batu Jonggol",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Sukamakmur, Bogor",
            tags: ["Puncak Lancip", "Panorama 360", "Rute Ekstrem"],
            condition: ["ekstrem"]
        },
        {
            title: "Curug Ciherang",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Sukamakmur, Bogor",
            tags: ["Rumah Pohon", "Jembatan Gantung", "Ramah Keluarga"],
            condition: ["keluarga", "parkir"]
        },
        {
            title: "Situ Burung",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Dramaga, Bogor",
            tags: ["Dekat Kampus IPB", "Burung Liar", "Teduh & Damai"],
            condition: ["pemula", "parkir"]
        },
        {
            title: "Bukit Gantole",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Cisarua, Bogor",
            tags: ["Paralayang Puncak", "Kebun Teh", "Ramah Pemula"],
            condition: ["pemula", "keluarga", "parkir"]
        },
        {
            title: "Curug Country",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Tanjungsari, Bogor",
            tags: ["Mini Niagara", "Trek Mudah", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Telaga Warna Puncak",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Megamendung, Bogor",
            tags: ["Danau Berwarna", "Fauna Liar", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Halimun",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Leuwiliang, Bogor",
            tags: ["Hutan Kanopi", "Owa Jawa", "Rute Ekstrem"],
            condition: ["ekstrem"]
        },
        {
            title: "Curug Balong Endah",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Pamijahan, Bogor",
            tags: ["Bening Kaca", "Kolam Bebatuan", "Ramah Pemula"],
            condition: ["pemula"]
        },
        {
            title: "Situ Tunggilis",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Cileungsi, Bogor",
            tags: ["Teratai Cantik", "Wisata Murah", "Akses Mudah"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Puncak Kencana",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Cisarua, Bogor",
            tags: ["Lautan Awan", "Spot Sunrise", "Rute Menantang"],
            condition: ["ekstrem"]
        },

        // === HALAMAN 4 ===
        {
            title: "Curug Cigamea",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Pamijahan, Bogor",
            tags: ["Dua Curug Kembar", "Jalur Rapi", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Danau Lotus",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Jonggol, Bogor",
            tags: ["Bunga Lotus", "Suasana Tenang", "Spot Foto"],
            condition: ["pemula", "keluarga"]
        },
        {
            title: "Gunung Peyek",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Parung, Bogor",
            tags: ["Bukit Kapur", "Air Hangat Belerang", "Ramah Pemula"],
            condition: ["pemula", "parkir"]
        },
        {
            title: "Curug Piit",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Sukajaya, Bogor",
            tags: ["Burung Pipit", "Hutan Perawan", "Rute Ekstrem"],
            condition: ["ekstrem"]
        },
        {
            title: "Situ Tonjong",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Tajurhalang, Bogor",
            tags: ["Jogging Track", "Taman Asri", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Bukit Surya Salaka",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Tenjolaya, Bogor",
            tags: ["Glamping Pemandangan", "City Light", "Ramah Pemula"],
            condition: ["pemula", "keluarga"]
        },
        {
            title: "Curug Kondang",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Pamijahan, Bogor",
            tags: ["Aliran Deras", "Udara Bersih", "Ramah Pemula"],
            condition: ["pemula", "parkir"]
        },
        {
            title: "Situ Kebantenan",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Cibinong, Bogor",
            tags: ["Taman Kota", "Danau Tenang", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Bukit Geulis",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Sukaraja, Bogor",
            tags: ["Rest Area Puncak", "Spot Selfie", "Akses Mobil"],
            condition: ["pemula", "keluarga", "parkir"]
        },
        {
            title: "Curug Pangeran",
            type: "curug",
            typeName: "Curug/Air Terjun",
            typeIcon: "water_drop",
            location: "Pamijahan, Bogor",
            tags: ["Air Toska Jernih", "Kolam Berenang", "Ramah Pemula"],
            condition: ["pemula"]
        },
        {
            title: "Situ Kemuning",
            type: "danau",
            typeName: "Situ/Danau",
            typeIcon: "waves",
            location: "Bojonggede, Bogor",
            tags: ["Bebek Air", "Murah Meriah", "Ramah Keluarga"],
            condition: ["keluarga", "pemula", "parkir"]
        },
        {
            title: "Gunung Menyan",
            type: "gunung",
            typeName: "Gunung/Bukit",
            typeIcon: "landscape",
            location: "Pamijahan, Bogor",
            tags: ["Kebun Kopi Lokal", "Bukit Asri", "Ramah Pemula"],
            condition: ["pemula"]
        }
    ];

    const ITEMS_PER_PAGE = 12;
    let currentTypeFilter = 'all';
    let currentConditionFilter = 'all';
    let currentPage = 1;

    function initCatalog() {
        const grid = document.getElementById('destinations-grid');
        const btnPrev = document.getElementById('btn-prev');
        const btnNext = document.getElementById('btn-next');
        const pagiNumbersContainer = document.getElementById('pagi-numbers');
        const typeFilterButtons = document.querySelectorAll('#type-filter-group .filter-btn');
        const conditionFilterButtons = document.querySelectorAll('#condition-filter-group .filter-btn');

        if (!grid || !btnPrev || !btnNext || !pagiNumbersContainer) return;

        function getFilteredDestinations() {
            return destinationsCatalog.filter(dest => {
                const matchType = (currentTypeFilter === 'all') || (dest.type === currentTypeFilter);
                const matchCondition = (currentConditionFilter === 'all') || (dest.condition && dest.condition.includes(currentConditionFilter));
                return matchType && matchCondition;
            });
        }

        function renderCard(dest) {
            const tagsHtml = dest.tags.map(t => `<li>${t}</li>`).join('');
            return `
            <article class="destination-card" data-href="detail_katalog.html" tabindex="0" role="link" aria-label="Lihat detail destinasi ${dest.title}">
                <div class="card-media">
                    <span class="card-badge">
                        <span class="material-symbols-outlined">${dest.typeIcon}</span>
                        <span>${dest.typeName}</span>
                    </span>
                    <img src="assets/images/eksplorasi_destinasi/list_katalog.png" alt="${dest.title}" class="card-img" loading="lazy">
                </div>
                <div class="card-body">
                    <div class="card-header-row">
                        <h3 class="card-title">${dest.title}</h3>
                        <span class="card-location">
                            <span class="material-symbols-outlined">location_on</span>
                            <span>${dest.location}</span>
                        </span>
                    </div>
                    <ul class="card-tags">
                        ${tagsHtml}
                    </ul>
                    <div class="card-footer-row">
                        <span class="card-verified">
                            <span class="material-symbols-outlined">verified</span>
                            <span>Terverifikasi</span>
                        </span>
                        <a href="detail_katalog.html" class="card-action-btn" aria-label="Lihat detail ${dest.title}">
                            <span class="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </article>`;
        }

        function attachCardEvents() {
            const cards = grid.querySelectorAll('.destination-card');
            cards.forEach(card => {
                card.addEventListener('click', function(e) {
                    if (!e.target.closest('a')) {
                        window.location.href = 'detail_katalog.html';
                    }
                });
                card.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.location.href = 'detail_katalog.html';
                    }
                });
            });
        }

        function displayPage(page, shouldScroll = false) {
            const filtered = getFilteredDestinations();
            const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

            if (page < 1) page = 1;
            if (page > totalPages) page = totalPages;
            currentPage = page;

            const startIdx = (page - 1) * ITEMS_PER_PAGE;
            const endIdx = startIdx + ITEMS_PER_PAGE;
            const pageItems = filtered.slice(startIdx, endIdx);

            grid.classList.add('transitioning');
            setTimeout(() => {
                if (pageItems.length === 0) {
                    grid.innerHTML = `
                        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 18px; box-shadow: var(--card-shadow);">
                            <span class="material-symbols-outlined" style="font-size: 48px; color: var(--color-placeholder);">search_off</span>
                            <h3 style="font-size: 18px; font-weight: 700; margin-top: 12px; color: var(--color-text);">Destinasi Tidak Ditemukan</h3>
                            <p style="font-size: 13px; color: var(--color-hover-text); margin-top: 6px;">Coba gunakan filter lain untuk menemukan keindahan alam di Bogor.</p>
                        </div>
                    `;
                } else {
                    grid.innerHTML = pageItems.map(renderCard).join('');
                    attachCardEvents();
                }
                grid.classList.remove('transitioning');

                renderPaginationControls(totalPages);

                if (shouldScroll) {
                    const catalogSection = document.getElementById('katalog-destinasi');
                    if (catalogSection) {
                        const offset = 90;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = catalogSection.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }, 120);
        }

        function renderPaginationControls(totalPages) {
            btnPrev.disabled = (currentPage <= 1);
            btnPrev.setAttribute('aria-disabled', currentPage <= 1 ? 'true' : 'false');

            btnNext.disabled = (currentPage >= totalPages);
            btnNext.setAttribute('aria-disabled', currentPage >= totalPages ? 'true' : 'false');

            let buttonsHtml = '';
            for (let p = 1; p <= totalPages; p++) {
                const isActive = (p === currentPage);
                buttonsHtml += `<li><button type="button" class="pagi-num ${isActive ? 'active' : ''}" data-page="${p}" ${isActive ? 'aria-current="page"' : ''}>${p}</button></li>`;
            }
            pagiNumbersContainer.innerHTML = buttonsHtml;

            pagiNumbersContainer.querySelectorAll('.pagi-num').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetPage = parseInt(this.getAttribute('data-page'), 10);
                    if (targetPage !== currentPage) {
                        goToPage(targetPage, true);
                    }
                });
            });
        }

        function goToPage(targetPage, shouldScroll = false) {
            currentPage = targetPage;
            const newUrl = new URL(window.location.href);
            if (targetPage === 1) {
                newUrl.searchParams.delete('page');
            } else {
                newUrl.searchParams.set('page', targetPage);
            }
            newUrl.hash = '';

            try {
                window.history.pushState({ page: targetPage }, '', newUrl.toString());
            } catch (e) {
                console.warn('History pushState restricted:', e);
            }
            displayPage(targetPage, shouldScroll);
        }

        btnPrev.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentPage > 1) {
                goToPage(currentPage - 1, true);
            }
        });

        btnNext.addEventListener('click', function(e) {
            e.preventDefault();
            const totalPages = Math.ceil(getFilteredDestinations().length / ITEMS_PER_PAGE);
            if (currentPage < totalPages) {
                goToPage(currentPage + 1, true);
            }
        });

        typeFilterButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                typeFilterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentTypeFilter = this.getAttribute('data-type') || 'all';
                goToPage(1, false);
            });
        });

        conditionFilterButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                conditionFilterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentConditionFilter = this.getAttribute('data-condition') || 'all';
                goToPage(1, false);
            });
        });

        window.addEventListener('popstate', function(e) {
            const params = new URLSearchParams(window.location.search);
            const page = parseInt(params.get('page'), 10) || 1;
            displayPage(page, false);
        });

        const initialParams = new URLSearchParams(window.location.search);
        const initialPage = parseInt(initialParams.get('page'), 10) || 1;
        displayPage(initialPage, false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCatalog);
    } else {
        initCatalog();
    }
})();
