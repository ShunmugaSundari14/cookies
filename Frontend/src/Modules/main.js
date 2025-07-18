let navbar =DocumentFragment.querySelctor('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('acction')
}

window.onscroll =() => {
    navbar.classList.remove('active');

}