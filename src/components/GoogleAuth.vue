<template>
    <div class="login-container">
      <div class="login-box">
        <!-- <div class="logo">
          <h1>Fraud Shield</h1>
        </div>
        <p class="tagline">Protecting your business from fraud</p> -->

        <div class="logo">
            <h2>Welcome Back!</h2>
        </div>
        <button @click="signInWithGoogle" class="google-btn">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" class="google-logo" />
          Sign in with Google
        </button>
        <!-- <p class="footer-text">By signing in, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p> -->
      </div>
    </div>
  </template>
  
  <script>
  import { auth, googleProvider, signInWithPopup } from "../utils/auth";
  
  export default {
    methods: {
      async signInWithGoogle() {
        try {
          await signInWithPopup(auth, googleProvider);
          this.$router.push("/"); // Redirect to Home page after login
        } catch (error) {
          console.error("Error signing in:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); */
    color: white;
  }
  
  .login-box {
    background: rgba(255, 255, 255, 0.1);
    padding: 2.5rem;
    border-radius: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    background-color: #2a5298;
    text-align: center;
    width: 350px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
  
  .logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .logo h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }
  
  .tagline {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
  }
  
  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px;
    background-color: white;
    color: #333;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  .google-btn:hover {
    background-color: #f1f1f1;
    transform: translateY(-2px);
  }
  
  .google-btn:active {
    transform: translateY(0);
  }
  
  .google-logo {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  
  .footer-text {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 1.5rem;
  }
  
  .footer-text a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    font-weight: 500;
  }
  
  .footer-text a:hover {
    text-decoration: underline;
  }
  </style>