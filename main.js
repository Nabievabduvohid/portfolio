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
   
        


        
        
        
        // document.getElementById("submitBtn").addEventListener("click", function () {
        //     const botToken = "8081073963:AAFbg0-LbTtBboGeU1Ppu0aejF29GUccDV0"; // Bot tokeningizni yozing
        //     const chatId = "3535763"; // Telegram chat yoki group ID
            
        //     const name = document.getElementById("userName").value.trim();
        //     const email = document.getElementById("userEmail").value.trim();
        //     const message = document.getElementById("userMessage").value.trim();
        
        //     // Email validatsiyasi
        //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        //     if (!name || !email || !message) {
        //         alert("Barcha maydonlarni to‘ldiring!");
        //         return;
        //     }
        
        //     if (!emailPattern.test(email)) {
        //         alert("Iltimos, to‘g‘ri email kiriting! (masalan: example@gmail.com)");
        //         return;
        //     }
        
        //     const text = `📩 *New Message!*\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Message:* ${message}`;
        //     const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;
        
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => {
        //             if (data.ok) {
        //                 alert("Xabar yuborildi!");
        //                 document.getElementById("userName").value = "";
        //                 document.getElementById("userEmail").value = "";
        //                 document.getElementById("userMessage").value = "";
        //             } else {
        //                 alert("Xatolik yuz berdi! Iltimos, qayta urinib ko‘ring.");
        //             }
        //         })
        //         .catch(error => {
        //             alert("Server xatosi: " + error.message);
        //             console.error("Error:", error);
        //         });
        // });
        
       
        
        document.getElementById("submitBtn").addEventListener("click", function () {
            
            
            const botToken = "8081073963:AAFbg0-LbTtBboGeU1Ppu0aejF29GUccDV0"; // Bot tokeningizni yozing
            const chatId = "7116299492"; // Telegram chat yoki group ID
            
            const name = document.getElementById("userName").value.trim();
            const email = document.getElementById("userEmail").value.trim();
            const message = document.getElementById("userMessage").value.trim();
        
            // Email validatsiyasi
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            if (!name || !email || !message) {
                alert("Boshidan to'ldiring!!!");
                return;
            }
        
            if (!emailPattern.test(email)) {
                alert("Iltimos, to‘g‘ri email kiriting! (masalan: example@gmail.com)");
                return;
            }
        
            const text = `📩 *New Message!*\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Message:* ${message}`;
            const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}&parse_mode=Markdown`;
        
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        alert("Xabar yuborildi!");
                        document.getElementById("userName").value = "";
                        document.getElementById("userEmail").value = "";
                        document.getElementById("userMessage").value = "";
                    } else {
                        alert("Xatolik yuz berdi!");
                    }
                })
                .catch(error => console.error("Error:", error));
        });
        function refresh() {
            window.location.reload();
        }
