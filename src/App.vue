<template>
  <div>
        <nav class="navigation">
            <router-link to="/" class="nav-link">Go to Home page</router-link>
            <router-link to="/lists" class="nav-link">Go to Lists page</router-link>
            <router-link to="/counter" class="nav-link">Go to Counter page</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style>
  div{
        width: 1200px;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
    }

    ul {
        list-style: none;
        margin: 0;
    }

    li{
        padding: 10px;
        border: 1px solid black
    }

    .navigation {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 10px;
        padding-bottom: 20px;
        border-bottom: 1px dashed black;
    }

    .nav-link {
        text-align: center;
    }

    .nav-link:nth-child(1) {
        grid-column-start: 2;
    }
    .nav-link:nth-child(2) {
        grid-column-start: 3;
    }
    .nav-link:nth-child(3) {
        grid-column-start: 4;
    }
</style>
