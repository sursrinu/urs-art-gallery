<template>
    <header class="header">
        <!-- Hamburger Icon on the left -->
        <div class="hamburger" @click="toggleMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <!-- Title/Logo -->
        <h1>Art Gallery</h1>

        <!-- Login Image on the right corner -->
        <div class="login-icon">
            <img src="/path/to/login-icon.png" alt="Login" @click="onLoginClick" />
        </div>
    </header>

    <!-- Side Menu (Hidden by default) -->
    <div :class="{'menu-open': isMenuOpen}" class="side-menu">
        <ul>
            <li><router-link to="/dashboard" class="link">Dashboard</router-link></li>

            <!-- Arts Dropdown Menu -->
            <li @click="toggleArtsMenu" class="dropdown">
                <span class="link">Arts</span>
                <ul v-if="isArtsMenuOpen" class="dropdown-menu">
                    <li><router-link to="/arts/add" class="link">Add</router-link></li>
                    <li><router-link to="/arts/edit" class="link">Edit</router-link></li>
                    <li><router-link to="/arts/delete" class="link">Delete</router-link></li>
                </ul>
            </li>

            <li><router-link to="/logout" class="link">Log Out</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            isMenuOpen: false, // State to track if the side menu is open or not
            isArtsMenuOpen: false, // State to track if the Arts dropdown is open or not
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen; // Toggle side menu visibility
        },
        toggleArtsMenu() {
            this.isArtsMenuOpen = !this.isArtsMenuOpen; // Toggle Arts dropdown visibility
        },
        onLoginClick() {
            console.log("Login icon clicked");
            // You can implement login logic here
        },
    },
};
</script>

<style scoped>
/* Header styling */
.header {
    background-color: #2e8b57; /* Sea Green color */
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
}

/* Hamburger Icon */
.hamburger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    cursor: pointer;
}

.hamburger .bar {
    width: 30px;
    height: 4px;
    background-color: white;
    border-radius: 5px;
}

/* Title */
.header h1 {
    margin: 0;
}

/* Login Icon on the right */
.login-icon img {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

/* Side Menu (Hidden by default) */
.side-menu {
    position: fixed;
    top: 0;
    left: -250px; /* Initially off-screen to the left */
    width: 250px;
    height: 100%;
    background-color: #2e8b57; /* Same as header */
    color: white;
    padding: 50px 0 0 20px;
    transition: left 0.3s ease; /* Smooth transition */
}

.side-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.side-menu ul li {
    padding: 15px 0;
}

.side-menu a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.side-menu a:hover {
    text-decoration: underline;
}

/* Side Menu visibility */
.side-menu.menu-open {
    left: 0; /* Slide in from the left */
}

/* Dropdown Menu */
.dropdown-menu {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 20px; /* Indentation for dropdown */
}

.dropdown-menu li {
    padding: 10px 0;
    margin-left: 20px; /* Further indentation for each item */
}

/* Dropdown Arrow */
.dropdown > span::after {
    content: " ▼";
    font-size: 12px;
    padding-left: 5px;
    cursor: pointer;
}

.dropdown.open > span::after {
    content: " ▲"; /* Change to an up arrow when the dropdown is open */
}

/* Media Queries */
@media (max-width: 768px) {
    .header {
        padding: 15px;
    }

    .hamburger {
        display: flex; /* Show hamburger icon on mobile */
    }

    .login-icon {
        display: none; /* Optionally hide login icon on mobile */
    }
}
</style>
