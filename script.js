const text = `Sou um desenvolvedor dedicado, focado em detalhes e apaixonado por tecnologias. Como desenvolvedor web, meu compromisso com a excelência me motiva a buscar continuamente a inovação e a qualidade em cada projeto que realizo.

Minha jornada no desenvolvimento web é impulsionada pelo desejo de criar soluções elegantes e eficientes, que não apenas atendam, mas superem as expectativas dos usuários. Com uma sólida experiência em HTML, CSS, JavaScript e Bootstrap, trabalho incansavelmente para transformar ideias em experiências digitais excepcionais.

A atenção minuciosa aos detalhes é uma das minhas maiores forças, garantindo que cada aspecto do meu trabalho seja meticulosamente revisado e refinado. Acredito que é nos pequenos detalhes que encontramos a verdadeira diferença entre um bom projeto e um projeto extraordinário.

Estou sempre à procura de novas tecnologias e metodologias para aprimorar minhas habilidades e entregar resultados ainda melhores. Minha paixão pelo aprendizado contínuo e minha dedicação ao meu ofício são os pilares que sustentam minha carreira como desenvolvedor web..`;

const typingTextElement = document.getElementById('typing-text');

let index = 0;

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 40); // Ajuste o valor para alterar a velocidade da digitação
    }
}

document.addEventListener("DOMContentLoaded", type);

window.addEventListener('scroll', function() {
    var whatsappBox = document.querySelector('.whatsapp-box');
    if (window.scrollY > 200) { // Change this value to where you want the box to appear
        whatsappBox.classList.add('show');
    } else {
        whatsappBox.classList.remove('show');
    }
});