import {atom} from 'recoil'



export const networkAtom = atom({
    key:"networkAtom",
    default:104
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:10
})

export const messagingAtom = atom({
    key:"messagingAtom",
    default:6
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
})

export const trialAtom = atom({
    key:"trialAtom",
    default:0
})