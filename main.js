const menuBtn = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");
menuBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
            document.body.classList.add("sidebar-active");
            overlay.style.display = "block";
        });
    
        closeBtn.addEventListener("click", () => {
            sidebar.classList.remove("open");
            document.body.classList.remove("sidebar-active");
            overlay.style.display = "none";
        });
    
        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            document.body.classList.remove("sidebar-active");
            overlay.style.display = "none";
        });
    
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                sidebar.classList.add("open");
            } else {
                sidebar.classList.remove("open");
                document.body.classList.remove("sidebar-active");
            }
        });
        document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("search");
            const projectCards = document.querySelectorAll(".project-card");
        
            if (searchInput) {
                searchInput.addEventListener("input", function () {
                    const searchText = searchInput.value.toLowerCase().trim();
        
                    projectCards.forEach(card => {
                        const title = card.querySelector("h2").textContent.toLowerCase();
                        const tags = card.querySelector("p").textContent.toLowerCase();
        
                        if (title.includes(searchText) || tags.includes(searchText)) {
                            card.style.display = "block"; // Agar matn mos kelsa, ko‘rsatish
                        } else {
                            card.style.display = "none"; // Mos kelmasa, yashirish
                        }
                    });
                });
            }
        });
        

            projectCards.forEach(card => {
                card.addEventListener("click", function () {
                    document.getElementById("modal-title").textContent = card.querySelector("h2").textContent;
                    document.getElementById("modal-image").src = card.querySelector("img").src;
                    document.getElementById("modal-tags").textContent = card.querySelector("p").textContent;
                    modal.style.display = "block";
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.opacity = "1";
                        modal.style.transform = "scale(1)";
                        modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                    }, 10);
                });
            });
        
            document.querySelector(".close-btn").addEventListener("click", function () {
                modal.style.opacity = "0";
                modal.style.transform = "scale(0.8)";
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            });
        
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 300);
                }
            });
        ;
        document.addEventListener("DOMContentLoaded", function () {
            const modal = document.querySelector(".modal");
            const modalTitle = document.getElementById("modal-title");
            const modalImage = document.getElementById("modal-image");
            const modalTags = document.getElementById("modal-tags");
            
            document.querySelectorAll(".view-btn").forEach(button => {
                button.addEventListener("click", function (event) {
                    event.stopPropagation(); // Boshqa click hodisalarini bloklaydi
                    
                    const card = this.closest(".project-card");
                    modalTitle.textContent = card.querySelector("h2").textContent;
                    modalImage.src = card.querySelector("img").src;
                    modalTags.textContent = card.querySelector("p").textContent;
                    
                    modal.style.display = "block";
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.opacity = "1";
                        modal.style.transform = "scale(1)";
                        modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                    }, 10);
                });
            });
        
            document.querySelector(".close-btn").addEventListener("click", function () {
                modal.style.opacity = "0";
                modal.style.transform = "scale(0.8)";
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            });
        
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 300);
                }
            });
        });
        document.addEventListener("DOMContentLoaded", function () {
            const searchInput = document.getElementById("search");
            const projectCards = document.querySelectorAll(".project-card");
            const modal = document.createElement("div");
        
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-btn">&times;</span>
                    <h2 id="modal-title"></h2>
                    <img id="modal-image" src="" alt="">
                    <p id="modal-tags"></p>
                </div>
            `;
            document.body.appendChild(modal);
        
            // 🔍 SEARCH FUNCTION
            searchInput.addEventListener("input", function () {
                const searchText = searchInput.value.toLowerCase();
        
                projectCards.forEach(card => {
                    const title = card.querySelector("h2").textContent.toLowerCase();
                    const tags = card.querySelector("p").textContent.toLowerCase();
        
                    if (title.includes(searchText) || tags.includes(searchText)) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        
            // 🔍 MODAL OCHISH UCHUN
            projectCards.forEach(card => {
                card.addEventListener("click", function () {
                    document.getElementById("modal-title").textContent = card.querySelector("h2").textContent;
                    document.getElementById("modal-image").src = card.querySelector("img").src;
                    document.getElementById("modal-tags").textContent = card.querySelector("p").textContent;
                    modal.style.display = "flex";
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.opacity = "1";
                        modal.style.transform = "scale(1)";
                        modal.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                    }, 10);
                });
            });
        
            // ❌ MODAL YOPISH
            document.querySelector(".close-btn").addEventListener("click", function () {
                modal.style.opacity = "0";
                modal.style.transform = "scale(0.8)";
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            });
        
            // ⬛ OUTSIDE CLICK YOPISH
            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.display = "none";
                    }, 300);
                }
            });
        
            // 👁 VIEW ICON BOSILGANDA MODAL OCHISH
            document.querySelectorAll(".view-btn").forEach(btn => {
                btn.addEventListener("click", function (event) {
                    event.stopPropagation();
                    const card = this.closest(".project-card");
                    document.getElementById("modal-title").textContent = card.querySelector("h2").textContent;
                    document.getElementById("modal-image").src = card.querySelector("img").src;
                    document.getElementById("modal-tags").textContent = card.querySelector("p").textContent;
                    modal.style.display = "flex";
                });
            });
        });
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Formani qayta yuklashni oldini olamiz
        
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let response = document.getElementById("formResponse");
        
            if (name === "" || email === "" || message === "") {
                response.textContent = "Iltimos, barcha maydonlarni to‘ldiring!";
                response.style.color = "red";
                return;
            }
        
            response.textContent = "So‘rovingiz muvaffaqiyatli jo‘natildi!";
            response.style.color = "#00ff88";
        
            // Formani tozalash
            document.getElementById("contactForm").reset();
        });
        
        
