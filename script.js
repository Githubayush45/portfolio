document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("contactModal");
    var btn = document.querySelector(".btn.btn-primary");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        modal.style.display = "block";
    }
    span.onclick = function(event) {
        event.preventDefault(); 
        event.stopPropagation(); 
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }});
    