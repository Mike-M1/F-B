<template >
    <div class="bg-black h-[450px] flex flex-col container">
        <br/>
    <div class="gridstuff p-[55px]">
        <div class="c1"><img :src="jacksonville" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c2"><img :src="jsu" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c3"><img :src="mit" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c4"><img :src="oregon" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c5"><img :src="tarheels" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c6"><img :src="ucf" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c7"><img :src="texas" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c8"><img :src="jacksonville" alt="" class="w-[80px] h-[50px]"></div>
        <div class="c9"><img :src="jacksonville" alt="" class="w-[80px] h-[50px]"></div>
    </div>
    </div>
</template>

<script>
import GreenPhoto from '../assets/greenphoto.jpeg'
import Jacksonville from '../assets/collegephotos/jacksonville.jpg'
import Jsu from '../assets/collegephotos/jsu.png'
import Mit from '../assets/collegephotos/MIT.png'
import Oregon from '../assets/collegephotos/oregon.png'
import Tarheels from '../assets/collegephotos/tarheels.png'
import Ucf from '../assets/collegephotos/ucf.png'
import Texas from '../assets/collegephotos/texas.png'

export default {
  name: 'SocialProof',
    data() {
        return {
        photo: GreenPhoto,
        jacksonville: Jacksonville,
        jsu: Jsu,
        mit: Mit,
        oregon: Oregon,
        tarheels: Tarheels,
        ucf: Ucf,
        texas: Texas
        }
    }
}

</script>

<style scoped>

.container{
    background-image: url('../assets/greenphoto.jpeg');
    object-fit:fill;
    background-repeat: no-repeat;
    background-position: center;

}


.gridstuff{
    display: grid;
    grid-template-areas:
    ' c1 c2 c3'
    ' c4 c5 c6'
    ' c7 c8 c9';
}
.gridstuff > * {
    margin: 10px;
    border-radius: 20px;
}
img{
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

</style>