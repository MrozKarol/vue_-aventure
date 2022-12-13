<template>

    <h2>{{ fraind.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ fraind.phone }}</li>
        <li><strong>Email:</strong>{{ fraind.emial }}</li>
    </ul>

</template>


<script>
export default {
    data() {
        return {
            detailsAreVisible: false,
            fraind:
            {
                id: 'janek',
                name: 'Janek Ogarek',
                phone: '0800 000 000',
                emial: 'janek@hotmail.coom',
            },

        }

    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>