import { collection, getDocs } from 'firebase/firestore'
import { data } from '../__mocks__/store'
import { db } from '../config/firebase'
import { dataFormat } from '../types/dataTypes'

export default class CallData {

    async getProjectsData() {
        if (import.meta.env.DEV) {
            const projectsCollectionRef = collection(db, 'projects')
            console.log(projectsCollectionRef)

            try {
                const myData = await getDocs(projectsCollectionRef)
                const filteredData = myData.docs.map(doc => ({...doc.data(), id: doc.id})) as dataFormat[]

                return filteredData

            } catch (err) {
                console.error(err)
            }
        } else {
            return data
        }
    }
}
