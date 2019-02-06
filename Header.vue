<template>
  <div class="nunito">
      <b-navbar toggleable type="light" variant="light">
          <b-navbar-toggle target="nav_text_collapse" class="none"></b-navbar-toggle>

          <b-navbar-brand href="/"><b-img width="70" blank-color="#8dc448" alt="center img" class="m-1" src="https://www.img.in.th/images/006349ed854978bfd11bd0e2c2025af7.png" /></b-navbar-brand>

          

          <b-collapse is-nav id="nav_text_collapse">
              <b-navbar-nav>
                  <b-nav-item href="otpnumber"> OTP NUMBER</b-nav-item>
                  <b-nav-item href="artlist"> ARTIST </b-nav-item>
                  <b-nav-item href="vote"> VOTE </b-nav-item>
                  <b-nav-item href="post"> POST </b-nav-item>
                  <!-- <b-nav-item href="home"> HOME </b-nav-item> -->
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>