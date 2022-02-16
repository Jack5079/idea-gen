<script context="module">
  export const prerender = true
  export const router = false
</script>

<script>
  import make_idea from '$lib/idea'
  import '$lib/app.css'
  import Another from '@fluentui/svg-icons/icons/arrow_counterclockwise_24_regular.svg?raw'
  import IconButton from 'fluent-svelte/IconButton/IconButton.svelte'
  import TextBlock from 'fluent-svelte/TextBlock/TextBlock.svelte'
  import Button from 'fluent-svelte/Button/Button.svelte'
  import ToggleSwitch from 'fluent-svelte/ToggleSwitch/ToggleSwitch.svelte'
  import { browser } from '$app/env'
  import words from '$lib/words'

  const selected = Object.fromEntries(Object.keys(words).map((k) => [k, true]))
  $: actually_selected = Object.entries(selected).filter((entry) => entry[1])
  $: idea = make_idea({
    adjectives: actually_selected
      .map(([selected]) => words[selected].adjectives)
      .flat(),
    nouns: actually_selected.map(([selected]) => words[selected].nouns).flat()
  })
</script>

{#if browser}
  <TextBlock variant="display" style="grid-area: h1"
    >you should make {'aeiou'.includes(idea[0]) ? 'an' : 'a'}</TextBlock
  >
  <TextBlock variant="titleLarge" style="grid-area: idea">{idea}</TextBlock>
  <IconButton
    title="Another one."
    style="grid-area: another"
    on:click={() => (selected = selected)}>{@html Another}</IconButton
  >

  <nav style:grid-area="options">
    {#each Object.keys(words) as set}
      <ToggleSwitch
        bind:checked={selected[set]}
        disabled={selected[set] && actually_selected.length === 1}
        >{set}</ToggleSwitch
      >
    {/each}
  </nav>
  <Button
    variant="hyperlink"
    style="grid-area: credit"
    href="https://github.com/mollersuite/idea-gen">made of mollybdenum</Button
  >
{:else}
  <TextBlock variant="display" style="grid-area: h1">you should</TextBlock>
  <TextBlock variant="titleLarge" style="grid-area: idea"
    >enable javascript</TextBlock
  >
  <IconButton title="Refresh" style="grid-area: another" href="?"
    >{@html Another}</IconButton
  >
  <div style:grid-area="options">
    the site is on static hosting because i cant afford servers
    <br />
    so please enable javascript since i have to do it on the client
  </div>
  <Button
    variant="hyperlink"
    style="grid-area: credit"
    href="https://github.com/mollersuite/idea-gen">made of mollybdenum</Button
  >
{/if}
