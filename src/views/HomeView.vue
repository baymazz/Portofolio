<script setup></script>

<template>
  <div class="about">
    <h1>About</h1>
    <h3>Hi, it's me Fauzi</h3>
    <p>
      Just an ordinary people who think can improve day by day 
    </p>
  </div>

  <div class="divider"></div>

  <div class="proj">
    <h1>My Projects</h1>
    <div class="projects">
      <router-link to="/project/webku">
        <div class="project">
          <img
            id="imgWebku"
            src="/src/assets/webFauzi.png"
            alt="Blog Pribadi"
            width="85%"
          />
          <h3>Blog Pribadi</h3>
        </div>
      </router-link>
      <router-link to="/project/dietku">
        <div class="project">
          <img
            id="imgDietku"
            src="/src/assets/dietku.png"
            alt="Diet Ku"
            width="80%"
          />
          <h3>Diet Ku</h3>
        </div>
      </router-link>
      <router-link to="/project/mobileApp">
        <div class="project">
          <img
            id="imgMobileApp"
            src="/src/assets/mobile.png"
            alt="Mobile App"
            width="92%"
          />
          <h3>Mobile App</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  margin-top: 20px;
}

.about h1 {
  margin: 1rem;
}

.proj {
  text-align: center;
}

.proj h3 {
  margin-top: 10px;
  margin-bottom: 1rem;
}

.projects {
  display: grid;
  grid-auto-flow: column;
}

.project {
  align-self: center;
}

#imgWebku {
  width: 80% !important;
}

#imgDietku {
  width: 85% !important;
}

#imgMobileApp {
  width: 92% !important;
}

.divider {
  width: 100%;
  border-top: 1px solid black;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .projects {
    grid-auto-flow: row;
  }
}
</style>
