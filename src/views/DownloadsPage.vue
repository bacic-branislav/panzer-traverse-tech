<template>
  <main class="p-downloads">
    <HeaderElement/>


    <div class="container">
      <h1>Downloads</h1>

      <div class="downloads-wrapper">
        <RouterLink to="/downloads/panzer-3" class="download-item">
          <img src="https://images6.alphacoders.com/113/1131398.jpg" alt="Panzer III">
          <div class="download-item-details">
            <p>Panzer III</p>
            <span class="badge">17</span>
          </div>
        </RouterLink>

        <RouterLink to="/downloads/t-34" class="download-item">
          <img src="https://cdn11.bigcommerce.com/s-n12pqvjack/images/stencil/1280x1280/products/45444/131060/um-327-172-uni-model-soviet-tank-t-3485-1944-squadron-model-models__06596.1684389233.jpg?c=1" alt="T-34">
          <div class="download-item-details">
            <p>T-34</p>
            <span class="badge">6</span>
          </div>
        </RouterLink>

        <RouterLink to="/downloads/tiger" class="download-item">
          <img src="https://images8.alphacoders.com/124/1241964.jpg" alt="Tiger">
          <div class="download-item-details">
            <p>PzVI Tiger</p>
            <span class="badge">10</span>
          </div>
        </RouterLink>

        <RouterLink to="/downloads/m4-sherman" class="download-item">
          <img src="https://images2.alphacoders.com/121/1216051.jpg" alt="M4 Sherman">
          <div class="download-item-details">
            <p>M4 Sherman</p>
            <span class="badge">12</span>
          </div>
        </RouterLink>

        <RouterLink to="/downloads/m4-sherman" class="download-item">
          <img src="https://e1.pxfuel.com/desktop-wallpaper/848/869/desktop-wallpaper-germany-panther-tank-weapon-average-painting-wwii-panther-tank.jpg" alt="M4 Sherman">
          <div class="download-item-details">
            <p>PzV Panther</p>
            <span class="badge">8</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import HeaderElement from '@/components/HeaderElement.vue';
</script>
