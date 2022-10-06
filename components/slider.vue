<template>
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-full pt-16 flex flex-col items-center justify-center"
    >
      <p class="text-center text-base font-semibold text-gray-500">
        Trusted by over {{ (47000).toLocaleString() }} very average small
        businesses
      </p>
      <div class="slider">
        <div class="slide-track gap-16 justify-center items-center">
          <div v-for="image in images" :key="image.alt" class="slide w-48">
            <img :src="image.url" class="" :alt="image.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          alt: "cisco",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
        },
        {
          alt: "udemy",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
        },
        {
          alt: "netflix",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",
        },
        {
          alt: "ibm",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
        },
        {
          alt: "google",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        },
        {
          alt: "home_depot",
          url: "https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg",
        },
        {
          alt: "segment",
          url: "https://images.ctfassets.net/7rbn0raz0t75/6Lk7pnQjWMUjFIe3QFN4me/1b96e264a38a4c57ba5aa5f35a83b7ff/Twilio___Segment___Horizontal___Green.svg?w=1920&q=100",
        },
        {
          alt: "eventbrite",
          url: "https://images.ctfassets.net/7rbn0raz0t75/7ya3Ea1542DQwNSGdgCe1L/8af7c6b1c19f7b393a1e27694698ec56/Eventbrite_Logo.svg",
        },
        {
          alt: "typeform",
          url: "https://images.ctfassets.net/7rbn0raz0t75/3Em7kojK0ZcZuHdrFwltj8/13465aec8c73cd36df838062df5c95bc/typeform_full.svg",
        },
        {
          alt: "mixpanel",
          url: "https://images.ctfassets.net/7rbn0raz0t75/4FzgBmAzui3Lht6yi2cNRR/56d517e85355d8c673690cd6194b85ed/Wordmark-Purple__1_.svg",
        },
        {
          alt: "thryv",
          url: "https://images.ctfassets.net/7rbn0raz0t75/1ReKXsvfiWARdlBNzqQ8yx/dd6114bcbdce8ce2d1b1958f7cd78c7d/Thryv.svg",
        },
        {
          alt: "airbnb",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
        },
        {
          alt: "fico",
          url: "https://www.fico.com/sites/default/files/fico-logo-blue-large.png",
        },
        {
          alt: "vmware",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png?20210506163458",
        },
        {
          alt: "cisco",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png",
        },
        {
          alt: "udemy",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
        },
        {
          alt: "netflix",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png",
        },
        {
          alt: "ibm",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
        },
        {
          alt: "google",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
        },
        {
          alt: "home_depot",
          url: "https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg",
        },
        {
          alt: "segment",
          url: "https://images.ctfassets.net/7rbn0raz0t75/6Lk7pnQjWMUjFIe3QFN4me/1b96e264a38a4c57ba5aa5f35a83b7ff/Twilio___Segment___Horizontal___Green.svg?w=1920&q=100",
        },
        {
          alt: "eventbrite",
          url: "https://images.ctfassets.net/7rbn0raz0t75/7ya3Ea1542DQwNSGdgCe1L/8af7c6b1c19f7b393a1e27694698ec56/Eventbrite_Logo.svg",
        },
        {
          alt: "typeform",
          url: "https://images.ctfassets.net/7rbn0raz0t75/3Em7kojK0ZcZuHdrFwltj8/13465aec8c73cd36df838062df5c95bc/typeform_full.svg",
        },
        {
          alt: "mixpanel",
          url: "https://images.ctfassets.net/7rbn0raz0t75/4FzgBmAzui3Lht6yi2cNRR/56d517e85355d8c673690cd6194b85ed/Wordmark-Purple__1_.svg",
        },
        {
          alt: "thryv",
          url: "https://images.ctfassets.net/7rbn0raz0t75/1ReKXsvfiWARdlBNzqQ8yx/dd6114bcbdce8ce2d1b1958f7cd78c7d/Thryv.svg",
        },
        {
          alt: "airbnb",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png",
        },
        {
          alt: "fico",
          url: "https://www.fico.com/sites/default/files/fico-logo-blue-large.png",
        },
        {
          alt: "vmware",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Vmware.svg/1024px-Vmware.svg.png?20210506163458",
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
body {
  align-items: center;
  background: none;
  display: flex;
  height: 100vh;
  justify-content: center;
}

@mixin white-gradient {
  background: linear-gradient(
    to right,
    rgba(227, 227, 227, 0) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-192px * 10));
  }
}

// Styling
.slider {
  height: 250px;
  overflow: hidden;
  position: relative;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    width: calc(192px * 20);
    display: flex;
    animation: scroll 20s linear infinite;
    justify-content: space-between;
  }
}
</style>