<template>
  <div class="">
    <main>
      <Hero />
      <Plans />

      <Waterfall />
      <Testimonials />
      <Lineitems :selectedPlan="selectedPlan" />
      <Faqs />
    </main>
    <Footer />
  </div>
</template>