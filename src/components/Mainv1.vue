<script setup lang="ts">
</script>

<template>
    <div>
        <div class="ContainerMain1">
            <section class="section1">
                <h1>¡Mantén el orden de tus tareas!</h1>
                <section>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex voluptatum ipsam numquam
                        et
                        perspiciatis accusantium quam, non labore rem ducimus ratione quis harum dolores saepe odio?
                        Sint,
                        nisi
                        aut.
                        Repellat illo quis ut ad ipsa vitae at praesentium omnis, nulla earum labore fugit repellendus,
                        beatae
                        incidunt soluta pariatur, esse facere quibusdam veniam quae modi! Consequuntur magnam saepe
                        rerum
                        nobis?
                        Totam ducimus nulla enim cum doloremque laudantium voluptates ea dicta corrupti, debitis
                        assumenda
                        quidem deserunt! Esse, aperiam sit sapiente rerum quidem eligendi, iusto porro ut consequuntur
                        facilis
                        nemo, voluptas accusantium.
                        Perferendis cumque sed saepe similique voluptatibus sapiente fugit itaque, enim commodi et ipsam
                        placeat
                        sequi quo! Mollitia soluta, modi, assumenda enim numquam est totam voluptate consequatur porro
                        earum
                        asperiores provident.
                        Praesentium perspiciatis consectetur dicta, exercitationem voluptatibus placeat aliquam atque
                        totam,
                        hic, iste ea blanditiis ullam doloribus quisquam alias molestiae? Sint fugit soluta, blanditiis
                        vero
                    </p>
                </section>
                <button>Funciones</button>
            </section>
            <div class="ContainerLine">
                <svg width="50%" height="300" viewBox="0 0 100 100" preserveAspectRatio="none"
                    transform="rotate(90, 50, 50)">
                    <path d="M 100,10 C 60,120 40,-20 0,50" stroke="white" fill="transparent" stroke-width="0.2" />
                </svg>

                <svg class="svgWhite" width="50%" height="300" viewBox="0 0 100 100" preserveAspectRatio="none"
                    transform="rotate(90, 50, 50)">
                    <path d="M 100,10 C 60,120 40,-20 0,50" stroke="black" fill="transparent" stroke-width="0.2" />
                </svg>
            </div>
        </div>
    </div>
</template>


<style>
button {
    background-color: #414bb2;
}

svg {
    position: absolute;
    left: 220px;
    top: 320px;
    z-index: 1;
    opacity: .6;
}

.svgWhite {
    display: none;
}

.section1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 5%;
    max-width: 40%;
    margin-left: 20px;
}
</style>

<style>
body.active {
    .svgWhite {
        display: block;
    }
}
</style>