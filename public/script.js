document.addEventListener('DOMContentLoaded', function() {
    const slide1 = document.getElementById('slide-1');
    const slide2 = document.getElementById('slide-2');
    const slide3 = document.getElementById('slide-3');
    const slide4 = document.getElementById('slide-4');
    const prev = document.getElementById('sort-up');
    const next = document.getElementById('sort-down');

    function SwapCategoryOfSkills(){
        const categoryA = document.getElementById('category-A');
        const categoryB = document.getElementById('category-B');

        categoryA.addEventListener('click', function() {
            if(categoryA.classList.contains('active')){
                return;
            }
            else{
                categoryA.classList.add('active');
                categoryB.classList.remove('active');
                categoryA.classList.remove('font-normal');
                categoryA.classList.add('font-bold');
                categoryB.classList.remove('font-bold');
                categoryB.classList.add('font-normal');
                prev.classList.remove('hidden');
                next.classList.remove('hidden');
                slide1.classList.add('flex');
                slide2.classList.remove('flex');
                slide3.classList.remove('flex');
                slide4.classList.remove('flex');
            }
        });
    
        categoryB.addEventListener('click', function() {
            if(categoryB.classList.contains('active')){
                return;
            }
            else{
                categoryB.classList.add('active');
                categoryA.classList.remove('active');
                categoryB.classList.remove('font-normal');
                categoryB.classList.add('font-bold');
                categoryA.classList.remove('font-bold');
                categoryA.classList.add('font-normal');
                prev.classList.add('hidden');
                next.classList.add('hidden');
                slide1.classList.remove('flex');
                slide2.classList.remove('flex');
                slide3.classList.remove('flex');
                slide4.classList.add('flex');
            }
        });
    }
    SwapCategoryOfSkills();

    function SwapSlidesOfTechSkills(){
        prev.addEventListener('click', function() {
            if (slide1.classList.contains('flex')) {
                slide1.classList.remove('flex');
                slide3.classList.add('flex');
            } else if (slide2.classList.contains('flex')) {
                slide2.classList.remove('flex');
                slide1.classList.add('flex');
            } else if (slide3.classList.contains('flex')) {
                slide3.classList.remove('flex');
                slide2.classList.add('flex');
            }
        });
    
        next.addEventListener('click', function() {
            if (slide1.classList.contains('flex')) {
                slide1.classList.remove('flex');
                slide2.classList.add('flex');
            } else if (slide2.classList.contains('flex')) {
                slide2.classList.remove('flex');
                slide3.classList.add('flex');
            } else if (slide3.classList.contains('flex')) {
                slide3.classList.remove('flex');
                slide1.classList.add('flex');
            }
        });
    };
    SwapSlidesOfTechSkills();

    function TypeWriterText(text, speed){
        const typeWriter = document.getElementById('type-writer');
        let i = 0;
        
        function typeWriterEffect() {
            if (i < text.length) {
                typeWriter.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriterEffect, speed);
            }
        }
        typeWriterEffect();
    }
    TypeWriterText('Junior Frontend Developer', 100);
});