var link = document.querySelector(".card .btn");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".write-us .close");
var name = popup.querySelector("[name=name]");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("show");
name.focus();
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("show");
});