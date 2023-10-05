import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { dataFormat } from '../types/dataTypes'
import { db } from '../config/firebase'

const updateProjects = async (project: dataFormat, action: string) => {
    console.log('updateprojects :', project, action)
    // action: 'create' / 'update' / 'delete'

    const docRef = doc(db, 'projects', project.id)
    const collectionRef = collection(db, 'projects')

    switch (action) {
        case 'delete':
            try {
                await deleteDoc(docRef)
            } catch (error) {
                console.error(error)
            }
            break

        case 'update':
            try {
                await updateDoc(docRef, project)
            } catch (error) {
                console.error(error)
            }
            break

        case 'create':
            try {
                await addDoc(collectionRef, project)
            } catch (error) {
                console.error(error)
            }
            console.log('add')
    }
}

export default updateProjects
