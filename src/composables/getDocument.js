// import { ref, watchEffect } from "vue"
// import {projectFirestore} from '../firebase/config'

// const getDocuments = (collection,id) =>{
//     const document = ref(null)
//     const error = ref(null)

//     let documentRef = projectFirestore.collection(collection).doc(id)

//    const unsub = documentRef.onSnapshot(doc =>{

//         if(doc.data()){
//             document.value = {...doc.data(),id:doc.id}
//             error.value = null
//         }else{
//             error.value = 'Falied To load'
//         }
       
//     },err=>{
       
//         error.value = 'Failed to fetch data .'
//     })

//     watchEffect((onInvalidate)=>{
//         onInvalidate(() => unsub())
//     })



//     return {error, document }

// }

// export default getDocuments