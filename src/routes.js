import Game from './pages/Game/Game.vue'
import Almanac from './pages/Almanac/Almanac.vue'
import Tutorial from './pages/Tutorial/Tutorial.vue'

export default [
    { path: '/', component: Game, name: 'game' },
    { path: '/almanac', component: Almanac, name: 'almanac' },
    { path: '/tutorial', component: Tutorial, name: 'tutorial' },
]