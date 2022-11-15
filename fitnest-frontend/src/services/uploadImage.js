import * as ImagePicker from "expo-image-picker";
//function to pick and upload image
const uploadImage = async (image) => {
    let res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
    })
    if (!res.cancelled) {
        image = res.uri;
    }

    return image;
}

export default uploadImage;