
<template>
  <div>
    <h2>Daftar Barang</h2>
    <ul>
      <li v-for="barang in daftarBarang" :key="barang.id">
        {{ barang.nama }} - {{ barang.harga }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      daftarBarang: [
        { id: 1, nama: 'Barang 1', harga: 100 },
        { id: 2, nama: 'Barang 2', harga: 150 },
        { id: 3, nama: 'Barang 3', harga: 200 },
      ],
    };
  },
};
</script>

