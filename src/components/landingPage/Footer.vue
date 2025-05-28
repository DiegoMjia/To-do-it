<script setup lang="ts">
</script>

<template>
    <footer class="Footer">
        <div class="container">
            <div class="footer-row">

                <div class="footer-links">

                    <h4>Nosotros</h4>
                    <ul>
                        <li><a href="#">To do it X</a></li>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Terminos de uso</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Siguenos</h4>
                    <div class="github-link">
                        <a href="https://github.com/DiegoMjia"><i class="fab fa-github"></i></a>
                    </div>

                </div>
                <div class="footer-links">
                    <div class="ayuda-link">
                        <h4>ayuda</h4>
                        <ul>
                            <li><a href="https://i.pinimg.com/736x/b5/8b/77/b58b776dbf9a3ae90e20e6e8e1f77f1e.jpg">Contactanos</a></li>
                        </ul>
                    </div>
                </div>


            </div>

        </div>
    </footer>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

body {
    font-family: sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;

}


.Footer {
    background-color: #24262B;
    padding: 80px 0;

}

.footer-row {
    display: flex;
    flex-wrap: wrap;
}

.footer-links {
    width: 25%;
    padding: 0 15px;
}

.github-link {
    font-size: 200%;
    transition: all .5s ease;
    color: #FFFFFF;
}


.footer-links h4 {
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 25px;
    font-weight: 500;
    border-bottom: 2px solid #00C3FF;
    padding-bottom: 10px;
    display: inline-block;
}

.footer-links ul li a {
    font-size: 18px;
    text-decoration: none;
    color: #BBBBBB;
    display: block;
    margin-bottom: 15px;
    transition: all .3s ease;
}

.footer-links ul li a:hover {
    color: #FFFFFF;
    padding-left: 6px;
}


.social-link a {
    display: inline-block;
    min-height: 40px;
    width: 40px;
    background-color: rgb(255 255 255 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #FFFFFF;
    transition: all .5s ease;
}

.social-link a:hover {
    background-color: #00C3FF;
}
</style>
