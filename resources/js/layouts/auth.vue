<template>
    <section class="section">
        <main class="container">
            <div class="columns is-centered">
                <div class="column is-5">
                    <transition name="page" mode="out-in">
                        <router-view/>
                    </transition>
                </div>
            </div>
        </main>
    </section>
</template>