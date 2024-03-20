<template>
  <div class="p-6 bg-white border border-gray-200 rounded-large shadow">
    <div class="flex">
      <div class="grow h-14">
        <h6 class="text-sm font-bold text-gray-500 text-left">
          Depoimentos (39)
        </h6>
      </div>
    </div>

    <ul role="list" class="divide-y divide-gray-200">
      <li class="flex justify-between gap-x-6 py-5" v-for="i in 5" :key="i">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              Leslie Alexander
            </p>
            <p class="mt-1 text-xs leading-5 text-gray-500">
              Lorem ipsum mi euismod sagittis pretium erat molestie hendrerit,
              leo mauris varius praesent interdum morbi placerat class tortor,
              arcu lobortis nisl adipiscing fusce posuere nunc.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
