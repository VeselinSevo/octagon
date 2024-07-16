<template>
    <section class="relative py-4 overflow-hidden">
        <div class="absolute inset-0 banner-bg"></div>
        <svg class="bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
            <circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.1)" />
            <circle cx="300" cy="200" r="70" fill="rgba(255,255,255,0.1)" />
            <circle cx="600" cy="150" r="40" fill="rgba(255,255,255,0.1)" />
            <circle cx="500" cy="300" r="60" fill="rgba(255,255,255,0.1)" />
            <circle cx="200" cy="350" r="80" fill="rgba(255,255,255,0.1)" />
        </svg>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between">
                <p class="text-white text-sm lg:text-lg font-semibold max-w-xs md:max-w-full">
                    Get a year access to Vue Mastery with 40% off
                </p>
                <div>
                    <TheButton text="Claim Discount">
                    </TheButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.banner-bg {
    background: linear-gradient(135deg, #4c6ef5, #3b82f6, #06b6d4);
    background-size: cover;
    background-position: center;
}

.bubbles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
</style>
