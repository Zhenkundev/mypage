<template>
    <div v-on:load="myfunc">
        <nav>
            <div class="logo">
                <h4>Zhenkun Li</h4>
            </div>
            <ul class="nav-links">
                <li><a href="./home.html">Home</a></li>
                <li><a href="./aboutme.html">About me</a></li>
                <li><a href="./mywork.html">My work</a></li>
                <li><a href="./resume.html">Resume</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
            <div class="burger" v-on:click="myfunc0">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "AppHeader",

    methods: {
        myfunc0() {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll('.nav-links li');

            //Toggle Nav
            nav.classList.toggle('nav-active');
            //Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            //Burger animation
            burger.classList.toggle('toggle');
        },
        myfunc() {
            // welcoming the visitor with an alert

            alert("Hello!");

            var person;

            // prompting visitor for his / her name

            person = prompt("Please enter your name", "Firstname Lastname");

            alert("Welcome to my personal page, " + person + "!");

        }
    }
}
</script>

<style scoped>
</style>