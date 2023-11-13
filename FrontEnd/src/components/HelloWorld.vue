<script setup lang="ts">

</script>

<template>
  <div class="bgWhite">
    <div class="BlueBorderBlack">
      <div class="satu">1</div>
      <div class="flexrow">
        <div class="flexcolumn">2</div>
        <div class="flexcolumn">3</div>
      </div>
      <div class="split70">
        <div class="flexcolumnsplit">
          <div class="pertama BlueBorderBlack">
            <div class="bgRed four">4</div>
          </div>
          <div class="manamju">
            <div class="five">5</div>
            <div class="six">6</div>
            <div class="seven">7</div>
          </div>
        </div>
        <div class="kedua BlueBorderBlack">
          <div class="bgRed eight">8</div>
          <div class="bgRed nine">9</div>
          <div class="bgRed ten">10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.manamju .five {
  border: 2px solid black;
  width: 100%;
  padding: 1em;
}

.manamju .six {
  border: 2px solid black;
  width: 100%;
  padding: 1em;
}

.manamju .seven {
  border: 2px solid black;
  width: 100%;
  padding: 1em;
}

.manamju {
  display: flex;
  flex-direction: row;
  border: 2px solid black;
  justify-content: space-around;
  text-align: center;
  align-items: center;
}

.flexcolumnsplit {
  display: flex;
  flex-direction: column;
  width: 70%;
}

.split70 {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.split70 .pertama {
  text-align: center;
}

.split70 .kedua {
  width: 30%;
  text-align: center;
  max-height: fit-content;}

.satu {
  background-color: blue;
  border: 3px solid black;
  text-align: center;
  padding: 1em;
}

.flexrow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.flexrow div {
  text-align: center;
  padding: 1em;
  border: 3px solid black;
  width: 50%;
}

.bgRed {
  background-color: red;
  border: 2px solid black;
  padding: 5px;
  margin: 5px;
}

.bgWhite {
  background-color: white;
  border: 4px solid gray;
  padding: 1em;
  margin: 1em;
  margin-bottom: 8em;
}

.BlueBorderBlack {
  background-color: blue;
  border: 3px solid black;
  padding: 1em;
}

@media only screen and (max-width: 400px) {
  .flexrow {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}


.split70 {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: yellow;
}

.split70 .kedua {
  display: flex;
  flex-direction: row;
  width: 84%;
  text-align: center;
  max-height: fit-content;
  justify-content: space-around;

}


.flexcolumnsplit {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.kedua .bgRed {
  height: 50px;
  width: 50px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.four {
  height: 80px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.flexrow div {
  text-align: center;
  padding: 1em;
  border: 3px solid black;
  width: 83%;
  height: 8px;
}
}
</style>
