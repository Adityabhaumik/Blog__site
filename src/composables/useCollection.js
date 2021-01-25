// import { ref } from "vue"
// import {projectFirestore} from '../firebase/config'

// const useCollection = (collection) =>{
//     const error = ref(null)
//     const isPending = ref(false)
//     const addDoc = async(doc) =>{
//             isPending.value=true
//         error.value = null
//         try {
//            const res = await projectFirestore.collection(collection).add(doc)
//             isPending.value=false
//             return res
//         } catch (err) {
//             console.log(err)
//             error.value ="could not send error message"
//             isPending.value=false
//         }


//     }

//     return {error,addDoc,isPending}

// }

// export default useCollection