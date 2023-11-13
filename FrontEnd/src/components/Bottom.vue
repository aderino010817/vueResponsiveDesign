<script setup lang="ts">

</script>

<template>
    <div class="primaryContainer">
  <div class="whole">
    <div class="container">
        <div class="dotred">.
            <div class="dotwhite">.
                <div class="lastdotred">.</div>
            </div>
        </div>
    </div>
    <div class="anotherContainer">
        <div class="anotherRed">.</div>
    </div>
  </div>
  <div class="blankWhite">.
    <div class="goRow">
        <div class="justred">
            red
        </div>
        <img class="image" src="../assets/Image/FIGHTING.png" />
    </div>
    <div class="whiteRed">.</div>
  </div>
</div>
</template>
<style>

.image {
    width: 60px;
    height: 60px;
    margin-left: 180px;
    margin-top: -1em;
    margin-right: -4em;
    
}

.goRow {
    display: flex;
    flex-direction: row;
}

.justred {
    color: red;
    background-color: red;
    width: 20px;
    height: 21px;
}
.primaryContainer {
    display: flex;
    flex-direction: row;
}
.whiteRed {
    background-color: red;
    color: red;
    margin-left: 2em;
    width: 40px;
}
.blankWhite {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: white;
}
.anotherContainer {
    display: flex;
    flex-direction: column;
    background-color: blue;
}
.anotherRed {
    color: red;
    background-color: red;
    width: 40px;
    height: 20px;
    margin-right: -20px;
}
.lastdotred {
    color: red;
    background-color: red;
    margin-left: 10px;
    width: 40px;
}
.dotwhite {
    color: white;
    background-color: white;
    width: 20px;
    height: 30px;
    margin-left: 1em;
}
.dotred {
    color: red;
    background-color: red;
    width: 35px;
    height: 25px;
}
.whole {
    display: flex;
    width: 65%;
    margin-top: 1em;
    border: 3px solid black;
    height: 54px;
    flex-direction: row;
    background-color: blue;
}
.container {
    background-color: blue;
    width: 100%;
    display: flex;
    flex-direction: column;
}

@media only screen and (max-width: 840px) {
    .image {
    width: 60px;
    height: 60px;
    margin-left: 140px;
    margin-top: -1em;
    margin-right: -4em;
}
}

@media only screen and (max-width: 730px) {
    .primaryContainer {
    display: none;
}
}
</style>