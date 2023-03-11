function add() {
    let inputed_text = document.querySelector('#inputed_text').value;
    //Uslov da se nesto mora unijeti u INPUT polje.
    if (inputed_text == false) {
        return alert('Unesite neki zadatak!')
    }
    //Kreiranje novog elementa.
    let novi_element = document.createElement('p');
    novi_element.classList = 'novi_element';
    novi_element.innerHTML = inputed_text;
   
    //Dugme za brisanje.
    let delete_btn = document.createElement('div');
    delete_btn.classList = 'delete_btn';
    delete_btn.innerHTML = '<button id="deleteButton" class="material-symbols-outlined">delete_forever</button>';

    //Brise ono sto je napisano zajedno sa dugmetom za brisanje.
    delete_btn.addEventListener("click", function() {
        novi_element.remove();
        delete_btn.remove();
    });

    let body = document.querySelector('body');
    body.appendChild(novi_element);
    body.appendChild(delete_btn);

}