<template>
  <div class="">
    <main>
      <Hero />
      <Plans />
      
      <Waterfall />
      <Testimonials />
      <Lineitems :workflows="workflows" :selectedPlan="selectedPlan" />
      <Faqs />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        selectedPlan: localStorage.getItem('tier') ?? 'Professional',
        workflows: localStorage.getItem("workflows") ?? 0,
        records: [],
      },
      deal: {},
    };
  },

  methods: {
    getImage(_id) {
      fetch(`/api/deals/${_id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
  },
};
</script>