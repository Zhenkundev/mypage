<template>
    <div>
        <!-- About me -->
        <section class="aboutme" id="about">
            <h1 class="section__title section__title--about">Who I am</h1>
            <p class="section__subtitle section__subtitle--about"></p>

            <div class="about">
                <p>
                    I am from Shanxi, China. Currently I'm a graduate student in the Computer Science Department of the
                    MET collage of BU.
                    After graduation I want to seek a job opportunity as a software development engineer.
                    I feel pretty good about my performance at BU so far, and here's my transcript:<br>
                </p>

                <table border="1">
                    <tr>
                        <th>COURSE CODE</th>
                        <th>GRADE</th>
                    </tr>
                    <tr>
                        <td>MET CS566</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>MET CS575</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>MET CS662</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>MET CS579</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>MET CS673</td>
                        <td>A-</td>
                    </tr>
                    <tr>
                        <td>MET CS699</td>
                        <td>A</td>
                    </tr>
                </table><br>

                <a href="mywork.html" class="button">See My Work Here</a>
                <p>I received my bachelor's degree in mathematics from Wuhan University in China. Here is a video of my
                    alma mater : <br>
                    <em><strong>(Cherry blossoms in the night)</strong></em><br>
                </p>
                <div class="vid"><video controls>
                        <source src="video/WHU.mp4" type="video/mp4">
                    </video></div>


                <p>
                    Wuhan University has been named one of the most beautiful universities in China many times.
                    If you have a chance to visit Wuhan, China in the future, you can enjoy the beauty and culture
                    there for yourselves. It will surely impress you. Here are some more photos of it:<br>
                </p>

                <!-- WHU items -->
                <div class="WHU">
                    <p class="WHU__item"><img src="../../public/img/1.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/2.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/4.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/5.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/6.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/7.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/8.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/9.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/10.jpg" alt="" class="WHU__img"></p>
                    <p class="WHU__item"><img src="../../public/img/11.jpg" alt="" class="WHU__img"></p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "AboutHome"
}
</script>

<style scoped>
</style>