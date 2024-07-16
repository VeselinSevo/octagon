<template>
    <footer class="bg-gray-800 py-14 relative overflow-hidden">
        <div class="absolute inset-0 waves-bg"></div>
        <svg class="bubbles" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400">
            <circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.1)" />
            <circle cx="300" cy="200" r="70" fill="rgba(255,255,255,0.1)" />
            <circle cx="600" cy="150" r="40" fill="rgba(255,255,255,0.1)" />
            <circle cx="500" cy="300" r="60" fill="rgba(255,255,255,0.1)" />
            <circle cx="200" cy="350" r="80" fill="rgba(255,255,255,0.1)" />
        </svg>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-white text-lg font-semibold">Top Tutorials</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white">HTML Tutorial</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">CSS Tutorial</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">JavaScript Tutorial</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">SQL Tutorial</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white text-lg font-semibold">Top References</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white">HTML Reference</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">CSS Reference</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">JavaScript Reference</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">SQL Reference</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white text-lg font-semibold">Top Examples</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white">HTML Examples</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">CSS Examples</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">JavaScript Examples</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">SQL Examples</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white text-lg font-semibold">Get Certified</h3>
                    <ul class="mt-4 space-y-2">
                        <li><a href="#" class="text-gray-300 hover:text-white">HTML Certificate</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">CSS Certificate</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">JavaScript Certificate</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">SQL Certificate</a></li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 text-center text-gray-300">
                <div class="flex justify-center space-x-6 mb-4">
                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook fa-lg"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin fa-lg"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
                <p class="text-sm">
                    &copy; 2024 Your Company. All rights reserved. Powered by <a href="#"
                        class="text-gray-400 hover:text-white">The Hexagon</a>.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
};
</script>

<style scoped>
.waves-bg {
    background: linear-gradient(135deg, #010420, #334155);
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
