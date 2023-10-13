import { collection, getDocs } from 'firebase/firestore'
import { data } from '../__mocks__/store'
import { db } from '../config/firebase'
import { dataFormat } from '../types/dataTypes'

export default class CallData {
    async getProjectsData() {
        if (import.meta.env.DEV) {
            const projectsCollectionRef = collection(db, 'projects')

            try {
                const myData = await getDocs(projectsCollectionRef)

                const filteredData = myData.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                    rank: typeof doc.data().rank === 'number' ? doc.data().rank : 1,
                })) as dataFormat[]

                const filteredItemsWithRank = filteredData.sort((a, b) => {
                    if (a.rank < b.rank) return -1
                    if (a.rank > b.rank) return 1
                    return 0
                })

                return filteredItemsWithRank

            } catch (err) {
                console.error(err)
            }
        } else {
            return data
        }
    }
}