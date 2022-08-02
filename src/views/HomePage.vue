<template>
    <div>
        <!-- The background music -->
        <audio controls>
            <source src="../../public/music/bgm.mp3" type="audio/mpeg" />
            Your browser does not support the HTML5 audio tag.
        </audio>
        <!-- Introduction -->
        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Zhenkun Li</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">
                Welcome to my personal page!
            </p>
            <img src="../../public/img/me.jpg" alt="a picture of me" class="intro__img">
        </section>
    </div>
</template>
<script>
export default {
    name: "HomePage"
}
</script>

<style scoped>
</style>