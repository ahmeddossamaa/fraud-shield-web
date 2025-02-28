<template>
  <div class="container-fluid vh-100 d-flex flex-column">
    <!-- Header -->
    <header class="d-flex justify-content-between align-items-center p-3 bg-white shadow">
      <div class="d-flex align-items-center">
        <!-- <img src="@/assets/logo.png" alt="Logo" class="logo me-2" /> -->
        <h1 class="fs-4 fw-bold m-0">Fraud Shield</h1>
      </div>
      <button @click="signOut" class="btn btn-danger">Logout</button>
    </header>

    <!-- Main Content -->
    <div class="row flex-grow-1">
      <!-- Sidebar -->
      <aside class="col-md-3 bg-light p-3">
        <h2 class="fs-5">Transactions</h2>
        <ul class="list-group">
          <li 
            v-for="transaction in transactions" 
            :key="transaction.id" 
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span class="fw-bold">{{ transaction.amount }}</span>
            <span class="text-muted">{{ transaction.to }}</span>
            <span class="text-muted small">{{ transaction.date }}</span>
          </li>
        </ul>
      </aside>

      <!-- Content Section -->
      <main class="col-md-9 d-flex justify-content-center align-items-center bg-white">
        <div class="text-start">
          <div class="mb-3">
            <label class="form-label">Amount</label>
            <input type="text" class="form-control" v-model="transactionData.amount" required />
          </div>
          <div class="mb-3">
            <label class="form-label">to</label>
            <input type="text" class="form-control" v-model="transactionData.to" required />
          </div>
          <div class="mb-3">
            <label class="form-label">Personal Photo</label>
            <input type="file" class="form-control" @change="handleFileUpload" />
          </div>

          <button class="btn btn-primary px-4 py-2 m-auto" data-bs-toggle="modal" data-bs-target="#transactionModal" @click="startTimer">
            <i class="bi bi-plus-lg me-2"></i> Make Transaction
          </button>
        </div>
      </main>
    </div>

    <!-- Bootstrap Modal -->
    <div class="modal fade" id="transactionModal" tabindex="-1" aria-labelledby="transactionModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="transactionModalLabel">New Transaction</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitTransaction">
              <input type="text" class="form-control mb-3" v-model="password" required>

              <button type="submit" class="btn btn-success w-100">Save Transaction</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { auth, signOut } from "../utils/auth";

const transactions = ref([
  { id: 1, amount: "$100", to: "Vendor A", date: "2023-10-01" },
  { id: 2, amount: "$200", to: "Client B", date: "2023-10-02" },
  { id: 3, amount: "$50", to: "Buyer C", date: "2023-10-03" },
]);

const password = ref("");
const correctPassword = "1234";

const time = ref(0);

const transactionData = ref({ amount: "", to: "", date: "" });

const submitTransaction = () => {
  if (password.value != correctPassword) {
    alert("Incorrect Password!");
    return;
  }

  const typingTime = new Date().getTime() - time.value;

  time.value = 0;

  const formData = new FormData();

  formData.append("amount", transactionData.value.amount);
  formData.append("to", transactionData.value.to);
  formData.append("typingTime", typingTime);
  if (transactionData.value.file) {
    formData.append("file", transactionData.value.file);
  }

  // const modal = document.getElementById("transactionModal");
  // const modalInstance = bootstrap.Modal.getInstance(modal);
  // modalInstance.hide();
};

const startTimer = () => {
  time.value = new Date().getTime();
}

const handleFileUpload = e => {
  transactionData.value.file = e.target.files[0] ?? null;
}

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = "/"; // Redirect if not logged in
    }
  });
});
</script>

<style scoped>
.logo {
  width: 30px;
  height: 30px;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-primary {
  background-color: #1e3c72;
  border: none;
}

.btn-primary:hover {
  background-color: #2a5298;
}
</style>
