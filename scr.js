document.addEventListener('DOMContentLoaded', (event) => {
    const imageBlocks = document.querySelectorAll('.image-block');
    imageBlocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            block.style.transform = 'translateY(-10px)';
        });
        block.addEventListener('mouseout', () => {
            block.style.transform = 'translateY(0)';
        });
    });
});
