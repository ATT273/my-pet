import { defineStore } from 'pinia'
import { ref } from 'vue'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAppStore = defineStore('appStore', () => {
    let state = ref('awake')
    const statDropRate = ref({
        eRate: 10,
        hngRate: 10,
        tRate: 10,
        hpyRate: 10,
        hygRate: 10,
    })
    const statRiseRate = ref({
        eRate: 20
    })
    let cEnergy = ref(80)
    let cHunger = ref(60)
    let cThirst = ref(100)
    let cHappy = ref(100)
    let cHygiene = ref(50)
    let menuType = ref('food')
    let curXp = ref(10)
    let curLvl = ref(1)
    let lvlXp = ref(100)
    const evolveMark = [2, 3, 6, 9, 12]
    // Inventory
    const foodInventory = ref([
        {
            name: "Grilled fish",
            effect: 20,
            price: 50,
            img: "grilled_fish.png",
            type: "food",
            xp: 30
        },
        {
            name: "Rice bowl",
            effect: 5,
            price: 10,
            img: "rice_bowl.png",
            type: "food",
            xp: 5
        },
        {
            name: "Cake slide",
            effect: 10,
            price: 25,
            img: "slice_of_cake.jpg",
            type: "food",
            xp: 5
        },
        {
            name: "Omlet",
            effect: 10,
            price: 25,
            img: "omlet.png",
            type: "food",
            xp: 10
        },
        {
            name: "Salad bowl",
            effect: 15,
            price: 30,
            img: "salad_bowl.jpg",
            type: "food",
            xp: 15
        }
    ])
    const drinkInventory = ref([
        {
            name: "Bottle of water",
            effect: 5,
            price: 10,
            img: "water.jpg",
            type: "drink",
            xp: 5
        },
        {
            name: "Coffee",
            effect: 20,
            price: 25,
            img: "coffee.jpg",
            type: "drink",
            xp: 15
        },
        {
            name: "Cola",
            effect: 25,
            price: 20,
            img: "cola.png",
            type: "drink",
            xp: 5
        },
        {
            name: "Orange Juice",
            effect: 30,
            price: 30,
            img: "orange_juice.jpg",
            type: "drink",
            xp: 20
        },
        {
            name: "Milk",
            effect: 20,
            price: 15,
            img: "milk.jpg",
            type: "drink",
            xp: 20
        },
    ])
    const changeState = (value: string) => {
        state.value = value
    }

    const updateLxlXp = (value: number) => {
        lvlXp.value = value
    }
    const updateLvl = (value: number) => {
        curLvl.value = value
        lvlXp.value = 100 * value * 2;
        curXp.value = 0
    }
    const updateStat = (props: { key: string, value: number }) => {
        // console.log(props.key, props.value)
        switch (props.key) {
            case 'energy':
                cEnergy.value = cEnergy.value + props.value < 100 ? cEnergy.value + props.value : 100
                break;
            case 'drink':
                cThirst.value = cThirst.value + props.value < 100 ? cThirst.value + props.value : 100
                break;
            case 'food':
                cHunger.value = cHunger.value + props.value < 100 ? cHunger.value + props.value : 100
                break;
            case 'happy':
                cHappy.value = cHappy.value + props.value < 100 ? cHappy.value + props.value : 100
                break;
            case 'hygiene':
                cHygiene.value = cHygiene.value + props.value < 100 ? cHygiene.value + props.value : 100
                break;
            case 'xp':
                curXp.value = curXp.value + props.value < lvlXp.value ? curXp.value + props.value : lvlXp.value
                break;
        }
    }
    const dropStat = (props: any) => {
        switch (props.type) {
            case 'energy':
                cEnergy.value = cEnergy.value - statDropRate.value.eRate > 0 ? cEnergy.value - statDropRate.value.eRate : 0
                break;
            case 'thirst':
                cThirst.value = cThirst.value - statDropRate.value.tRate > 0 ? cThirst.value - statDropRate.value.tRate : 0
                break;
            case 'hunger':
                cHunger.value = cHunger.value - statDropRate.value.hngRate > 0 ? cHunger.value - statDropRate.value.hngRate : 0
                break;
            case 'happy':
                cHappy.value = cHappy.value - statDropRate.value.hpyRate > 0 ? cHappy.value - statDropRate.value.hpyRate : 0
                break;
            case 'hygiene':
                cHygiene.value = cHygiene.value - statDropRate.value.hygRate > 0 ? cHygiene.value - statDropRate.value.hygRate : 0
                break;
            case 'all':
                cEnergy.value = cEnergy.value - statDropRate.value.eRate > 0 ? cEnergy.value - statDropRate.value.eRate : 0
                cThirst.value = cThirst.value - statDropRate.value.tRate > 0 ? cThirst.value - statDropRate.value.tRate : 0
                cHunger.value = cHunger.value - statDropRate.value.hngRate > 0 ? cHunger.value - statDropRate.value.hngRate : 0
                cHappy.value = cHappy.value - statDropRate.value.hpyRate > 0 ? cHappy.value - statDropRate.value.hpyRate : 0
                cHygiene.value = cHygiene.value - statDropRate.value.hygRate > 0 ? cHygiene.value - statDropRate.value.hygRate : 0
                break;

            default:
                break;
        }
    }

    const raiseStat = (props: any) => {
        switch (props.type) {
            case 'energy':
                cEnergy.value = cEnergy.value + statDropRate.value.eRate < 100 ? cEnergy.value + statDropRate.value.eRate : 100
                break;
            case 'thirst':
                cThirst.value = cThirst.value - statDropRate.value.tRate > 0 ? cThirst.value - statDropRate.value.tRate : 0
                break;
            case 'hunger':
                cHunger.value = cHunger.value - statDropRate.value.hngRate > 0 ? cHunger.value - statDropRate.value.hngRate : 0
                break;
            case 'happy':
                cHappy.value = cHappy.value - statDropRate.value.hpyRate > 0 ? cHappy.value - statDropRate.value.hpyRate : 0
                break;
            case 'hygiene':
                cHygiene.value = cHygiene.value - statDropRate.value.hygRate > 0 ? cHygiene.value - statDropRate.value.hygRate : 0
                break;
            case 'all':
                cEnergy.value = cEnergy.value - statDropRate.value.eRate > 0 ? cEnergy.value - statDropRate.value.eRate : 0
                cThirst.value = cThirst.value - statDropRate.value.tRate > 0 ? cThirst.value - statDropRate.value.tRate : 0
                cHunger.value = cHunger.value - statDropRate.value.hngRate > 0 ? cHunger.value - statDropRate.value.hngRate : 0
                cHappy.value = cHappy.value - statDropRate.value.hpyRate > 0 ? cHappy.value - statDropRate.value.hpyRate : 0
                cHygiene.value = cHygiene.value - statDropRate.value.hygRate > 0 ? cHygiene.value - statDropRate.value.hygRate : 0
                break;

            default:
                break;
        }
    }

    const changeMenu = (type: string) => {
        menuType.value = type
    }

    return {
        statDropRate,
        statRiseRate,
        cEnergy,
        cHappy,
        cHunger,
        cThirst,
        cHygiene,
        state,
        dropStat,
        raiseStat,
        changeState,
        updateStat,
        foodInventory,
        drinkInventory,
        menuType,
        changeMenu,
        curXp,
        lvlXp,
        updateLvl,
        updateLxlXp,
        curLvl,
        evolveMark
    }
})