<template>
    <div class="gallery">
        <!-- Pagination at the top -->
        <div class="pagination-top">
            <button @click="changePage('prev')" :disabled="currentPage === 1">Prev</button>
            <span>{{ currentPage }} / {{ totalPages }}</span>
            <button @click="changePage('next')" :disabled="currentPage === totalPages">Next</button>
        </div>

        <!-- Gallery Grid -->
        <div class="art-grid">
            <div class="art-piece" v-for="item in currentItems" :key="item.id">
                <img :src="item.image" :alt="item.title" class="art-image" @click="openModal(item)"/>
                <p>{{ item.title }}</p>
            </div>
        </div>

        <!-- Modal for full image -->
        <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-content" @click.stop>
                <img :src="selectedImage.image" :alt="selectedImage.title" class="modal-image" />
                <button class="close-modal" @click="closeModal">X</button>
            </div>
        </div>

        <!-- Pagination at the bottom -->
        <div class="pagination-bottom">
            <button @click="changePage('prev')" :disabled="currentPage === 1">Prev</button>
            <span>{{ currentPage }} / {{ totalPages }}</span>
            <button @click="changePage('next')" :disabled="currentPage === totalPages">Next</button>
        </div>
    </div>
</template>


<script>
export default {
    name: "ArtGallery",
    data() {
        return {
            items: [
                { id: 1, title: "Tulips Graden", image: require('@/assets/image1.png') },
                { id: 2, title: "Beautiful Butterfly", image: require('@/assets/image2.png') },
                { id: 3, title: "Natures Beauty", image: require('@/assets/image3.png') },
                { id: 4, title: "Pictured Rocks", image: require('@/assets/image4.png') },
                { id: 5, title: "Downtown Lake View", image: require('@/assets/image5.png') },
                { id: 6, title: "Butterfly", image: require('@/assets/image6.png') },
                { id: 7, title: "Snowy Day", image: require('@/assets/image7.png') },
                { id: 8, title: "Bunch of Purple Flowers", image: require('@/assets/image8.png') },
                { id: 9, title: "Basket of Veggies", image: require('@/assets/image9.png') },
                { id: 10, title: "Sunflower Garden", image: require('@/assets/image10.png') },
                { id: 11, title: "Starved Rocks", image: require('@/assets/image11.png') },
                { id: 12, title: "Hungry Butterfly", image: require('@/assets/image12.png') },
                { id: 13, title: "Beautiful Sunrise", image: require('@/assets/image13.png') },
                { id: 14, title: "King of Jungle", image: require('@/assets/image14.png') },
                { id: 15, title: "Lake view in the Winter", image: require('@/assets/image15.png') },
                { id: 16, title: "Cute Squirrel", image: require('@/assets/image16.png') },
                { id: 17, title: "Relaxing Calf", image: require('@/assets/image17.png') },
                { id: 18, title: "Snow Leopard", image: require('@/assets/image18.png') },
                { id: 19, title: "Beach Waves", image: require('@/assets/image19.png') },
                { id: 20, title: "New Vrindhavan", image: require('@/assets/image20.png') },
                { id: 21, title: "Flower Vase", image: require('@/assets/image21.png') }
                // Add more items here
            ],
            currentPage: 1,
            itemsPerPage: 6,
            isModalOpen: false,
            selectedImage: null,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        currentItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            return this.items.slice(startIndex, startIndex + this.itemsPerPage);
        },
    },
    methods: {
        changePage(direction) {
            if (direction === "prev" && this.currentPage > 1) {
                this.currentPage--;
            } else if (direction === "next" && this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        openModal(item) {
            this.selectedImage = item;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
            this.selectedImage = null;
        },
    },
};
</script>

<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.pagination-top, .pagination-bottom {
    display: flex;
    justify-content: center;
    margin: 10px 0;
}

button {
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
}

button:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

.art-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.art-piece {
    text-align: center;
    width: 500px;
    height: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    border-radius: 8px;
}

.art-image {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
}

/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;
}

.modal-image {
    max-width: 90vw;
    max-height: 80vh;
    object-fit: contain;
}

.close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
}

/* Responsive design */
@media (max-width: 768px) {
    .art-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .art-grid {
        grid-template-columns: 1fr;
    }
}
</style>
