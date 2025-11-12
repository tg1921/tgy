

// Common JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const footerParagraphs = document.querySelectorAll('footer p');
    footerParagraphs.forEach(p => {
        if (p.innerHTML.includes('2024')) {
            p.innerHTML = p.innerHTML.replace('2024', currentYear);
        }
    });

    // Handle missing images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });

    // Smooth navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.includes('.html')) {
                // Allow normal navigation for HTML files
                return true;
            }
        });
    });

   // Add loading states for images
    const evidenceImages = document.querySelectorAll('.evidence-img');
    evidenceImages.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.3s ease';
        });
        img.style.opacity = '0';
    });
});