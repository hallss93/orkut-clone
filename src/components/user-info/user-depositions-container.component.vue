<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <div class="flex">
      <div class="grow h-14">
        <h6 class="text-sm font-bold text-gray-500 text-left">
          Depoimentos (39)
        </h6>
      </div>
    </div>
    <div
      class="flex border-b pb-4 mb-4"
      v-for="i in 5"
      :class="i < 5 ? 'border-b border-gray-200' : 'border-none'"
      :key="i"
    >
      <img
        class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div class="grow text-left ms-4">
        <p class="font-bold text-base text-gray-700">Kayn Vampyr:</p>
        <p class="font-normal text-sm text-gray-500">
          Lorem ipsum mi euismod sagittis pretium erat molestie hendrerit, leo
          mauris varius praesent interdum morbi placerat class tortor, arcu
          lobortis nisl adipiscing fusce posuere nunc.
        </p>
      </div>
    </div>
  </div>
</template>
