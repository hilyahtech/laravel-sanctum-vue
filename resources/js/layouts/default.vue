<template>
    <section class="section">
        <main class="container">
            <transition name="page" mode="out-in">
                <router-view/>
            </transition>
        </main>
    </section>
</template>