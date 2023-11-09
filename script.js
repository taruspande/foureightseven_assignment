function changeImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    const buttons = document.querySelectorAll('.carousel-button');

    images.forEach(image => image.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('selected'));

    images[index].classList.add('active');
    buttons[index].classList.add('selected');
}

function selectQuantity(index){
    const buttons = document.querySelectorAll('.quantity-item');
    buttons.forEach(button=>button.classList.remove('selected'));
    buttons[index].classList.add('selected');
}

function purchaseMethod(index){
    const buttons = document.querySelectorAll('.purchase-btn');
    const frequencyBtn = document.querySelectorAll('.frequency');
    buttons.forEach(button=>button.classList.remove('selected'));
    buttons[index].classList.add('selected');
    if(index===1){
        frequencyBtn.forEach(freq=>freq.classList.remove('hidden'));
    }
    else{
        frequencyBtn.forEach(freq=>freq.classList.add('hidden'));
    }
}

let dropDownOpen = false;
let c=1;

function openDropDown(){
    if(!dropDownOpen){
        const options = document.querySelectorAll('.frequency-item');
        options.forEach(option => option.classList.add('visible'));
        dropDownOpen = true;
    }
    else{
        if(c%2==0){
            dropDownOpen=false;
        }
    }
    c++;
}

function selectOption(index){
    const options = document.querySelectorAll('.frequency-item');
    options.forEach(option=>option.classList.remove('visible'));
    options[index].classList.add('visible');
}

function selectDesc(index){
    const buttons = document.querySelectorAll('.desc-toggle');
    const texts = document.querySelectorAll('p.description-text');
    buttons.forEach(button=>button.classList.remove('selected'));
    texts.forEach(text=>text.classList.remove('visible'));
    buttons[index].classList.add('selected');
    if(index===0){
        const queries = document.querySelectorAll('.desc-text');
        queries.forEach(query=>query.classList.add('visible'));
    }
    else if(index===1){
        const queries = document.querySelectorAll('.harvest-text');
        queries.forEach(query=>query.classList.add('visible'));
    }
    else{
        const queries = document.querySelectorAll('.use-text');
        queries.forEach(query=>query.classList.add('visible'));
    }
}