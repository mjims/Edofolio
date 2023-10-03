function dynamicParagraph(){
    const dynamicParagraph = document.getElementById('dynamic-paragraph'); const phrases = ['Édouard DENLA','Développeur Full-Stack'];let currentPhraseIndex = 0; let currentCharacterIndex = 0;
    function typeWriter() {
        if (currentCharacterIndex < phrases[currentPhraseIndex].length) {
            dynamicParagraph.innerHTML += phrases[currentPhraseIndex].charAt(currentCharacterIndex);currentCharacterIndex++;setTimeout(typeWriter, 50);
        } else {
            setTimeout(eraseText, 1500);
        }
    }
    function eraseText(){
        if (currentCharacterIndex >= 0) {dynamicParagraph.innerHTML = phrases[currentPhraseIndex].substring(0, currentCharacterIndex);currentCharacterIndex--;setTimeout(eraseText, 30);
        }else{
            currentPhraseIndex++;
    if (currentPhraseIndex >= phrases.length){
        currentPhraseIndex = 0;
        }
    setTimeout(typeWriter, 500);
    }}
    typeWriter();
} dynamicParagraph();
  
function ParagraphWrite(){
    const dynamicParagrap = document.getElementById('paragraph-write'); 
    const phrases = ['e suis un ingénieur logiciel full-stack motivé qui a de l\'expérience dans la création et le développement d\'applications web, mobile et desktop multi-platform et des logiciels. Je suis également passionné par les contributions en open source, le travail dans des environnements à fort impact et la contribution à la croissance des équipes de développement en aidant à construire de grands projets'];
    let currentPhraseInde = 0; 
    let currentCharacterInde = 0;
    function typeWriter() {
        if (currentCharacterInde < phrases[currentPhraseInde].length) {
            dynamicParagrap.innerHTML += phrases[currentPhraseInde].charAt(currentCharacterInde);currentCharacterInde++;setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
} ParagraphWrite();
function CarteSlide(){
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            
            margin: 20,
            responsive: {
                0: {        
                items: 1.25,
                rewind:true,
                autoWidth:false,
                autoplay:true
                },
                768: {
                    items: 2.75,
                    center: false,
                    rewind:true,
                    autoWidth:false,
                }
            },
      
        });
    });
}  CarteSlide();


