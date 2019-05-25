<template>
  <div class="langs">
    <div class="langs__currentLang" v-on:click='openLang'>en</div>
    <div class="langs__all" style="display: none;">
      <span class="langs__lang" v-on:click="setLocale('en')" data-lang='en' selected=''>en</span>
      <span class="langs__lang" v-on:click="setLocale('ru')" data-lang='ru' selected='selected'>ru</span>
      <span class="langs__lang" v-on:click="setLocale('cn')" data-lang='cn' selected=''>cn</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lang: String,
    onSelectLang: Function,
  },
  methods: {
    setLocale(locale){
      this.$i18n.locale = locale;

      document.querySelector('.langs__currentLang').innerText = event.target.dataset.lang;
      
      document.querySelector('.langs__all').style.display = 'none';

      this.onSelectLang({
        d: event.target.dataset.lang
      })
    },
    openLang(event){
      var el = document.querySelector('.langs__all');
      el.style.display = (el.style.display == 'none') ? 'block' : 'none'
    },
    selectLang(event){
      
    }
  }
}
</script>

<style lang="scss" scoped>
.langs {
  position: relative;
  color: #fff;

  &__currentLang {
    position: relative;
    font: 400 2rem/25px "Montserrat", sans-serif;

    cursor: pointer;
    padding-left: 10px;
    padding-right: 13px;

    &:before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 25px;
      height: 25px;
      right: 100%;
      top: 0;
      
      
      background: url('../assets/header-earth-icon.png') no-repeat;
    }
    &:after {
      content: '▼';
      position: absolute;
      display: block;
      font-size: 1.6rem;
      left: 100%;
      top: 1px;
    }
  }
  &__all {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(255,255,255,.3);
    padding: 10px 13px;
    border-radius: 3px;
  }
  &__lang {
    display: block;
    font: 400 1.8rem/1 "Montserrat", sans-serif;
    cursor: pointer;
    margin-bottom: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
