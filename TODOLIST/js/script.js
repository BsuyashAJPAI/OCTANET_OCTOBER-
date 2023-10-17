let input_text = document.getElementById('inp')
let list = document.querySelector('.list')

function additem() {
    if (input_text.value == "") {
        alert("Please enter something")
    }
    else {
        let new_element = document.createElement('ul')
        new_element.innerHTML = `${input_text.value} <i class="fa-regular fa-trash-can"></i>`;
        list.appendChild(new_element)
        input_text.value = ""
        new_element.querySelector('i').addEventListener('click', () => {
            confirm("are you sure! you want to delete", new_element.remove())
        })
    }
}