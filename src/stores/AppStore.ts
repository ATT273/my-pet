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

    const changeState = (value: string) => {
        console.log('changeState', value)
        state.value = value
    }

    const updateStat = (props: { key: string, value: number }) => {
        switch (props.key) {
            case 'energy':
                cEnergy.value = props.value
                break;
            case 'thirst':
                cThirst.value = props.value
                break;
            case 'hunger':
                cHunger.value = props.value
                break;
            case 'happy':
                cHappy.value = props.value
                break;
            case 'hygiene':
                cHygiene.value = props.value
                break;
        }
        console.log('cHunger.value', cHunger.value)
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

    return { statDropRate, statRiseRate, cEnergy, cHappy, cHunger, cThirst, cHygiene, state, dropStat, raiseStat, changeState, updateStat }
})