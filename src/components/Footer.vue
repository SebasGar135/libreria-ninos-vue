<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social">
        <a href="#"><i class="icon ion-social-instagram"></i></a>
        <a href="#"><i class="icon ion-social-snapchat"></i></a>
        <a href="#"><i class="icon ion-social-twitter"></i></a>
        <a href="#"><i class="icon ion-social-facebook"></i></a>
      </div>
      <ul class="footer-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      <p class="copyright">El Buho Lector© 2025</p>
    </div>
  </footer>
</template>

<script setup>
// No logic required
</script>

<style scoped>
.footer {
  background-color: #212529;
  width: 100%;
  padding: 1.5rem 1rem;
  margin-top: auto; /* Permite que el footer se pegue abajo */
}

.footer-content {
  max-width: 1140px;
  margin: 0 auto;
  text-align: center;
}

.social a {
  margin: 0 10px;
  color: white;
  font-size: 1.4rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.footer-links li a {
  color: white;
  font-weight: 500;
  text-decoration: none;
}

.footer-links li a:hover {
  text-decoration: underline;
}

.copyright {
  color: white;
  font-size: 0.9rem;
}
</style>
