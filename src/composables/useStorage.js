// import { ref } from 'vue'
// import {projectStorage} from '../firebase/config'
// import getUser from '../composables/getUser'

// const {user} = getUser()
// const useStorage = () =>{
//     const error = ref(null)
//     const url = ref(null)

//     const filePath = ref(null)

//     const uploadImage = async (file) =>{

      
//         filePath.value =`covers/${user.value.uid}/${file.name}`
//         const storageRef = projectStorage.ref(filePath.value)

//         try {

//             const res = await storageRef.put(file)
//             url.value= await res.ref.getDownloadURL()

            
//         } catch (err) {
//             console.log(err)
//             error.value = err.message
//         }
    
//     }

//     const deleteImage = async (path) =>{

//         const storageRef = projectStorage.ref(path)
//         try {
//             await storageRef.delete()
            
//         } catch (err) {
//             console.log(err)
//             error.value=err.message
//         }
      
//     }






//     return{uploadImage,url,filePath,error,deleteImage}


// }

// export default useStorage