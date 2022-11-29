<template>
  <Prism :language="lang">{{ code }}</Prism>
</template>

<script>
import "prismjs";
import "../styles/prism.css";

import Prism from "vue-prism-component";

import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-liquid";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-php";
import "prismjs/components/prism-scss";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

export default {
  props: ['code', 'lang'],
  components: { Prism },
};
</script>