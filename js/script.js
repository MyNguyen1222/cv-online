function handleSubmit() {
    const emailValue = document.getElementById('email').value.toLocaleLowerCase()
    // const errorEmail = document.getElementById('error-email');
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const check = emailValue.match(checkMail);
    
    if (check) {
        document.querySelector('.section-content').style.display ='block';
        document.querySelector('.submit-email').style.display ='none'; 
        
    } else {
        document.querySelector('.submit-email #error-email').style.display ='block';
        document.querySelector('#error-email').textContent = 'Vui lòng xác nhận lại địa chỉ email !';
        document.querySelector('#error-email').style.color = 'red';
        document.querySelector('.requireEmailAdress').style.display = 'none';
    }
}

function handleOnMouseOver(element){
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'inline-block';
    
}
function handleOnMouseOut(element) {
    const viewMore = element.querySelector('.view-more');
    viewMore.style.display = 'none';
}

function handleViewMore(element){
    const parentElement = element.closest('.parent');
    const sectionContent = parentElement.querySelectorAll('.container_content');
    sectionContent.forEach(element => {
        element.style.display = 'block';
    });
    const viewLess = parentElement.querySelectorAll('.view-less');
    
    viewLess.forEach(element => {
        element.style.display = 'inline-block';
    });
    
}



function handleViewLess(element) {
    const parentElement = element.closest('.parent');
    const sectionContent = parentElement.querySelectorAll('.container_content');
    sectionContent.forEach(element => {
        element.style.display = 'none';
    });

    const viewLess = parentElement.querySelectorAll('.view-less');
    viewLess.forEach(element => {
        element.style.display = 'none';
    });
}