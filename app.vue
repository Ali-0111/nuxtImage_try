<template>
  <NuxtLayout>
    <ClientOnly>
      <!-- https://image.nuxt.com/usage/nuxt-img -->
      <figure class="mb-8">
        <NuxtImg
          src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
          format="jpg"
          :placeholder="[30, 20]"
          width="300"
          height="200"
          class="rounded"
        />

        <figcaption class="text-gray-600 text-xs mt-3">
          Photo by
          <a
            href="https://unsplash.com/@vorosbenisop"
            target="_blank"
            class="underline"
            >Benjamin Voros</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/mountain"
            target="_blank"
            class="underline"
            >Unsplash</a
          >.
        </figcaption>
      </figure>
    </ClientOnly>
    <ClientOnly>
      <figure>
        <NuxtPicture
          src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
          width="3750"
          height="2500"
          format="jpg"
          sizes="xs:200px md:500px lg:1024"
        />
        <figcaption class="text-gray-600 text-xs mt-3">
          Photo by
          <a
            href="https://unsplash.com/@kydroon"
            target="_blank"
            class="underline"
            >Kurt Cotoaga</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/mountain"
            target="_blank"
            class="underline"
            >Unsplash</a
          >.
        </figcaption>
      </figure>
    </ClientOnly>
  </NuxtLayout>
</template>
