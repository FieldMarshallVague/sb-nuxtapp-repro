<template>
  <div>
    <input
      id="user-number-range"
      ref="elmUserNumberRange"
      v-model="displayValue"
      class="rangeSlider__input"
      type="range"
      name="numberOfUsersRange"
      min="1"
      max="1000"
      @input="onRangeInput"
    />
  </div>
</template>

<script setup lang="ts">
const displayValue = ref(1)
const { $debounce } = useNuxtApp()

const rangeOutputHandler = (outputValue: number) => {
  console.log('nothing of note')
}

const sliderDebounceFunc = $debounce(rangeOutputHandler, 1)

const onRangeInput = ({ target }: any) => {
  console.log(`user range slider: ${target.value}`)

  const outputValue = 1

  sliderDebounceFunc(outputValue)
}
</script>

<style scoped></style>
