// // utils/firebaseStorage.ts
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { storage } from "@/lib/firebase";

// export async function uploadFile(file: File, folderPath: string) {
//   try {
//     // Generate unique filename
//     const fileExtension = file.name.split('.').pop();
//     const filename = `${Date.now()}.${fileExtension}`;
//     const storageRef = ref(storage, `${folderPath}/${filename}`);
    
//     // Upload file
//     const snapshot = await uploadBytes(storageRef, file);
    
//     // Get public URL
//     const downloadURL = await getDownloadURL(snapshot.ref);
    
//     return {
//       url: downloadURL,
//       path: snapshot.ref.fullPath
//     };
//   } catch (error) {
//     console.error("Upload failed:", error);
//     throw new Error("File upload failed");
//   }
// }