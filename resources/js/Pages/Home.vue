<template>
   <Head>
    <title>Your page title</title>
    <meta name="description" content="Your page description">
  </Head>

  <div class="row">
    <div class="col-xl-3 col-lg-4 col-sm-6 sm-12 mb-4">
      <div class="card" style="height: 110px;">
        <div class="card-body">
          P
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-4 col-sm-6 sm-12 mb-4">
      <div class="card" style="height: 110px;">
        <div class="card-body">
          P
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-4 col-sm-6 sm-12 mb-4">
      <div class="card" style="height: 110px;">
        <div class="card-body">
          P
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-lg-4 col-sm-6 sm-12 mb-4">
      <div class="card" style="height: 110px;">
        <div class="card-body">
          P
        </div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <h4 class="mb-0 card-title">Title Card</h4>
    </div>
    <div class="card-body">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi odio est nam vel laudantium delectus minima dolores expedita voluptatibus cupiditate! Tempore adipisci ab libero repellat assumenda magni ratione quidem voluptatum.</p>
      <input type="text" class="form-control" style="max-width: 300px;" spellcheck="false">
      <div class="mt-3">
        <!-- <button type="button" class="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#myModal">Show Modal</button> -->
        <button type="button" class="btn btn-primary me-3" @click="showModal">Show Modal</button>
        <button type="button" class="btn bg-soft-primary text-primary border-0 me-3">Click Me</button>
      </div>
    </div>

    <Teleport to="body">
      <div class="modal fade" id="myModal" role="document">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title mb-0">Modal Title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-target="#myModal"></button>
            </div>
            <div class="modal-body">
              <p>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Head } from '@inertiajs/inertia-vue3';

// jika ingin pake modal toggle via js 
const myModal = ref(null);
onMounted(() => {
  myModal.value = new bootstrap.Modal(document.getElementById('myModal'), {});
  
});
const showModal = () => {
  myModal.value.show();
}

</script>