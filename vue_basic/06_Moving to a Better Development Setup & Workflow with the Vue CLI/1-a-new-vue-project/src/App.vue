<template>
    <section>
        <header>
            <h1>My Freinds</h1>
        </header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>


<script>
export default {
    data() {
        return {
            frainds: [
                {
                    id: 'janek',
                    name: 'Janek Ogarek',
                    phone: '0800 000 000',
                    emial: 'janek@hotmail.coom',
                },
                {
                    id: 'milena',
                    name: 'Milena Majonez',
                    phone: '0700 555 000',
                    emial: 'milena@hotmail.coom',
                },
            ],
        }

    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}

section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

header h1 {

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    color: wheat;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 100%;
    max-width: 40rem;
}

#app ul {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0;
    list-style: none;

}

#app li {
    margin: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border: 1px black solid;
    margin: 2rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
}

#app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #ae359e;
    margin: 2rem 0 2rem 0;
}

#app button {
    width: 30%;
    font: inherit;
    cursor: pointer;
    border: 4px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>