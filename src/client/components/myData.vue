<template>
<div class="teach-data-axios" >
            <div class="teach-data-name fl">
                <div class="teach-data-name-content " v-for="(itemname) in value[0].name">
                    <div v-for="itemn in itemname">{{itemn}}</div>
                </div>
            </div>
            <div class="teach-data-data fr">
                <div class="teach-data-data-content" v-for="(itemdata) in value[0].data">
                    <div v-for="itemd in itemdata">{{itemd}}</div>
                </div>
            </div>
        </div>
</template>

<script>
export default{
 props:['value']

}
</script>
