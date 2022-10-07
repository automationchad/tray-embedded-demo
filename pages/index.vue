<template>
  <div class="">
    <Head>
      <Title>Tray.io - {{ title }} Pricing</Title>
      <Meta name="description" :content="title" />
    </Head>
    <main>
      <Hero />
      <Plans />
      <Waterfall />
      <Testimonials />
      <Lineitems />
      <Faqs />
    </main>
    <Footer />
  </div>
</template>

<script setup>
let title;
if (typeof window !== "undefined") {
  title = ref(localStorage.getItem("companyName"));
} else title = "Platform";
</script>