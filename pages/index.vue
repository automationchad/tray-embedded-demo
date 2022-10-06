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
      selectedPlan: localStorage.getItem("tier") ?? "Professional",
      workflows: localStorage.getItem("workflows") ?? 0,
      records: [],
    };
  },
};
</script>