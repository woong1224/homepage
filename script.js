// 카로셀 기능
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.drama-carousel');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    
    if (carousel && prevBtn && nextBtn) {
        let currentIndex = 0;
        const items = carousel.querySelectorAll('.drama-item');
        const itemWidth = 280; // 각 아이템의 너비 + gap
        
        // 초기 버튼 상태 설정
        updateButtonStates();
        
        // 이전 버튼 클릭
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        // 다음 버튼 클릭
        nextBtn.addEventListener('click', function() {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        function updateCarousel() {
            const translateX = -currentIndex * itemWidth;
            carousel.style.transform = `translateX(${translateX}px)`;
            updateButtonStates();
        }
        
        function updateButtonStates() {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= items.length - 1;
        }
    }
});

// 스크롤 프로그레스 바
window.addEventListener('scroll', function() {
    const scrollProgress = document.querySelector('.scroll-progress');
    if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// 뒤로가기 버튼
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

// 뒤로가기 버튼 클릭
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// 네비게이션 스무스 스크롤
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
