class GallerySlider {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.gallery-track');
        this.prevBtn = container.querySelector('.gallery-nav.prev');
        this.nextBtn = container.querySelector('.gallery-nav.next');
        this.currentPageEl = container.querySelector('.current-page');
        this.totalPagesEl = container.querySelector('.total-pages');
        this.dotsContainer = container.querySelector('.page-dots');
        
        // Массив с URL изображений (можно заменить на свои)
        this.images = [
            'images.jpeg',
            'images (1).jpeg',
            'images (2).jpeg',
            'images (3).jpeg',
            'images (4).jpeg',
            'images (5).jpeg',
            'images (6).jpeg',
            'images (7).jpeg'
        ];
        
        this.currentSlide = 0;
        this.itemsPerView = this.getItemsPerView();
        this.totalSlides = 1 + this.images.length - this.itemsPerView;
        
        this.init();
        this.setupEventListeners();
        this.updateGallery();
    }
    
    init() {
        // Создаем элементы изображений
        this.images.forEach((imageSrc, index) => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `<img src="${imageSrc}" alt="Изображение ${index + 1}" loading="lazy">`;
            this.track.appendChild(item);
        });
        
        // Создаем точки пагинации
        this.createPagerDots();
        
        // Обновляем информацию о страницах
        this.totalPagesEl.textContent = this.totalSlides;
    }
    
    getItemsPerView() {
        return window.innerWidth <= 768 ? 1 : 3;
    }
    
    createPagerDots() {
        this.dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `page-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                this.goToSlide(i);
            });
            this.dotsContainer.appendChild(dot);
        }
    }
    
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });
        
        // Обработчик изменения размера окна
        window.addEventListener('resize', () => {
            const newItemsPerView = this.getItemsPerView();
            if (newItemsPerView !== this.itemsPerView) {
                this.itemsPerView = newItemsPerView;
                this.totalSlides = 1 + this.images.length - this.itemsPerView;
                this.createPagerDots();
                this.totalPagesEl.textContent = this.totalSlides;
                this.goToSlide(0);
            }
        });
    }
    
    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateGallery();
        }
    }
    
    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateGallery();
        }
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateGallery();
    }
    
    updateGallery() {
        const slideWidth = 100 / this.itemsPerView;
        const translateX = -this.currentSlide * slideWidth;
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Обновляем информацию о текущей странице
        this.currentPageEl.textContent = this.currentSlide + 1;
        
        // Обновляем активную точку
        const dots = this.dotsContainer.querySelectorAll('.page-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
        
        // Обновляем состояние кнопок
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
    }
}

// Инициализация галереи после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    new GallerySlider(galleryContainer);
});