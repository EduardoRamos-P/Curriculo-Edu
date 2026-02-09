
document.addEventListener("DOMContentLoaded",function(){
    const Frases = [
        "Desenvolvedor back-end",
        "Desenvolvedor front-end",
        "Técnico em dessenvolvimento de sistemas"
    ];

    let Cont = 0
    let Contchar = 0
    let Deletar = false

    function Escrever(){
        const FraseAtual = Frases[Cont]
        MostraFrase = document.getElementById('Palavras').innerHTML
        MostraFrase = FraseAtual.substring(0,Contchar)
        document.getElementById('Palavras').innerHTML = MostraFrase  

        if(!Deletar){
           if(Contchar < FraseAtual.length){
            Contchar++
            setTimeout(Escrever,100)
           } 
           else{
            Deletar = true
            setTimeout(Escrever,1500)
           }
        }

        else{
            if(Contchar > 0){
                Contchar--
                setTimeout(Escrever,75)
            }
            else{
                Deletar = false
                Cont = (Cont + 1) % Frases.length
                setTimeout(Escrever,300)
            }

        }
        

    }
    Escrever();



    const ver = new IntersectionObserver((entries)=> {
        entries.forEach( item => {
            if(item.isIntersecting){
                if(item.target.classList.contains('esquerda')){
                    item.target.classList.add('vir-esquerda')
                    
                }
                else if(item.target.classList.contains('direita')){
                    item.target.classList.add('vir-direita')
                }
                else if(item.target.classList.contains('cima')){
                    item.target.classList.add('vir-cima')
                }
                else if(item.target.classList.contains('baixo')){
                    item.target.classList.add('vir-baixo')
                }
            }
            
        });
    },{
        threshold:0.5   
    });


    document.querySelectorAll('.esquerda').forEach(apareceu => {ver.observe(apareceu)})
    document.querySelectorAll('.direita').forEach(apareceu => {ver.observe(apareceu)})
    document.querySelectorAll('.cima').forEach(apareceu => {ver.observe(apareceu)})
    document.querySelectorAll('.baixo').forEach(apareceu => {ver.observe(apareceu)})



})

let fechar = false
let botao = document.getElementById('botaonav')

function desabilitaBotao(){
    botao.disabled = true
    setTimeout(function(){
        botao.disabled = false
    },700)
}

function fechar_abrir(){

    desabilitaBotao()

    if (fechar){
        const Navlinks = document.getElementsByClassName('nav-link-mob')
        let i = 0
        while(i < Navlinks.length){
            Navlinks[i].classList.add('animacao-fechar-items')
            i++
        }
        document.getElementById('nav-menu').classList.add('animacao-fechar-nav')
        document.getElementById('perfil-menu').classList.add('animacao-fechar-items')
        document.getElementById('infos-menu').classList.add('animacao-fechar-items')

        setTimeout(() => {
            document.getElementById('nav-bar-mob').classList.add('d-none')
            document.getElementById('nav-menu').classList.remove('animacao-aparecer-nav')
            document.getElementById('perfil-menu').classList.remove('animacao-aparecer-items')
            document.getElementById('infos-menu').classList.remove('animacao-aparecer-items')
            i = 0
            while(i < Navlinks.length){
                Navlinks[i].classList.remove('animacao-aparecer-items')
                i++
            }

        },700)
        
        fechar = false
    }
    else{

        document.getElementById('nav-menu').classList.remove('animacao-fechar-nav')
        document.getElementById('perfil-menu').classList.remove('animacao-fechar-items')
        document.getElementById('infos-menu').classList.remove('animacao-fechar-items')
        let i = 0
        const Navlinks = document.getElementsByClassName('nav-link-mob')
        while(i < Navlinks.length){
            Navlinks[i].classList.remove('animacao-fechar-items')
            i++
        }
        document.getElementById('nav-bar-mob').classList.remove('d-none')
        document.getElementById('nav-menu').classList.add('animacao-aparecer-nav')
        document.getElementById('perfil-menu').classList.add('animacao-aparecer-items')
        document.getElementById('infos-menu').classList.add('animacao-aparecer-items')

        i = 0
        while(i < Navlinks.length){
            Navlinks[i].classList.add('animacao-aparecer-items')
            i++
        }
        fechar = true
    } 
}



document.getElementById('botaonav').addEventListener('click',fechar_abrir)

function mudar_botao() {
    desabilitaBotao()
    document.getElementById('botaonav').addEventListener('click',function(){
        document.getElementById('botaonav').classList.toggle('x')
    })
}

document.addEventListener('DOMContentLoaded',mudar_botao)

function auto_fechar(){
    if(window.innerWidth > 1200 ){
        if(fechar){
            fechar_abrir()
            document.getElementById('botaonav').classList.toggle('x')
            
        }
    
    }
}

document.getElementById('rotate-button').addEventListener("click", () => {
    document.querySelector('.flip-card').classList.toggle('rotate')
})

document.querySelectorAll('.img-certificados').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('zoom').classList.remove('fechar-zoom')
        document.getElementById('card-formacoes').classList.remove('diminuir-img')
        console.log("ALT:", img.alt)

        document.querySelector('.front-img-zoom').src = img.src
        if(img.alt == "Diploma-senai"){
            document.querySelector('.back-img-zoom').src = 'Assets/IMG/Diploma-senai-back.png'
        }else{
            if(img.alt == "Diploma-ensino-medio"){
                document.querySelector('.back-img-zoom').src = 'Assets/IMG/Diploma-ensino-medio-back.jpg'
            }else{
                document.querySelector('.back-img-zoom').src = 'Assets/IMG/em-branco.png'
            }
        }
        document.getElementById('zoom').classList.remove('d-none')
        document.getElementById('zoom').classList.add('aparecer-zoom')
        document.getElementById('card-formacoes').classList.add('ampliar-img')
    })
})

document.getElementById('return-button').addEventListener('click', () => {
    document.getElementById('zoom').classList.remove('aparecer-zoom')
    document.getElementById('card-formacoes').classList.remove('ampliar-img')

    document.getElementById('zoom').classList.add('fechar-zoom')
    document.getElementById('card-formacoes').classList.add('diminuir-img')

    document.querySelector('.flip-card').classList.remove('rotate')
    document.getElementById('zoom').addEventListener('animationend', () => {
        document.getElementById('zoom').classList.add('d-none')
    }, {once: true})
})

auto_fechar()

window.addEventListener('resize',auto_fechar)

zenscroll.setup(1000, 100)

document.getElementById('form-contatos').addEventListener('submit', function(event){
    event.preventDefault();
    emailjs.sendForm('service_4gwfzsl','template_be2svlv',this);
    this.reset();    
})

document.querySelectorAll('.nav-link-mob').forEach(link => {
    link.addEventListener('click', function(){
        fechar_abrir()
        document.getElementById('botaonav').classList.toggle('x')
    })
})
